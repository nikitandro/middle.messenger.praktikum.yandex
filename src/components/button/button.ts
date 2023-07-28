import buttonTmpl from './button.tmpl.ts';
import Block from '../block';
import './button.scss';
import { IButtonProps } from './types.ts';
import { IBlockInputParams } from '../block/types.ts';

export default class Button extends Block {
    constructor(inputParams: IBlockInputParams<IButtonProps>) {
        super('button', {
            ...inputParams,
        });
    }

    public render() {
        return this.compile(buttonTmpl, { ...this._props, ...this._children });
    }
}
