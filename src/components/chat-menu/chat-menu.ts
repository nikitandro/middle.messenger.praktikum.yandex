import Block from '../block';
import MenuButton from '../chat-menu-button';
import plusIcon from '../../assets/icons/plus-icon.svg';
import CustomImage from '../custom-image';
import chatMenuTmpl from './chat-menu.tmpl';
import './chat-menu.scss';
import { ChatMenuInputParams } from './types';

export default class ChatMenu extends Block {
    constructor(inputParams: ChatMenuInputParams) {
        const addUserButton = new MenuButton({
            props: {
                icon: new CustomImage({
                    attrs: {
                        src: plusIcon,
                    },
                }),
                text: 'Добавить пользователя',
            },
            events: {
                click: inputParams.props?.onAddUserButtonClick,
            },
        });
        const deleteUserButton = new MenuButton({
            props: {
                icon: new CustomImage({
                    attrs: {
                        src: plusIcon,
                        style: 'transform: rotate(45deg)',
                    },
                }),
                text: 'Удалить пользователя',
            },
            events: {
                click: inputParams.props?.onDeleteUserButtonClick,
            },
        });

        super('div', {
            ...inputParams,
            props: {
                ...inputParams.props,
                addUserButton,
                deleteUserButton,
            },
            attrs: {
                ...inputParams.attrs,
                class: ['chat-menu', inputParams.attrs?.class ?? ''].join(' '),
            },
        });
    }

    protected render(): Node {
        return this.compile(chatMenuTmpl, { ...this._props, ...this._children });
    }
}
