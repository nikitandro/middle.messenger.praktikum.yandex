import Form from '../form';
import Input from '../input';
import chatInputFormTmpl from './chat-input-form.tmpl';
import './chat-input-form.scss';
import Button from '../button';

export default class ChatInputForm extends Form {
    constructor() {
        super(chatInputFormTmpl, {
            props: {
                input: new Input({
                    attrs: {
                        class: 'chat-input-form__input',
                        placeholder: 'Сообщение',
                        name: 'message',
                    },
                }),
                clipButton: new Button({
                    attrs: { class: 'chat-input-form__clip-button', type: 'button' },
                }),
                sendButton: new Button({
                    attrs: {
                        type: 'submit',
                        class: 'chat-input-form__send-button',
                    },
                }),
            },
            attrs: {
                class: 'chat-input-form',
            },
        });
    }
}
