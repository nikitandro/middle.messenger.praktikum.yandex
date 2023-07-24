import './sign-in-page.scss';
import signInTmpl from './sing-in-page.tmpl.ts';
import Handlebars from 'handlebars';
import Block from '../../components/block';

export default function() {
    const template = Handlebars.compile(signInTmpl);

    return template({});
}

export class SignInPage extends Block {
    constructor() {
        super();
    }
}
