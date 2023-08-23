import Block from '../block';
import Input from '../input';
import addUserToChatFormTmpl from './add-user-to-chat-form.tmpl';
import './add-user-to-chat-form.scss';
import UserListItem from '../user-list-item';
import UserController from '../../controllers/user-controller';
import Store from '../../utils/store';
import { StoreEvents } from '../../utils/store/events';
import cloneDeep from '../../utils/cloneDeep';
import isEqual from '../../utils/isEqual';
import { SearchUsersByLoginResponseModel } from '../../services/user-api/types';
import UserList from '../user-list';
import debounce from '../../utils/debounce';
import { AddUsersToChatFormInputParams } from './types';

export default class AddUserToChatForm extends Block {
    constructor(inputParams: AddUsersToChatFormInputParams) {
        const store = new Store();
        let users: SearchUsersByLoginResponseModel = [];

        const search = debounce((value: string) => {
            if (value === '') {
                store.set('searchedUsers', []);
                return;
            }
            UserController.searchUsersByLogin({ login: value });
        }, 300);

        const input = new Input({
            attrs: {
                class: 'auth-form-input user-search-input',
                placeholder: 'Логин пользователя',
            },
            events: {
                input: (event) => {
                    const target = event.target as HTMLInputElement;
                    const value = target.value;
                    search(value);
                },
            },
        });

        const userList = new UserList({ props: { users: [] } });

        super('form', {
            props: {
                input,
                userList,
            },
            attrs: {
                class: 'add-user-to-chat-form',
            },
        });

        store.on(StoreEvents.Updated, () => {
            const newUsers: SearchUsersByLoginResponseModel = cloneDeep(
                store.getState().searchedUsers,
            );

            if (!newUsers || isEqual(newUsers, users)) {
                return;
            }

            users = newUsers;

            userList.setProps({
                props: {
                    users: users.map(
                        (value) =>
                            new UserListItem({
                                props: value,
                                events: {
                                    click: () => {
                                        inputParams.props?.onSelectUser(value.id);
                                    },
                                },
                            }),
                    ),
                },
            });
        });
    }

    protected render(): Node {
        return this.compile(addUserToChatFormTmpl, { ...this._props, ...this._children });
    }
}
