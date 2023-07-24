import Block from '../../components/block';
import noAsideLayoutTmpl from './no-aside-layout.tmpl.ts';

export default class NoAsideLayout extends Block {
    constructor(propsAndAttrs: {props: {page: Block}}) {
        super('main', propsAndAttrs);
    }

    protected render(): Node {
        return this.compile(noAsideLayoutTmpl, { ...this._props, ...this._children });
    }
}
