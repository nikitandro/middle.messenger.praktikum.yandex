import NotFoundPage from '../pages/not-found-page';
import SignInPage from '../pages/sign-in-page';
import SignUpPage from '../pages/sign-up-page';
import Router from './router';

export default function createAuthRouter() {
    const router = new Router('#app');

    router.use('/', SignInPage).use('/sign-up', SignUpPage).defaultRedirect('/').start();
}
