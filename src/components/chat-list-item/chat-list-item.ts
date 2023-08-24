import Block from '../block';
import chatListItemTmpl from './chat-list-item.tmpl';
import './chat-list-item.scss';
import { IChatListItemInputParams } from './types';
import Store from '../../utils/store';
import Avatar from '../avatar';
import { createResourceURL } from '../../services/api';

export default class ChatListItem extends Block {
    constructor(inputParams: IChatListItemInputParams) {
        const { props, attrs, events } = inputParams;

        super('li', {
            props: {
                ...props,
                avatar: new Avatar({
                    props: { src: props?.avatar ? createResourceURL(props.avatar) : undefined },
                    attrs: { class: 'chat-list-item__avatar' },
                }),
            },
            attrs: {
                ...attrs,
                class: ['chat-list-item', attrs?.class ? attrs.class : ''].join(' '),
            },
            events: {
                ...events,
                click: () => {
                    const store = new Store();
                    store.set('selectedChatId', props?.id);
                },
            },
        });
    }

    protected render(): Node {
        return this.compile(chatListItemTmpl, { ...this._props, ...this._children });
    }
}
