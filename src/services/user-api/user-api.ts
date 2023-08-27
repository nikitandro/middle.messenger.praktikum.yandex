import api from '../api';
import {
    SearchUsersByLoginRequestModel,
    SearchUsersByLoginResponseModel,
    UserChangePasswordRequestModel,
    UserProfileModel,
    UserResponseModel,
} from './types';

export default class UserAPI {
    public static changeUserProfile(profile: UserProfileModel) {
        return api.put<UserResponseModel>('/user/profile', {
            data: JSON.stringify(profile),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static changeUserAvatar(formData: FormData) {
        return api.put<UserResponseModel>('/user/profile/avatar', {
            data: formData,
        });
    }

    public static changeUserPassword(requestModel: UserChangePasswordRequestModel) {
        return api.put('/user/password', {
            data: JSON.stringify(requestModel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static searchUsersByLogin(requestModel: SearchUsersByLoginRequestModel) {
        return api.post<SearchUsersByLoginResponseModel>('/user/search', {
            data: JSON.stringify(requestModel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
