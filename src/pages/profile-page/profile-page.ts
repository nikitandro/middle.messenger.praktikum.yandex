import './profile-page.scss';
import profilePageTmpl from './profile-page.tmpl.ts';
import Handlebars from 'handlebars';

export default function () {
    const template = Handlebars.compile(profilePageTmpl);

    const profile: {
        first_name: string,
        second_name: string,
        email: string,
        phone: string,
        login: string
    } = {
        first_name: 'Никита',
        email: 'nik.vish.93@mail.ru',
        login: 'nikitandro',
        phone: '+79193813732',
        second_name: 'Вишняков',
    };

    return template({profile});
}