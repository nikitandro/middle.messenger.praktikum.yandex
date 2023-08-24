import Block from '../block';
import Button from '../button';
import Input from '../input';
import createChatFormTmpl from './create-chat-form.tmpl';
import './create-chat-form.scss';
import { IBlockInputParams } from '../block/types';

export default class CreateChatForm extends Block {
    constructor(inputParams: IBlockInputParams) {
        const input = new Input({
            attrs: {
                class: 'auth-form-input create-chat-form__input',
                placeholder: 'Название',
                name: 'title',
                type: 'text',
            },
        });
        super('form', {
            ...inputParams,
            props: {
                ...inputParams.props,
                input,
                button: new Button({
                    props: { content: 'Создать' },
                    attrs: {
                        class: 'button create-chat-form__button',
                        type: 'submit',
                    },
                }),
            },
            attrs: {
                ...inputParams.attrs,
                class: 'modal-form create-chat-form',
            },
            events: {
                ...inputParams.events,
                submit: (event) => {
                    event.preventDefault();
                    inputParams.events?.submit && inputParams.events?.submit(event);
                },
            },
        });
    }

    protected render(): Node {
        return this.compile(createChatFormTmpl, { ...this._props, ...this._children });
    }
}
