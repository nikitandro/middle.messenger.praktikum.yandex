import Block from '../block';
import { UserListItemInputParams } from './types';
import userListItemTmpl from './user-list-item.tmpl';
import './user-list-item.scss';
import Avatar from '../avatar';
import { API_STATIC_URL } from '../../services/api';

export default class UserListItem extends Block {
    constructor(inputParams: UserListItemInputParams) {
        const avatar = new Avatar({
            props: {
                src: inputParams.props?.avatar
                    ? API_STATIC_URL + inputParams.props?.avatar
                    : undefined,
            },
            attrs: {
                class: 'user-list-item__avatar',
            },
        });
        super('li', {
            ...inputParams,
            props: { ...inputParams.props, avatar },
            attrs: {
                ...inputParams.attrs,
                class: ['chat-list-item user-list-item', inputParams?.attrs?.class].join(' '),
            },
        });
    }

    protected render(): Node {
        return this.compile(userListItemTmpl, { ...this._props, ...this._children });
    }
}
