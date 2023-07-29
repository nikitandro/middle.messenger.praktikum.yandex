import Form from '../form';
import Input from '../input';
import chatSearchFormTmpl from './chat-search-form.tmpl';
import './chat-search-form.scss';

export default class ChatSearchForm extends Form {
    constructor() {
        super(chatSearchFormTmpl, {
            props: {
                input: new Input({
                    attrs: {
                        class: 'chat-search-form__input',
                        placeholder: 'Поиск',
                        name: 'search',
                    },
                }),
            },
            attrs: {
                class: 'chat-search-form',
            },
        });
    }
}
