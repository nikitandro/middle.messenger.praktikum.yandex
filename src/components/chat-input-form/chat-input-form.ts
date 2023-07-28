import Form from '../form';
import Input from '../input';
import chatInputFormTmpl from './chat-input-form.tmpl';
import './chat-input-form.scss';

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
            },
            attrs: {
                class: 'chat-input-form',
            },
        });
    }
}
