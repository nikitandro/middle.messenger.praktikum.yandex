import ChatController from '../../controllers/chat-controller';
import { GetChatUsersResponseModel } from '../../services/chat-api/types';
import cloneDeep from '../../utils/cloneDeep';
import isEqual from '../../utils/isEqual';
import Store from '../../utils/store';
import { StoreEvents } from '../../utils/store/events';
import Block from '../block';
import UserList from '../user-list';
import UserListItem from '../user-list-item/user-list-item';
import deleteUserFormChatFormTmpl from './delete-user-form-chat-form.tmpl';
import { DeleteUserFromChatFormInputParams } from './types';

export default class DeleteUserFromChatForm extends Block {
    constructor(inputParams: DeleteUserFromChatFormInputParams) {
        const store = new Store();
        let chatUsers: GetChatUsersResponseModel = [];
        let selectedChatId: number;
        const userList = new UserList({ props: { users: [] } });
        super('form', {
            props: {
                userList,
            },
            attrs: {
                class: 'add-user-to-chat-form',
            },
        });

        store.on(StoreEvents.Updated, () => {
            const newSelectedChatId = store.getState().selectedChatId;

            if (!newSelectedChatId || newSelectedChatId === selectedChatId) {
                return;
            }

            selectedChatId = newSelectedChatId;
            ChatController.getChatUsers(selectedChatId);
        });

        store.on(StoreEvents.Updated, () => {
            const newChatUsers: GetChatUsersResponseModel = cloneDeep(store.getState().chatUsers);

            if (!newChatUsers || isEqual(newChatUsers, chatUsers)) {
                return;
            }

            chatUsers = newChatUsers;
            userList.setUsers(
                newChatUsers.map(
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
            );
        });
    }

    protected render(): Node {
        return this.compile(deleteUserFormChatFormTmpl, { ...this._props, ...this._children });
    }
}
