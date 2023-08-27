import Block from '../../components/block';
import render from '../render';
import { IRouteProps } from './types';

export default class Route<
    T extends new (...args: any[]) => Block = new (...args: any[]) => Block,
> {
    private _pathname: string;
    private _blockClass: T;
    private _block: Block | null;
    private _props: IRouteProps;
    constructor(pathname: string, view: T, props: IRouteProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    public navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    public leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    public match(pathname: string) {
        return pathname === this._pathname;
    }

    public render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
