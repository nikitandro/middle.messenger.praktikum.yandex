import ServerErrorPage from '../pages/server-error-page';
import NotFoundPage from '../pages/not-found-page';
import Router from './router';
import ProfilePage from '../pages/profile-page';
import ProfileEditDataPage from '../pages/profile-edit-data-page';
import ProfileEditPasswordPage from '../pages/profile-edit-password-page';
import ChatsPage from '../pages/chats-page';

export default function createRouter() {
    const router = new Router('#app');
    if (Router.instance) {
        router.clearRedirects();
        router.clearRoutes();
    }
    console.log('regular router created');
    router
        .use('/settings', ProfilePage)
        .use('/settings/edit-password', ProfileEditPasswordPage)
        .use('/settings/edit-data', ProfileEditDataPage)
        .useRedirect('/', '/messenger')
        .use('/messenger', ChatsPage)
        .use('/server-error', ServerErrorPage)
        .default(NotFoundPage)
        .start();

    if (!router.hasRoute(window.location.pathname)) {
        router.go('/');
    }
}
