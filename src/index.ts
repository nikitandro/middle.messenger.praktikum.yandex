import './style.scss';
import render from './utils/render';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';
import NoAsideLayout from './layouts/no-aside-layout';
import DebugPage from './pages/debug-page';
import { ErrorPage } from './pages/error-page/error-page';
import { ProfilePage } from './pages/profile-page/profile-page';

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
        // case '/profile-edit':
        //     template = profilePage('edit-data');
        //     break;
        // case '/profile-edit-password':
        //     template = profilePage('edit-password');
        //     break;
        // case '/500':
        //     template = errorPage(500, 'Мы уже фиксим', 'Назад к чатам', '/chats');
        //     break;
        // case '/chats':
        //     template = chatsPage();
        //     break;
    default:
        page = new NoAsideLayout({
            props: {
                page: new ErrorPage({
                    props: {
                        statusCode: 404,
                        comment: 'Не туда попали',
                        linkHref: '/sign-in',
                        linkText: 'Назад',
                    },
                }),
            },
        });
        break;
    }

    page && render('#app', page );
    // root.appendChild(template);
});
