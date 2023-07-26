import Block from '../../components/block';
import asideLayoutTmpl from './aside-layout.tmpl';
import { IAsideLayoutInputParams } from './types';

export default class AsideLayout extends Block {
    constructor(inputParams: IAsideLayoutInputParams) {
        super('template', {
            ...inputParams,
        });
    }

    protected render(): Node {
        return this.compile(asideLayoutTmpl, { ...this._props, ...this._children });
    }
}
