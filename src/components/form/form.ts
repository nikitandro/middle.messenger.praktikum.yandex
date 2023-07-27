import simpleValidate from '../../utils/simpleValidate';
import Block from '../block';
import { BlockLifeCycleEvents, IBlockInputParams } from '../block/types';
import Input from '../input';

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
                    this.validateAllInputs(self._children);
                },
            },
        });
    }

    public validateAllInputs(children: Record<string, any>) {
        for (const child of Object.values(children)) {
            if (Array.isArray(child)) {
                this.validateAllInputs(child);
            }
            if (child instanceof Input) {
                // @ts-ignore
                const name = child.element.name;
                // @ts-ignore
                const value = child.element.value;
                console.log(`is '${name}' valid: ${simpleValidate(name, value)}`);
            }
        }
    }

    public addValidationEvents(children: Record<string, any>) {
        for (const child of Object.values(children)) {
            if (Array.isArray(child)) {
                this.addValidationEvents(child);
            }
            if (child instanceof Input) {
                child.setProps({
                    events: {
                        focusout: (event) => {
                            // @ts-ignore
                            const name: string = event.target.name;
                            // @ts-ignore
                            const value: string = event.target.value;
                            console.log(`is '${name}' valid: ${simpleValidate(name, value)}`);
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
