import './sign-in-page.scss';
import signInTmpl from './sing-in-page.tmpl.ts';
import Block from '../../components/block';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';

export default class SignInPage extends Block {
    constructor() {
        super('div', {
            props: {
                loginInput: new Input({
                    props: {
                        type: 'text',
                        name: 'login',
                        placeholder: 'Логин',
                    },
                }),
                passwordInput: new Input({
                    props: {
                        type: 'password',
                        name: 'password',
                        placeholder: 'Пароль',
                    },
                }),
                authButton: new Button({
                    props: {
                        text: 'Авторизоваться',
                    },
                    attrs: {
                        type: 'submit',
                    },
                    events: {
                        submit: (event) => {
                            event.preventDefault();
                            console.log(event.submitter);
                        },
                    },
                }),
                linkToSignUp: new Link({
                    props: {
                        text: 'Нет аккаунта?',
                    },
                    attrs: {
                        href: '/sign-up',
                    },
                }),
            },
            attrs: {
                class: 'sign-in',
            },
        });
    }

    protected render(): Node {
        return this.compile(signInTmpl, { ...this._props, ...this._children });
    }
}
