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
        const value = await UserAPI.changeUserProfile(requestModel);
        this._store.set('user', value.response);
        return value;
    }

    public static changeUserPassword(requestModel: UserChangePasswordRequestModel) {
        return UserAPI.changeUserPassword(requestModel);
    }

    public static async changeUserAvatar(formData: FormData) {
        const value = await UserAPI.changeUserAvatar(formData);
        this._store.set('user', value.response);
        return value;
    }

    public static async searchUsersByLogin(requestModel: SearchUsersByLoginRequestModel) {
        const searchedUsers = await UserAPI.searchUsersByLogin(requestModel);
        this._store.set('searchedUsers', searchedUsers.response);
        return searchedUsers;
    }
}
