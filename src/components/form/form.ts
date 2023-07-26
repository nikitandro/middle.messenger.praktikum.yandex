import Block from '../block';
import { BlockLifeCycleEvents, IBlockInputParams } from '../block/types';

export default class Form extends Block {
    private _template: string;

    constructor(template: string, inputParams: IBlockInputParams) {
        super('form', inputParams);
        this._template = template;
        this.eventBus().emit(BlockLifeCycleEvents.INIT);
    }

    protected render(): Node {
        if (!this.hasOwnProperty('_template')) return document.createElement('template');

        return this.compile(this._template, { ...this._props, ...this._children });
    }
}
