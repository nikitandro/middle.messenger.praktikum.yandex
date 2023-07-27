import AuthFormInput from '../auth-form-input';
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
        this.addValidationEvents(this._children);
    }

    public addValidationEvents(children: Record<string, any>) {
        for (const child of Object.values(children)) {
            if (Array.isArray(child)) {
                this.addValidationEvents(child);
            }
            if (child instanceof AuthFormInput) {
                child.setProps({
                    events: {
                        focusout: (event) => {
                            // @ts-ignore
                            const name: string = event.target.name;
                            // @ts-ignore
                            const value: string = event.target.value;
                            console.log(`is '${name}' valid: ${this.validateInput(name, value)}`);
                        },
                    },
                });
            }
        }
    }

    public validateInput(name: string, value: string): boolean {
        switch (name) {
            case 'login':
                return value.length >= 3 && value.length <= 20;
            case 'email':
                return !!value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)?.length;
            case 'first_name' || 'second_name':
                return !!value.match(/^[\p{Lu}\p{Ll}А-ЯЁ][\p{L}]*(-[\p{L}]+)*$/)?.length;
            case 'password':
                return (
                    !!value.match(/^(?=.*[A-Z])(?=.*\d).+$/)?.length &&
                    value.length >= 8 &&
                    value.length <= 40
                );
            case 'message':
                return value.length > 0;
            case 'phone':
                return (
                    !!value.match(/^\+?\d+$/)?.length && value.length >= 10 && value.length <= 15
                );
            default:
                return true;
        }
    }
}
