import ChatController from '../../controllers/chat-controller';
import Store from '../../utils/store';
import Block from '../block';
import Button from '../button';
import changeAvatarFormTmpl from '../change-avatar-form/change-avatar-form.tmpl';
import ValidatedInput from '../validated-input';

export default class ChangeChatAvatarForm extends Block {
    constructor() {
        const store = new Store();
        const input = new ValidatedInput({
            attrs: {
                type: 'file',
                name: 'avatar',
                class: 'change-avatar-form-input__input',
            },
        });
        super('form', {
            props: {
                input,
                button: new Button({
                    props: { content: 'Поменять' },
                    attrs: { class: 'button change-avatar-form__button', type: 'submit' },
                }),
            },
            attrs: {
                class: 'modal-form',
            },
            events: {
                submit: (e) => {
                    e.preventDefault();
                    if (Array.isArray(input._children.input)) {
                        return;
                    }
                    const files = (input._children.input.getContent() as HTMLInputElement).files;
                    if (!files?.length) {
                        input.validate('avatar', null);
                    } else {
                        input.validate('avatar', files[0]);
                        const formData = new FormData(this.getContent() as HTMLFormElement);
                        formData.set('chatId', store.getState().selectedChatId);

                        ChatController.changeChatAvatar(formData);
                    }
                },
            },
        });
    }

    protected render(): Node {
        return this.compile(changeAvatarFormTmpl, { ...this._props, ...this._children });
    }
}
