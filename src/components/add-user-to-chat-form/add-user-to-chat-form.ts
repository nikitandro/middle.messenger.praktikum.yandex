import Block from '../block';
import Input from '../input';
import addUserToChatFormTmpl from './add-user-to-chat-form.tmpl';
import './add-user-to-chat-form.scss';
import UserListItem from '../user-list-item/user-list-item';

export default class AddUserToChatForm extends Block {
    constructor() {
        const input = new Input({
            attrs: {
                class: 'auth-form-input user-search-input',
                placeholder: 'Логин пользователя',
            },
        });
        super('form', {
            props: {
                input,
                users: [
                    new UserListItem({
                        props: {
                            id: 753370,
                            first_name: 'Александр',
                            second_name: 'Меньщиков',
                            display_name: 'Александр',
                            login: 'aleksandr.menshchikov',
                            avatar: null,
                        },
                    }),
                ],
            },
            attrs: {
                class: 'add-user-to-chat-form',
            },
        });
    }

    protected render(): Node {
        return this.compile(addUserToChatFormTmpl, { ...this._props, ...this._children });
    }
}
