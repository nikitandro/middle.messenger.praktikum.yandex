import AuthController from '../controllers/auth-controller/auth-controller';
import createAuthRouter from './createAuthRouter';
import createRouter from './createRouter';
import Store from './store';

export default function authGuard() {
    const user = AuthController.getUserInfo();
    user.then((response) => {
        console.log(response);
        if (response.status === 200) {
            createRouter();
            const store = new Store();
            store.set('user', response.response);
        } else {
            createAuthRouter();
        }
    });
}
