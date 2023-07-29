import Block from '../block';
import chatListTmpl from './chat-list.tmpl';
import './chat-list.scss';
import { IChatListInputParams } from './types';

export default class ChatList extends Block {
    constructor(inputParams: IChatListInputParams) {
        const { props, attrs, events } = inputParams;
        super('ul', {
            props: props,
            attrs: {
                ...attrs,
                class: ['chat-list', attrs?.class ? attrs.class : ''].join(' '),
            },
            events: events,
        });
    }

    protected render(): Node {
        return this.compile(chatListTmpl, { ...this._props, ...this._children });
    }
}
