import Block from '../block';
import messageListItemTmpl from './message-list-item.tmpl';
import { IMessageListItemInputParams } from './types';

export default class MessageListItem extends Block {
    constructor(messageListItemInputParams: IMessageListItemInputParams) {
        const { props, attrs, events } = messageListItemInputParams;
        super('li', {
            props: props,
            attrs: {
                class: [
                    'message-list-item',
                    props?.isIncoming ? 'message-list-item_incoming' : 'message-list-item_outgoing',
                    attrs?.class ? attrs.class : '',
                ].join(' '),
            },
            events: events,
        });
    }

    protected render(): Node {
        return this.compile(messageListItemTmpl, { ...this._props, ...this._children });
    }
}
