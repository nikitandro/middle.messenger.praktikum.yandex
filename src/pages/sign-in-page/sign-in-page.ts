import './sign-in-page.scss';
import signInTmpl from './sing-in-page.tmpl.ts';
import Block from '../../components/block';
import Button from '../../components/button';
import Link from '../../components/link';
import AuthForm from '../../components/auth-form/auth-form.ts';
import AuthFormInput from '../../components/auth-form-input/auth-form-input.ts';

export default class SignInPage extends Block {
    constructor() {
        const form = new AuthForm({
            props: {
                inputs: [
                    new AuthFormInput({
                        attrs: {
                            type: 'text',
                            name: 'login',
                            placeholder: 'Логин',
                        },
                    }),
                    new AuthFormInput({
                        attrs: {
                            type: 'password',
                            name: 'password',
                            placeholder: 'Пароль',
                        },
                    }),
                ],
                actions: [
                    new Button({
                        props: {
                            content: 'Авторизоваться',
                        },
                        attrs: {
                            type: 'submit',
                            class: 'button',
                        },
                        events: {
                            submit: (event) => {
                                event.preventDefault();
                                console.log(event.submitter);
                            },
                        },
                    }),
                    new Link({
                        props: {
                            text: 'Нет аккаунта?',
                            to: '/sign-up',
                        },
                    }),
                ],
            },
        });
        super('div', {
            props: {
                form: form,
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
