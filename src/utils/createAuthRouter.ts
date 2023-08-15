import SignInPage from '../pages/sign-in-page';
import SignUpPage from '../pages/sign-up-page';
import Router from './router';
import useNavigate from './useNavigate';

export default function createAuthRouter() {
    if (Router.instance) {
        const router = new Router('#app');
        router.clearRoutes();
    }

    const router = new Router('#app');

    router.use('/', SignInPage).use('/sign-up', SignUpPage).defaultRedirect('/').start();
    const navigate = useNavigate();
    navigate.go('/');
}
