import api from '../api';
import { UserProfileModel, UserResponseModel } from './types';

export default class UserAPI {
    public static changeUserProfile(profile: UserProfileModel) {
        return api.put<UserResponseModel>('/user/profile', { data: JSON.stringify(profile) });
    }

    public static changeUserAvatar(avatar: FormData) {}
}
