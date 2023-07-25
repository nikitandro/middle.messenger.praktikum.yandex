import Block from '../block';
import messageListTmpl from './message-list.tmpl';
import { IMessageListInputParams } from './types';

export default class MessageList extends Block {
    constructor(messageListInputParams: IMessageListInputParams) {
        super();
    }

    protected render(): Node {
        return this.compile(messageListTmpl, { ...this._props, ...this._children });
    }
}
