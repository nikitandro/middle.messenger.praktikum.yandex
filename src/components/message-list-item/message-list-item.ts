import Block from '../block';
import messageListItemTmpl from './message-list-item.tmpl';
import { IMessageListItemInputParams } from './types';

export default class MessageListItem extends Block {
    constructor(messageListItemInputParams: IMessageListItemInputParams) {
        super('li', messageListItemInputParams);
    }

    protected render(): Node {
        return this.compile(messageListItemTmpl, { ...this._props, ...this._children });
    }
}
