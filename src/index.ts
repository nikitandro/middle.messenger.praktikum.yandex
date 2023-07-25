import './style.scss';
import render from './utils/render';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';
import NoAsideLayout from './layouts/no-aside-layout';
import DebugPage from './pages/debug-page';
import { ErrorPage } from './pages/error-page/error-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import ProfileEditDataPage from './pages/profile-edit-data-page/profile-edit-data-page';
import ProfileEditPasswordPage from './pages/profile-edit-password-page/profile-edit-password-page';
import { ChatsPage } from './pages/chats-page/chats-page';

document.addEventListener('DOMContentLoaded', () => {
    // const root = document.querySelector<HTMLDivElement>('#app')!;
    // let template: string;
    let page;

    switch (window.location.pathname) {
    case '/':
        break;
    case '/sign-in':
        page = new NoAsideLayout({ props: { page: new SignInPage() } });
        break;
    case '/sign-up':
        page = new NoAsideLayout({ props: { page: new SignUpPage() } });
        break;
    case '/debug':
        page = new DebugPage();
        break;
    case '/profile':
        page = new NoAsideLayout({ props: { page: new ProfilePage() } });
        break;
    case '/profile-edit-data':
        page = new NoAsideLayout({ props: { page: new ProfileEditDataPage() } });
        break;
    case '/profile-edit-password':
        page = new NoAsideLayout({ props: { page: new ProfileEditPasswordPage() } });
        break;
    case '/500':
        page = new NoAsideLayout({
            props: {
                page: new ErrorPage({
                    props: {
                        statusCode: 500,
                        comment: 'Мы уже фиксим',
                        linkHref: '/chats',
                        linkText: 'Назад к чатам',
                    },
                }),
            },
        });
        break;
    case '/chats':
        page = new ChatsPage();
        break;
    default:
        page = new NoAsideLayout({
            props: {
                page: new ErrorPage({
                    props: {
                        statusCode: 404,
                        comment: 'Не туда попали',
                        linkHref: '/chats',
                        linkText: 'Назад к чатам',
                    },
                }),
            },
        });
        break;
    }

    page && render('#app', page);
    // root.appendChild(template);
});
