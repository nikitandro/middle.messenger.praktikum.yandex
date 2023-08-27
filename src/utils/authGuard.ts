import createAuthRouter from './createAuthRouter';
import createRouter from './createRouter';
import Store from './store';
import { StoreEvents } from './store/events';

export default function authGuard() {
    const store = new Store();
    let isAuth = store.getState().isAuth;

    store.on(StoreEvents.Updated, () => {
        const state = store.getState();
        if (isAuth === state.isAuth) {
            return;
        } else if (state.isAuth) {
            createRouter();
            isAuth = true;
        } else {
            createAuthRouter();
            isAuth = false;
        }
    });
}
