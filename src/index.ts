import './style.scss';
// import Handlebars from 'handlebars';
// import input from './components/input';
import signIn from './pages/sign-in-page';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;
document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector<HTMLDivElement>('#app')!;

    // const template = Handlebars.compile(`Hello, {{username}}!`);

    // window.addEventListener('popstate', () => {
    //     const newURL = window.location.href;
    //     console.log(newURL);
    // });

    let templ: string = '';

    if (window.location.pathname === '/') {
        templ = signIn()
    }

    root.innerHTML = templ;
});
