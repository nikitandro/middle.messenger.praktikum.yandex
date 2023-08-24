import SignInPage from '../pages/sign-in-page';
import SignUpPage from '../pages/sign-up-page';
import Router from './router';

export default function createAuthRouter() {
    const router = new Router('#app');
    if (Router.instance) {
        router.clearRedirects();
        router.clearRoutes();
    }
    console.log('auth router created');

    router.use('/', SignInPage).use('/sign-up', SignUpPage).defaultRedirect('/').start();
}
