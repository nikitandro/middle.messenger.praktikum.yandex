import api from '../api';
import {
    GetUserInfoResponseModel,
    SignInRequestModel,
    SignInResponseModel,
    SignUpRequestModel,
    SignUpResponseModel,
} from './types';

export default class AuthAPI {
    public static signUp(requestModel: SignUpRequestModel) {
        return api.post<SignUpResponseModel>('/auth/signup', { data: requestModel });
    }

    public static signIn(requestModel: SignInRequestModel) {
        return api.post<SignInResponseModel>('/auth/signin', { data: requestModel });
    }

    public static getUserInfo() {
        return api.get<GetUserInfoResponseModel>('/auth/user');
    }

    public static logout() {
        api.post('/auth/logout');
    }
}
