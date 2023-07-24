import signUpPageTmpl from './sign-up-page.tmpl.ts';
import Block from '../../components/block';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';

export default class SignUpPage extends Block {
    constructor() {
        super('div', {
            props: {
                emailInput: new Input({
                    props: {
                        type: 'email',
                        name: 'email',
                        placeholder: 'Почта',
                    },
                }),
                loginInput: new Input({
                    props: {
                        type: 'text',
                        name: 'login',
                        placeholder: 'Логин',
                    },
                }),
                firstNameInput: new Input({
                    props: {
                        type: 'text',
                        name: 'first_name',
                        placeholder: 'Имя',
                    },
                }),
                secondNameInput: new Input({
                    props: {
                        type: 'text',
                        name: 'second_name',
                        placeholder: 'Фамилия',
                    },
                }),
                phoneInput: new Input({
                    props: {
                        type: 'text',
                        name: 'phone',
                        placeholder: 'Телефон',
                    },
                }),
                passwordInput: new Input({
                    props: {
                        type: 'text',
                        name: 'password',
                        placeholder: 'Пароль',
                    },
                }),
                passwordAgainInput: new Input({
                    props: {
                        type: 'text',
                        name: 'password',
                        placeholder: 'Пароль (ещё раз)',
                    },
                }),
                authButton: new Button({
                    props: {
                        text: 'Зарегистрироваться',
                    },
                }),
                linkToSignIn: new Link({
                    props: {
                        text: 'Войти',
                    },
                    attrs: {
                        href: '/sign-in',
                    },
                }),
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
