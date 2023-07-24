// import DebugPage from './pages/debug-page/debug-page';
import './style.scss';
import render from './utils/render';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';
import NoAsideLayout from './layouts/no-aside-layout';
// import signInPage from './pages/sign-in-page';
// import signUpPage from './pages/sign-up-page';
// import profilePage from './pages/profile-page';
// import errorPage from './pages/error-page';
// import chatsPage from './pages/chats-page';
// import pagesListPage from './pages/pages-list-page';

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
        // case '/profile':
        //     template = profilePage('profile');
        //     break;
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
        // default:
        //     template = errorPage(404, 'Не туда попали', 'Назад к чатам', '/chats');
        //     break;
        // }
    }
    page && render('#app', page );
    // root.appendChild(template);
});
