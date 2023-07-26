import Block from '../block';
import chatListItemTmpl from './chat-list-item.tmpl';
import './chat-list-item.scss';
import { IChatListItemInputParams, IChatListItemProps } from './types';

export default class ChatListItem extends Block<IChatListItemProps> {
    constructor(inputParams: IChatListItemInputParams) {
        const { props, attrs, events } = inputParams;

        super('li', {
            props: props,
            attrs: {
                ...attrs,
                class: ['chat-list-item', attrs?.class ? attrs.class : ''].join(' '),
            },
            events: events,
        });
    }

    protected render(): Node {
        return this.compile(chatListItemTmpl, { ...this._props, ...this._children });
    }
}
