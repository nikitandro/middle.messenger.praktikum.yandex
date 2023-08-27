import Block from '../block';
import { IBlockAttributes, IBlockInputParams } from '../block/types';
import authFormInputTmpl from './auth-form-input.tmpl';
import './auth-form-input.scss';
import ValidatedInput from '../validated-input/validated-input';
import { IValidatedInputProps } from '../validated-input/types';

export default class AuthFormInput extends Block {
    constructor(inputParams: IBlockInputParams<IValidatedInputProps>) {
        const { attrs } = inputParams;
        super('div', {
            props: {
                input: new ValidatedInput({
                    ...inputParams,
                    attrs: {
                        ...attrs,
                        class: ['auth-form-input', attrs?.class ? attrs.class : ''].join(' '),
                    },
                }),
            },
        });
    }

    public get element(): HTMLElement {
        return (this._children.input as Block).element;
    }

    public setProps = (
        newProps: Partial<IBlockInputParams<Record<string, unknown>, IBlockAttributes>>,
    ) => {
        if (this._children.input instanceof Block) {
            this._children.input.setProps(newProps);
        }
    };

    protected render(): Node {
        return this.compile(authFormInputTmpl, { ...this._props, ...this._children });
    }
}
