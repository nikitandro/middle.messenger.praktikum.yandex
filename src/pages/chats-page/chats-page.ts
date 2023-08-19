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
import { ChatModel } from '../../services/chat-api/types.ts';
import { StoreEvents } from '../../utils/store/events.ts';
import isEqual from '../../utils/isEqual.ts';
import cloneDeep from '../../utils/cloneDeep.ts';
import ChatController from '../../controllers/chat-controller/chat-controller.ts';

export default class ChatsPage extends Block {
    constructor() {
        const store = new Store();
        let chatListItems: ChatListItem[] = [];
        const chats: ChatModel[] = [];
        const chatList = new ChatList({ props: { chats: chatListItems } });

        const messages = [
            new MessageListItem({
                props: {
                    content: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.`,
                    isIncoming: true,
                },
            }),
            new MessageListItem({
                props: {
                    content: 'Круто!',
                    isIncoming: false,
                },
            }),
        ];
        const messagesList = new MessageList({ props: { messages: messages } });
        super('div', {
            props: {
                messagesList: messagesList,
                chatList: chatList,
                chatInputForm: new ChatInputForm(),
                chatSearchForm: new ChatSearchForm(),
                profileLink: new Link({
                    props: { text: 'Профиль', to: '/settings' },
                    attrs: { class: 'side-menu__profile-link' },
                }),
            },
            attrs: {},
        });

        store.on(StoreEvents.Updated, () => {
            const newChats = cloneDeep(store.getState().chats);

            if (isEqual(newChats, chats)) {
                return;
            }
            console.log(newChats);
            chatList.setProps({
                props: {
                    chats: newChats.map((value: ChatModel) => {
                        return new ChatListItem({ props: { ...value } });
                    }),
                },
            });
            chatListItems = newChats;
        });
        ChatController.getChats({}).then((value) => {
            console.log(value);
        });
    }

    protected render(): Node {
        return this.compile(chatsPageTmpl, { ...this._props, ...this._children });
    }
}
