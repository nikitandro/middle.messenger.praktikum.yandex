import Block from '../block';
import { IBlockInputParams } from '../block/types.ts';

export default class Input extends Block {
    constructor(inputParams: IBlockInputParams) {
        super('input', {
            ...inputParams,
        });
    }

    protected render(): Node {
        return this.compile('', { ...this._props, ...this._children });
    }
}
