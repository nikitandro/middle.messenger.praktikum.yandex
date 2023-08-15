import ServerErrorPage from '../pages/server-error-page';
import NotFoundPage from '../pages/not-found-page';
import Router from './router';
import ProfilePage from '../pages/profile-page';
import ProfileEditDataPage from '../pages/profile-edit-data-page';
import ProfileEditPasswordPage from '../pages/profile-edit-password-page';
import ChatsPage from '../pages/chats-page';

export default function createRouter() {
    if (Router.instance) {
        const router = new Router('#app');
        router.clearRoutes();
    }
    const router = new Router('#app');

    router
        .use('/settings', ProfilePage)
        .use('/settings/edit-password', ProfileEditPasswordPage)
        .use('/settings/edit-data', ProfileEditDataPage)
        .use('/', ChatsPage)
        .use('/server-error', ServerErrorPage)
        .default(NotFoundPage)
        .start();
}
