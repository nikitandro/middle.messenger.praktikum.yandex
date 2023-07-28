import chatsPageTmpl from './chats-page.tmpl.ts';
import './chats-page.scss';
import Block from '../../components/block';
import MessageList from '../../components/message-list';
import MessageListItem from '../../components/message-list-item';
import ChatList from '../../components/chat-list';
import ChatListItem from '../../components/chat-list-item';
import ChatInputForm from '../../components/chat-input-form';

export default class ChatsPage extends Block {
    constructor() {
        const chats = [
            new ChatListItem({
                props: {
                    title: 'Заголовок',
                    last_message: {
                        content: 'Привет',
                        time: new Date().toISOString(),
                    },
                    unread_count: 2,
                },
            }),
            new ChatListItem({
                props: {
                    title: 'Заголовок',
                    last_message: { content: 'Привет', time: new Date().toISOString() },
                    unread_count: 2,
                },
            }),
            new ChatListItem({
                props: {
                    title: 'Заголовок',
                    last_message: { content: 'Привет', time: new Date().toISOString() },
                    unread_count: 2,
                },
            }),
        ];
        const chatList = new ChatList({ props: { chats: chats } });

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
            },
            attrs: {},
        });
    }

    protected render(): Node {
        return this.compile(chatsPageTmpl, { ...this._props, ...this._children });
    }
}
