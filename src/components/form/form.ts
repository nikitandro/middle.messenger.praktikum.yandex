import Block from '../block';
import formTmpl from './form.tmpl';
import { IFormInputParams } from './types';

export default class Form extends Block {
    constructor(inputParams: IFormInputParams) {
        super('form', inputParams);
    }

    protected render(): Node {
        return this.compile(formTmpl, { ...this._props, ...this._children });
    }
}
