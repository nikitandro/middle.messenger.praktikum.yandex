import Form from '../form';
import authFormTmpl from './auth-form.tmpl';
import { IAuthFormInputParams } from './types';

export default class AuthForm extends Form {
    constructor(inputParams: IAuthFormInputParams) {
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
