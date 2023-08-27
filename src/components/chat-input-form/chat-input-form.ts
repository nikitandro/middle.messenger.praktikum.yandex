import Form from '../form';
import Input from '../input';
import chatInputFormTmpl from './chat-input-form.tmpl';
import './chat-input-form.scss';
import Button from '../button';
import ChatController from '../../controllers/chat-controller';

export default class ChatInputForm extends Form<{ message: string }> {
    constructor() {
        const input = new Input({
            attrs: {
                class: 'chat-input-form__input',
                placeholder: 'Сообщение',
                name: 'message',
            },
        });
        super(chatInputFormTmpl, {
            props: {
                getFormValue: (formValue: { message: string }) => {
                    if (!formValue.message) {
                        return;
                    }
                    ChatController.sendChatMessage(formValue.message);
                    (input.getContent() as HTMLInputElement).value = '';
                },
                input: input,
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
