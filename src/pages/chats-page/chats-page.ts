import chatsPageTmpl from './chats-page.tmpl.ts';
import './chats-page.scss';
import Block from '../../components/block';
import ChatList from '../../components/chat-list';
import ChatListItem from '../../components/chat-list-item';
import ChatSearchForm from '../../components/chat-search-form';
import Link from '../../components/link';
import Store from '../../utils/store';
import { ChatModel, CreateChatRequestModel } from '../../services/chat-api/types.ts';
import { StoreEvents } from '../../utils/store/events.ts';
import isEqual from '../../utils/isEqual.ts';
import cloneDeep from '../../utils/cloneDeep.ts';
import ChatController from '../../controllers/chat-controller';
import Button from '../../components/button';
import CustomImage from '../../components/custom-image';
import plusIcon from '../../assets/icons/plus-icon.svg';
import Modal from '../../components/modal';
import CreateChatForm from '../../components/create-chat-form';
import ChatMenu from '../../components/chat-menu';
import AddUserToChatForm from '../../components/add-user-to-chat-form';
import DeleteUserFromChatForm from '../../components/delete-user-from-chat-form/';
import Chat from '../../components/chat';

export default class ChatsPage extends Block {
    constructor() {
        const store = new Store();
        let chatListItems: ChatListItem[] = [];
        let selectedChatId: number;
        const chats: ChatModel[] = [];
        const chatList = new ChatList({ props: { chats: chatListItems } });
        const chatMenu = new ChatMenu({
            props: {
                onAddUserButtonClick: () => {
                    addUserToChatModal.toggleOpen();
                },
                onDeleteUserButtonClick: () => {
                    deleteUserFormChatModal.toggleOpen();
                },
            },
        });
        const addUserToChat = (userId: number, chatId: number) => {
            ChatController.addUsersToChat({ chatId: chatId, users: [userId] });
        };
        const deleteUserFromChat = (userId: number, chatId: number) => {
            ChatController.deleteUsersFromChat({ chatId: chatId, users: [userId] });
        };
        const addUserToChatModal = new Modal({
            content: new AddUserToChatForm({
                props: {
                    onSelectUser: (userId) => {
                        addUserToChat(userId, store.getState().selectedChatId);
                        addUserToChatModal.toggleOpen();
                    },
                },
            }),
        });

        const deleteUserFormChatModal = new Modal({
            content: new DeleteUserFromChatForm({
                props: {
                    onSelectUser: (userId) => {
                        deleteUserFromChat(userId, store.getState().selectedChatId);
                        deleteUserFormChatModal.toggleOpen();
                    },
                },
            }),
        });

        const createChatModal = new Modal({
            content: new CreateChatForm({
                events: {
                    submit: (e) => {
                        e.preventDefault();
                        const requestModel: Record<string, any> = {};
                        for (const value of new FormData(e.target as HTMLFormElement).entries()) {
                            requestModel[value[0]] = value[1];
                        }
                        if (!requestModel.title) {
                            return;
                        }
                        ChatController.createChat(requestModel as CreateChatRequestModel).then(
                            () => {
                                createChatModal.toggleOpen();
                            },
                        );
                    },
                },
            }),
        });

        const createChatButton = new Button({
            props: {
                isContentBlock: true,
                content: new CustomImage({
                    attrs: {
                        src: plusIcon,
                        class: 'side-menu__create-chat-icon',
                    },
                }),
            },
            attrs: {
                class: 'side-menu__create-chat',
            },
            events: {
                click: () => {
                    createChatModal.toggleOpen();
                },
            },
        });

        const chat = new Chat();

        super('div', {
            props: {
                createChatModal,
                createChatButton,
                chatList: chatList,
                chatSearchForm: new ChatSearchForm(),
                chatMenu,
                chat,
                profileLink: new Link({
                    props: { text: 'Профиль', to: '/settings' },
                    attrs: { class: 'side-menu__profile-link' },
                }),
            },
        });

        store.on(StoreEvents.Updated, () => {
            const newChats = cloneDeep(store.getState().chats);

            if (isEqual(newChats, chats)) {
                return;
            }
            chatList.setProps({
                props: {
                    chats: newChats.map((value: ChatModel) => {
                        return new ChatListItem({ props: { ...value } });
                    }),
                },
            });
            chatListItems = newChats;
        });
        ChatController.getChats({});
    }

    protected render(): Node {
        return this.compile(chatsPageTmpl, { ...this._props, ...this._children });
    }
}
