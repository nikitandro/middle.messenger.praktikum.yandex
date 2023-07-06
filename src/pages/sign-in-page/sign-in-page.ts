import './sign-in-page.scss';
import signInTmpl from './sing-in-page.tmpl.ts'
import Handlebars from 'handlebars';

export default function () {
    const template = Handlebars.compile(signInTmpl);

    return template({});
}
