import './style.scss';
import Handlebars from 'handlebars';
import Store from './utils/store';
import AuthController from './controllers/auth-controller/auth-controller';
import authGuard from './utils/authGuard';

Handlebars.registerHelper('formatDateToHoursAndMinutes', function (string: string): string {
    const date = new Date(string);
    const locale = navigator.language;
    const formatDate = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' });
    return formatDate.format(date);
});

document.addEventListener('DOMContentLoaded', () => {
    const store = new Store();
    authGuard();
    AuthController.getUserInfo().then(
        () => {
            store.set('isAuth', true);
        },
        (res) => {
            if (res.status === 401) {
                store.set('isAuth', false);
            }
        },
    );
});
