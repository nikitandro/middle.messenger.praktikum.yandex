import Block from '../block';
import { AvatarInputParams } from './types';
import './avatar.scss';
import avatarPlaveholderIcon from '/src/assets/icons/image-paceholder.svg';

export default class Avatar extends Block {
    constructor(inputParams: AvatarInputParams) {
        super('img', {
            ...inputParams,
            attrs: {
                src: inputParams.props?.src ?? avatarPlaveholderIcon,
                class: ['avatar', inputParams?.attrs?.class ?? ''].join(' '),
            },
        });
    }

    protected render(): Node {
        return this.compile('', { ...this._props, ...this._children });
    }
}
