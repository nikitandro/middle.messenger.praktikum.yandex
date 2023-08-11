import api from '../api';
import {
    GetUserInfoResponseModel,
    SignInRequestModel,
    SignInResponseModel,
    SignUpRequestModel,
    SignUpResponseModel,
} from './types';

export default class AuthAPI {
    private static _headers = {
        'Content-Type': 'application/json',
    };

    public static signUp(requestModel: SignUpRequestModel) {
        return api.post<SignUpResponseModel>('/auth/signup', {
            data: JSON.stringify(requestModel),
            headers: this._headers,
        });
    }

    public static signIn(requestModel: SignInRequestModel) {
        return api.post<SignInResponseModel>('/auth/signin', {
            data: JSON.stringify(requestModel),
            headers: this._headers,
        });
    }

    public static getUserInfo() {
        return api.get<GetUserInfoResponseModel>('/auth/user');
    }

    public static logout() {
        return api.post('/auth/logout');
    }
}
