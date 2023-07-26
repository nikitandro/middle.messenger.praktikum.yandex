import Block from '../block';
import messageListTmpl from './message-list.tmpl';
import { IMessageListInputParams } from './types';
import './message-list.scss';

export default class MessageList extends Block {
    constructor(messageListInputParams: IMessageListInputParams) {
        const { props, attrs, events } = messageListInputParams;
        super('ul', {
            props: props,
            attrs: {
                class: ['message-list', attrs?.class ? attrs.class : ''].join(' '),
            },
            events: events,
        });
    }

    protected render(): Node {
        return this.compile(messageListTmpl, { ...this._props, ...this._children });
    }
}
