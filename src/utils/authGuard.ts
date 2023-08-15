import createAuthRouter from './createAuthRouter';
import createRouter from './createRouter';
import Store from './store';
import { StoreEvents } from './store/events';

export default function authGuard() {
    const store = new Store();
    let isAuth = store.getState().isAuth;
    console.log('authGuard');

    store.on(StoreEvents.Updated, () => {
        console.log(store.getState());
        const state = store.getState();
        if (isAuth === state.isAuth) {
            return;
        } else if (state.isAuth) {
            createRouter();
            isAuth = true;
        } else {
            console.log('auth router');
            createAuthRouter();
            isAuth = false;
        }
    });
}
