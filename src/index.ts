import './style.scss';
import signInPage from './pages/sign-in-page';
import signUpPage from './pages/sign-up-page';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector<HTMLDivElement>('#app')!;

    // window.addEventListener('popstate', () => {
    //     const newURL = window.location.href;
    //     console.log(newURL);
    // });

    let template: string = '';

    switch (window.location.pathname) {
        case '/':
            window.location.assign('/sign-in')
            break;
        case '/sign-in':
            template = signInPage();
            break;
        case '/sign-up':
            template = signUpPage();
            break;
        default:
            console.log('404')
    }

    root.innerHTML = template;
});