import {
    SearchUsersByLoginRequestModel,
    UserChangePasswordRequestModel,
    UserProfileModel,
} from '../../services/user-api/types';
import UserAPI from '../../services/user-api';
import Store from '../../utils/store';

export default class UserController {
    private static _store = new Store();

    public static async changeUserProfile(requestModel: UserProfileModel) {
        try {
            const value = await UserAPI.changeUserProfile(requestModel);
            this._store.set('user', value.response);
            return value;
        } catch (e) {
            throw new Error('Failed to change user profile.');
        }
    }

    public static changeUserPassword(requestModel: UserChangePasswordRequestModel) {
        return UserAPI.changeUserPassword(requestModel).catch((reason) => {
            throw new Error('Failed to change user password.');
        });
    }

    public static async changeUserAvatar(formData: FormData) {
        try {
            const value = await UserAPI.changeUserAvatar(formData);
            this._store.set('user', value.response);
            return value;
        } catch (e) {
            throw new Error('Failed to change user avatar.');
        }
    }

    public static async searchUsersByLogin(requestModel: SearchUsersByLoginRequestModel) {
        try {
            const searchedUsers = await UserAPI.searchUsersByLogin(requestModel);
            this._store.set('searchedUsers', searchedUsers.response);
            return searchedUsers;
        } catch (e) {
            throw new Error('Failed to search users.');
        }
    }
}
