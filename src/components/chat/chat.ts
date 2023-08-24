import ChatController from '../../controllers/chat-controller';
import Store from '../../utils/store';
import AddUserToChatForm from '../add-user-to-chat-form';
import Block from '../block';
import Button from '../button';
import ChatInputForm from '../chat-input-form';
import ChatMenu from '../chat-menu';
import CustomImage from '../custom-image';
import DeleteUserFromChatForm from '../delete-user-from-chat-form';
import Modal from '../modal';
import menuButtonIcon from '../../assets/icons/menu-button-icon.svg';
import MessageList from '../message-list';
import { StoreEvents } from '../../utils/store/events';
import { ChatMessage, ChatModel } from '../../services/chat-api/types';
import cloneDeep from '../../utils/cloneDeep';
import isEqual from '../../utils/isEqual';
import MessageListItem from '../message-list-item';
import chatTmpl from './chat.tmpl';

export default class Chat extends Block {
    constructor() {
        let currentChat: ChatModel;
        const store = new Store();
        let selectedChatId: number;
        let messages: ChatMessage[] = [];
        const chatMenu = new ChatMenu({
            props: {
                onAddUserButtonClick: () => {
                    addUserToChatModal.toggleOpen();
                },
                onDeleteUserButtonClick: () => {
                    deleteUserFormChatModal.toggleOpen();
                },
                onDeleteChatButtonClick: () => {
                    const chatId = store.getState().selectedChatId;
                    if (typeof chatId === 'number') {
                        deleteChat(chatId);
                    }
                },
            },
        });
        const addUserToChat = (userId: number, chatId: number) => {
            ChatController.addUsersToChat({ chatId: chatId, users: [userId] });
        };
        const deleteUserFromChat = (userId: number, chatId: number) => {
            ChatController.deleteUsersFromChat({ chatId: chatId, users: [userId] });
        };
        const deleteChat = (chatId: number) => {
            ChatController.deleteChatById({ chatId });
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
        const messagesList = new MessageList({ props: { messages: [] } });

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
        super('main', {
            props: {
                isAnyChatSelected: false,
                addUserToChatModal,
                deleteUserFormChatModal,
                menuButton,
                messagesList: messagesList,
                chatMenu,
                chatInputForm: new ChatInputForm(),
                currentChat: {},
            },
        });

        store.on(StoreEvents.Updated, () => {
            const newChat: ChatModel = cloneDeep(store.getState().currentChat);

            if (!newChat) {
                this.setProps({ props: { isAnyChatSelected: false } });
                return;
            }

            if (newChat.id === currentChat?.id) {
                return;
            }

            currentChat = newChat;
            this.setProps({ props: { currentChat: newChat, isAnyChatSelected: true } });
        });
        store.on(StoreEvents.Updated, () => {
            const newMessages: ChatMessage[] = cloneDeep(store.getState().messages);
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
            const newSelectedChatId: number = store.getState().selectedChatId;

            if (newSelectedChatId === selectedChatId) {
                return;
            }

            ChatController.connectToChat();
            selectedChatId = newSelectedChatId;
            store.set(
                'currentChat',
                cloneDeep(
                    store.getState().chats.find((val: ChatModel) => {
                        return val.id === selectedChatId;
                    }),
                ),
            );
        });
    }

    protected render(): Node {
        return this.compile(chatTmpl, { ...this._props, ...this._children });
    }
}
