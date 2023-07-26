import signUpPageTmpl from './sign-up-page.tmpl.ts';
import Block from '../../components/block';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';
import AuthForm from '../../components/auth-form';

export default class SignUpPage extends Block {
    constructor() {
        const form = new AuthForm({
            props: {
                inputs: [
                    new Input({
                        props: {
                            type: 'email',
                            name: 'email',
                            placeholder: 'Почта',
                        },
                    }),
                    new Input({
                        props: {
                            type: 'text',
                            name: 'login',
                            placeholder: 'Логин',
                        },
                    }),
                    new Input({
                        props: {
                            type: 'text',
                            name: 'first_name',
                            placeholder: 'Имя',
                        },
                    }),
                    new Input({
                        props: {
                            type: 'text',
                            name: 'second_name',
                            placeholder: 'Фамилия',
                        },
                    }),
                    new Input({
                        props: {
                            type: 'text',
                            name: 'phone',
                            placeholder: 'Телефон',
                        },
                    }),
                    new Input({
                        props: {
                            type: 'text',
                            name: 'password',
                            placeholder: 'Пароль',
                        },
                    }),
                    new Input({
                        props: {
                            type: 'text',
                            name: 'password',
                            placeholder: 'Пароль (ещё раз)',
                        },
                    }),
                ],
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
