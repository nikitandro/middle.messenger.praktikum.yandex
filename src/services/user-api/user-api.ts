import api from '../api';
import { UserChangePasswordRequestModel, UserProfileModel, UserResponseModel } from './types';

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
            headers: {
                'Content-Type': 'multipart/form-data',
            },
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
}
