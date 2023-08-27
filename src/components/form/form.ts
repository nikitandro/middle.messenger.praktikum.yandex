import AuthFormInput from '../auth-form-input';
import Block from '../block';
import { BlockLifeCycleEvents } from '../block/types';
import Input from '../input';
import ValidatedInput from '../validated-input';
import { IFormInputParams } from './types';

export default class Form<T> extends Block {
    private _template: string;

    constructor(template: string, inputParams: IFormInputParams<T>) {
        super('form', inputParams);
        this._template = template;
        this.eventBus().emit(BlockLifeCycleEvents.INIT);
        this.addValidationOnSubmit();
    }

    public addValidationOnSubmit() {
        const self = this;
        const submitEvent = this._events.submit;
        const getFormValue = this._props.getFormValue;
        this.setProps({
            events: {
                submit: (event) => {
                    event.preventDefault();
                    const formValue = self.validateAllInputs(self._children);

                    getFormValue && getFormValue(formValue);
                    submitEvent && submitEvent(event);
                },
            },
        });
    }

    public validateAllInputs(children: Record<string, any>) {
        let obj: Record<string, any> = {};
        for (const child of Object.values(children)) {
            if (Array.isArray(child)) {
                obj = {
                    ...obj,
                    ...this.validateAllInputs(child),
                };
            }
            if (child instanceof AuthFormInput) {
                // @ts-ignore
                const input = child._children.input._children.input.element;
                const name = input.name;
                const value = input.value;
                input.dispatchEvent(new Event('focusout'));
                obj[name] = value;
            } else if (child instanceof ValidatedInput) {
                // @ts-ignore
                const input = child._children.input.element;
                const name = input.name;
                const value = input.value;
                input.dispatchEvent(new Event('focusout'));
                obj[name] = value;
            } else if (child instanceof Input) {
                const input = child.element;
                // @ts-ignore
                const name = input.name;
                // @ts-ignore
                const value = input.value;
                obj[name] = value;
            }
        }
        return obj;
    }

    protected render(): Node {
        if (!this.hasOwnProperty('_template')) return document.createElement('template');

        return this.compile(this._template, { ...this._props, ...this._children });
    }
}
