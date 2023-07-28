import Block from '../block';
import { IBlockAttributes, IBlockInputParams } from '../block/types';
import Input from '../input';
import authFormInputTmpl from './auth-form-input.tmpl';
import './auth-form-input.scss';

export default class AuthFormInput extends Block {
    constructor(inputParams: IBlockInputParams) {
        const { attrs } = inputParams;
        super('div', {
            props: {
                input: new Input({
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
        // @ts-ignore
        return this._children.input.element;
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
