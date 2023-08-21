import chatsPageTmpl from './chats-page.tmpl.ts';
import './chats-page.scss';
import Block from '../../components/block';
import MessageList from '../../components/message-list';
import MessageListItem from '../../components/message-list-item';
import ChatList from '../../components/chat-list';
import ChatListItem from '../../components/chat-list-item';
import ChatInputForm from '../../components/chat-input-form';
import ChatSearchForm from '../../components/chat-search-form';
import Link from '../../components/link';
import Store from '../../utils/store';
import { ChatMessage, ChatModel, CreateChatRequestModel } from '../../services/chat-api/types.ts';
import { StoreEvents } from '../../utils/store/events.ts';
import isEqual from '../../utils/isEqual.ts';
import cloneDeep from '../../utils/cloneDeep.ts';
import ChatController from '../../controllers/chat-controller';
import Button from '../../components/button';
import CustomImage from '../../components/custom-image/custom-image.ts';
import plusIcon from '../../assets/icons/plus-icon.svg';
import Modal from '../../components/modal';
import CreateChatForm from '../../components/create-chat-form';
import menuButtonIcon from '../../assets/icons/menu-button-icon.svg';
import ChatMenu from '../../components/chat-menu';

export default class ChatsPage extends Block {
    constructor() {
        const store = new Store();
        let chatListItems: ChatListItem[] = [];
        let selectedChatId: number;
        const chats: ChatModel[] = [];
        const chatList = new ChatList({ props: { chats: chatListItems } });
        const chatMenu = new ChatMenu({});
        const modal = new Modal({
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
                                modal.toggleOpen();
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
                    modal.toggleOpen();
                },
            },
        });

        const menuButton = new Button({
            props: {
                isContentBlock: true,
                content: new CustomImage({
                    attrs: { src: menuButtonIcon, class: 'menu-button__image' },
                }),
            },
            attrs: {
                class: 'menu-button',
            },
        });

        let messages: ChatMessage[] = [];

        const messagesList = new MessageList({ props: { messages: [] } });

        super('div', {
            props: {
                modal,
                createChatButton,
                menuButton,
                messagesList: messagesList,
                chatList: chatList,
                chatInputForm: new ChatInputForm(),
                chatSearchForm: new ChatSearchForm(),
                chatMenu,
                profileLink: new Link({
                    props: { text: 'Профиль', to: '/settings' },
                    attrs: { class: 'side-menu__profile-link' },
                }),
            },
            attrs: {},
        });

        store.on(StoreEvents.Updated, () => {
            const newSelectedChatId: number = store.getState().selectedChatId;

            if (newSelectedChatId === selectedChatId) {
                return;
            }

            ChatController.connectToChat();
            selectedChatId = newSelectedChatId;
        });

        store.on(StoreEvents.Updated, () => {
            const newMessages: ChatMessage[] = cloneDeep(store.getState().messages);
            console.log(newMessages);
            if (!newMessages || isEqual(newMessages, messages)) {
                return;
            }

            messagesList.setProps({
                props: {
                    messages: newMessages.map((value) => {
                        return new MessageListItem({ props: value });
                    }),
                },
            });
            messages = newMessages;
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
