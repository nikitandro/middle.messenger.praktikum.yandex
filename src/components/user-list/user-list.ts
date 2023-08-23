import Block from '../block';
import { UserListInputParams } from './types';
import userListTmpl from './user-list.tmpl';

export default class UserList extends Block {
    constructor(inputParams: UserListInputParams) {
        super('ul', {
            ...inputParams,
            attrs: {
                class: ['user-list', inputParams.attrs?.class ?? ''].join(' '),
            },
        });
    }

    protected render(): Node {
        return this.compile(userListTmpl, { ...this._props, ...this._children });
    }
}
