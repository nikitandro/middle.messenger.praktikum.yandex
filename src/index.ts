import './style.scss';
import authGuard from './utils/authGuard';
import Handlebars from 'handlebars';

Handlebars.registerHelper('formatDateToHoursAndMinutes', function (string: string): string {
    const date = new Date(string);
    const locale = navigator.language;
    const formatDate = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' });
    return formatDate.format(date);
});

document.addEventListener('DOMContentLoaded', () => {
    authGuard();
});
