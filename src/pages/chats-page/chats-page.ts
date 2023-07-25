import Handlebars from 'handlebars';
import chatsPageTmpl from './chats-page.tmpl.ts';
import './chats-page.scss';
import Block from '../../components/block/block.ts';
import MessageList from '../../components/message-list';
import MessageListItem from '../../components/message-list-item';

export default function () {
    const template = Handlebars.compile(chatsPageTmpl);

    return template({});
}

export class ChatsPage extends Block {
    constructor() {
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
            props: { messagesList: messagesList },
            attrs: {},
        });
    }

    protected render(): Node {
        return this.compile(chatsPageTmpl, { ...this._props, ...this._children });
    }
}
