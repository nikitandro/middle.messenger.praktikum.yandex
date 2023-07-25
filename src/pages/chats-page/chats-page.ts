import Handlebars from 'handlebars';
import chatsPageTmpl from './chats-page.tmpl.ts';
import './chats-page.scss';
import Block from '../../components/block/block.ts';

export default function() {
    const template = Handlebars.compile(chatsPageTmpl);

    return template({});
}

export class ChatsPage extends Block {
    constructor() {
        super('div', {
            props: {

            },
            attrs: {

            },
        });
    }

    protected render(): Node {
        return this.compile(chatsPageTmpl, { ...this._props, ...this._children });
    }
}
