import { UserChangePasswordRequestModel, UserProfileModel } from '../../services/user-api/types';
import UserAPI from '../../services/user-api';
import Store from '../../utils/store';

export default class UserController {
    private static _store = new Store();

    public static changeUserProfile(requestModel: UserProfileModel) {
        return UserAPI.changeUserProfile(requestModel).then((value) => {
            this._store.set('user', value.response);
            return value;
        });
    }

    public static changeUserPassword(requestModel: UserChangePasswordRequestModel) {
        return UserAPI.changeUserPassword(requestModel);
    }
}
