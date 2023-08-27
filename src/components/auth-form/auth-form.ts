import Form from '../form';
import authFormTmpl from './auth-form.tmpl';
import { IAuthFormInputParams } from './types';
import './auth-form.scss';

export default class AuthForm<T> extends Form<T> {
    constructor(inputParams: IAuthFormInputParams<T>) {
        const { props, attrs, events } = inputParams;
        super(authFormTmpl, {
            props: props,
            attrs: {
                ...attrs,
                class: ['sign-in-form', attrs?.class ? attrs.class : ''].join(' '),
            },
            events: events,
        });
    }
}
