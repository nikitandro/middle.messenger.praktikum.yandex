import Block from '../block';
import messageListItemTmpl from './message-list-item.tmpl';
import { IMessageListItemInputParams } from './types';
import './message-list-item.scss';
import Store from '../../utils/store';

export default class MessageListItem extends Block {
    constructor(messageListItemInputParams: IMessageListItemInputParams) {
        const store = new Store();
        const { props, attrs, events } = messageListItemInputParams;
        super('li', {
            props: props,
            attrs: {
                class: [
                    'message-list-item',
                    props?.user_id !== store.getState().user.id
                        ? 'message-list-item_incoming'
                        : 'message-list-item_outgoing',
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
