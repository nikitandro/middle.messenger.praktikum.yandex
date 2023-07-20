import signUpPageTmpl from './sign-up-page.tmpl.ts';
import Handlebars from 'handlebars';

export default function() {
    const template = Handlebars.compile(signUpPageTmpl);

    return template({});
}
