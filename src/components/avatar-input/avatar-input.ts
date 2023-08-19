import Block from '../block';
import { IBlockInputParams } from '../block/types';
import './avatar-input.scss';
import avatarPlaveholderIcon from '/src/assets/icons/image-paceholder.svg';
import CustomImage from '../custom-image';
import Store from '../../utils/store';
import { StoreEvents } from '../../utils/store/events';
import cloneDeep from '../../utils/cloneDeep';
import { API_STATIC_URL } from '../../services/api';

export default class AvatarInput extends Block {
    constructor(inputParams: IBlockInputParams) {
        let avatar: string | null = null;
        const store = new Store();
        const image = new CustomImage({
            attrs: {
                src: avatarPlaveholderIcon,
                class: 'avatar-input__image',
            },
        });

        super('button', {
            ...inputParams,
            props: {
                ...inputParams,
                image,
            },
            attrs: {
                ...inputParams?.attrs,
                type: 'button',
                class: ['avatar-input', inputParams?.attrs?.class ?? ''].join(' '),
            },
        });
        store.on(StoreEvents.Updated, () => {
            const state = store.getState();
            const newState = cloneDeep(state?.user?.avatar);

            if (newState !== avatar) {
                image.setProps({
                    attrs: { src: newState ? API_STATIC_URL + newState : avatarPlaveholderIcon },
                });
            }
            avatar = newState;
        });
    }

    protected render(): Node {
        return this.compile('{{{image}}}', { ...this._props, ...this._children });
    }
}
