import './style.scss';
import Handlebars from 'handlebars';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;
document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector<HTMLDivElement>('#app')!;

    const template = Handlebars.compile(`Hello, {{username}}!`);

    const result = template({username: 'nikitandro'});

    root.innerHTML = result;
});