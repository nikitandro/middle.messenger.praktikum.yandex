import signUpPageTmpl from './sign-up-page.tmpl.ts';
import Block from '../../components/block';
import AuthFormInput from '../../components/auth-form-input';
import Button from '../../components/button';
import Link from '../../components/link';
import AuthForm from '../../components/auth-form';
import { SignUpRequestModel } from '../../services/auth-api/types.ts';
import AuthController from '../../controllers/auth-controller/auth-controller.ts';

export default class SignUpPage extends Block {
    constructor() {
        const getFormValue = (formValue: SignUpRequestModel) => {
            AuthController.signUp(formValue);
        };
        const inputs = [
            new AuthFormInput({
                attrs: {
                    type: 'email',
                    name: 'email',
                    placeholder: 'Почта',
                },
            }),
            new AuthFormInput({
                attrs: {
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин',
                },
            }),
            new AuthFormInput({
                attrs: {
                    type: 'text',
                    name: 'first_name',
                    placeholder: 'Имя',
                },
            }),
            new AuthFormInput({
                attrs: {
                    type: 'text',
                    name: 'second_name',
                    placeholder: 'Фамилия',
                },
            }),
            new AuthFormInput({
                attrs: {
                    type: 'text',
                    name: 'phone',
                    placeholder: 'Телефон',
                },
            }),
            new AuthFormInput({
                attrs: {
                    type: 'text',
                    name: 'password',
                    placeholder: 'Пароль',
                },
            }),
            new AuthFormInput({
                attrs: {
                    type: 'text',
                    name: 'password',
                    placeholder: 'Пароль (ещё раз)',
                },
            }),
        ];
        const form = new AuthForm({
            props: {
                getFormValue: getFormValue,
                inputs: inputs,
                actions: [
                    new Button({
                        props: {
                            content: 'Зарегистрироваться',
                        },
                        attrs: {
                            type: 'submit',
                            class: 'button',
                        },
                    }),
                    new Link({
                        props: {
                            text: 'Войти',
                            to: '/',
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
        return this.compile(signUpPageTmpl, { ...this._props, ...this._children });
    }
}
