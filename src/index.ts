import './style.scss';
import signInPage from './pages/sign-in-page';
import signUpPage from './pages/sign-up-page';
import profilePage from './pages/profile-page';
import errorPage from './pages/error-page';
import chatsPage from './pages/chats-page';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector<HTMLDivElement>('#app')!;

    // window.addEventListener('popstate', () => {
    //     const newURL = window.location.href;
    //     console.log(newURL);
    // });

    let template: string = '';

    switch (window.location.pathname) {
        case '/':
            window.location.assign('/sign-in');
            break;
        case '/sign-in':
            template = signInPage();
            break;
        case '/sign-up':
            template = signUpPage();
            break;
        case '/profile':
            template = profilePage();
            break;
        case '/500':
            template = errorPage(500, 'Мы уже фиксим', 'Назад к чатам', '/chats');
            break;
        case '/chats':
            template = chatsPage();
            break;
        default:
            template = errorPage(404, 'Не туда попали', 'Назад к чатам', '/chats');
            break;
    }

    root.innerHTML = template;
});