import signUpPageTmpl from './sign-up-page.tmpl.ts';
import Block from '../../components/block';
import AuthFormInput from '../../components/auth-form-input';
import Button from '../../components/button';
import Link from '../../components/link';
import AuthForm from '../../components/auth-form';

export default class SignUpPage extends Block {
    constructor() {
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
                inputs: inputs,
                actions: [
                    new Button({
                        props: {
                            text: 'Зарегистрироваться',
                        },
                    }),
                    new Link({
                        props: {
                            text: 'Войти',
                        },
                        attrs: {
                            href: '/sign-in',
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
