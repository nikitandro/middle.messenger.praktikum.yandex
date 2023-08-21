import Block from '../block';
import menuButtonTmpl from './chat-menu-button.tmpl';
import { MenuButtonInputParams } from './types';
import './chat-menu-button.scss';

export default class MenuButton extends Block {
    constructor(inputParams: MenuButtonInputParams) {
        super('button', {
            ...inputParams,
            attrs: {
                class: 'chat-menu-button',
                ...inputParams.attrs,
            },
        });
    }

    protected render(): Node {
        return this.compile(menuButtonTmpl, { ...this._props, ...this._children });
    }
}
