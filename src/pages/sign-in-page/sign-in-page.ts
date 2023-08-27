import './sign-in-page.scss';
import signInTmpl from './sing-in-page.tmpl.ts';
import Block from '../../components/block';
import Button from '../../components/button';
import Link from '../../components/link';
import AuthForm from '../../components/auth-form/auth-form.ts';
import AuthFormInput from '../../components/auth-form-input/auth-form-input.ts';
import { SignInRequestModel } from '../../services/auth-api/types.ts';
import AuthController from '../../controllers/auth-controller/auth-controller.ts';

export default class SignInPage extends Block {
    constructor() {
        const getFormValue = (formValue: SignInRequestModel) => {
            AuthController.signIn(formValue);
        };
        const form = new AuthForm({
            props: {
                getFormValue: getFormValue,
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
