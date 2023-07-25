import Block from '../block';
import './avatar-input.scss';

export default class AvatarInput extends Block {
    constructor() {
        super('input', {
            attrs: {
                type: 'file',
                class: 'avatar-input',
            },
        });
    }

    protected render(): Node {
        return this.compile('', { ...this._props, ...this._children });
    }
}
