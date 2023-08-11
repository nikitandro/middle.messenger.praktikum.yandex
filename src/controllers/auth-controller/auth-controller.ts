import AuthAPI from '../../services/auth-api';
import { SignInRequestModel, SignUpRequestModel } from '../../services/auth-api/types';

export default class AuthController {
    public static signIn(requestModel: SignInRequestModel) {
        return AuthAPI.signIn(requestModel);
    }

    public static signUp(requestModel: SignUpRequestModel) {
        return AuthAPI.signUp(requestModel);
    }

    public static getUserInfo() {
        return AuthAPI.getUserInfo();
    }

    public static logout() {
        return AuthAPI.logout();
    }
}
