import Block from '../block';
import { IInputInputParams } from './types.ts';

export default class Input extends Block {
    constructor(inputParams: IInputInputParams) {
        super('input', {
            ...inputParams,
        });
    }

    protected render(): Node {
        return this.compile('', { ...this._props, ...this._children });
    }
}
