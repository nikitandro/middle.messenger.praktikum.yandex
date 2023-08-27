import AuthAPI from '../../services/auth-api';
import { SignInRequestModel, SignUpRequestModel } from '../../services/auth-api/types';
import Store from '../../utils/store';

export default class AuthController {
    private static _store = new Store();

    private static _setIsAuth(value: boolean) {
        this._store.set('isAuth', value);
    }

    public static signIn(requestModel: SignInRequestModel) {
        return AuthAPI.signIn(requestModel)
            .then((res) => {
                if (res.status === 200) {
                    this._setIsAuth(true);
                }
                return res;
            })
            .catch(() => {
                throw new Error('Failed to sign in.');
            });
    }

    public static signUp(requestModel: SignUpRequestModel) {
        return AuthAPI.signUp(requestModel)
            .then((res) => {
                if (res.status === 200) {
                    this._setIsAuth(true);
                }
                return res;
            })
            .catch(() => {
                throw new Error('Failed to sign up.');
            });
    }

    public static getUserInfo() {
        return AuthAPI.getUserInfo()
            .then((value) => {
                this._store.set('user', value.response);
                return value;
            })
            .catch(() => {
                throw new Error('Failed to get user info.');
            });
    }

    public static async logout() {
        try {
            const response = await AuthAPI.logout();
            localStorage.setItem('lastPath', window.location.pathname);
            this._setIsAuth(false);
            return response;
        } catch (e) {
            throw new Error('Failed to logout.');
        }
    }
}
