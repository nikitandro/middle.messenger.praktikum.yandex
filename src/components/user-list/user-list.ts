import Block from '../block';
import UserListItem from '../user-list-item/user-list-item';
import { UserListInputParams } from './types';
import userListTmpl from './user-list.tmpl';
import './user-list.scss';

export default class UserList extends Block {
    constructor(inputParams: UserListInputParams) {
        super('ul', {
            ...inputParams,
            attrs: {
                class: ['user-list', inputParams.attrs?.class ?? ''].join(' '),
            },
        });
    }

    public setUsers(users: UserListItem[]) {
        this.setProps({ props: { users: users } });
    }

    protected render(): Node {
        return this.compile(userListTmpl, { ...this._props, ...this._children });
    }
}
