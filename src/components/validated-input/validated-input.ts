import Block from '../block';
import { IBlockInputParams } from '../block/types';
import Input from '../input';
import { IValidatedInputProps } from './types';
import validatedInputTmpl from './validated-input.tmpl';
import './validated-input.scss';
import simpleValidate from '../../utils/simpleValidate';

export default class ValidatedInput extends Block {
    constructor(inputParams: IBlockInputParams<IValidatedInputProps>) {
        const { props, attrs, events } = inputParams;
        super('div', {
            props: {
                input: new Input({
                    props: {},
                    attrs: attrs,
                    events: events,
                }),
                isValid: props?.isValid === undefined ? true : props.isValid,
            },
            attrs: {
                class: 'validated-input-cont',
            },
        });
        this.addValidation();
    }

    public addValidation() {
        const self = this;

        const input = this._children.input;
        if (input instanceof Input) {
            input.setProps({
                events: {
                    focusout: (event: FocusEvent) => {
                        // @ts-ignore Кривой тип таргета
                        self.validate(event.target?.name, event.target?.value);
                    },
                },
            });
        }
    }

    public validate(name: string, input: string) {
        this.setProps({
            props: {
                isValid: simpleValidate(name, input),
            },
        });
    }

    protected render(): Node {
        return this.compile(validatedInputTmpl, { ...this._props, ...this._children });
    }
}
