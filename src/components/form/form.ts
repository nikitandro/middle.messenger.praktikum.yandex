import AuthFormInput from '../auth-form-input';
import Block from '../block';
import { BlockLifeCycleEvents, IBlockInputParams } from '../block/types';
import Input from '../input';
import ValidatedInput from '../validated-input/validated-input';

export default class Form extends Block {
    private _template: string;

    constructor(template: string, inputParams: IBlockInputParams) {
        super('form', inputParams);
        this._template = template;
        this.eventBus().emit(BlockLifeCycleEvents.INIT);
        this.addValidationEvents(this._children);
        this.addValidationOnSubmit();
    }

    public addValidationOnSubmit() {
        const self = this;
        this.setProps({
            events: {
                submit: (event) => {
                    event.preventDefault();
                    console.log(this.validateAllInputs(self._children));
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

    public addValidationEvents(children: Record<string, any>) {
        for (const child of Object.values(children)) {
            if (Array.isArray(child)) {
                this.addValidationEvents(child);
            }
            if (child instanceof Input || child instanceof AuthFormInput) {
                child.setProps({
                    events: {
                        focusout: (event) => {
                            // @ts-ignore
                            const name: string = event.target.name;
                            // @ts-ignore
                            const value: string = event.target.value;
                        },
                    },
                });
            }
        }
    }

    protected render(): Node {
        if (!this.hasOwnProperty('_template')) return document.createElement('template');

        return this.compile(this._template, { ...this._props, ...this._children });
    }
}
