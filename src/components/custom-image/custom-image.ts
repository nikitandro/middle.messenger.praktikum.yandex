import Block from '../block';
import { IBlockInputParams } from '../block/types';

export default class CustomImage extends Block {
    constructor(inputParams: IBlockInputParams) {
        super('img', { ...inputParams });
    }

    protected render(): Node {
        return this.compile('', { ...this._props, ...this._children });
    }
}
