import createRouter from './utils/createRouter';
import './style.scss';

import Handlebars from 'handlebars';
import AuthAPI from './services/auth-api/auth';

Handlebars.registerHelper('formatDateToHoursAndMinutes', function (string: string): string {
    const date = new Date(string);
    const locale = navigator.language;
    const formatDate = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' });
    return formatDate.format(date);
});

document.addEventListener('DOMContentLoaded', () => {
    createRouter();
    AuthAPI.signIn({
        login: 'Bobby',
        password: '123',
    }).then((value) => {
        console.log(value.response);
    });
});
