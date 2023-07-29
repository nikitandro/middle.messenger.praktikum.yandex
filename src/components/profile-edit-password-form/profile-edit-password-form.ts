import AvatarInput from '../avatar-input';
import Button from '../button';
import Form from '../form';
import Input from '../input';
import ValidatedInput from '../validated-input';
import profileEditPasswordFormTmpl from './profile-edit-password-form.tmpl';

export default class ProfileEditPasswordForm extends Form {
    constructor() {
        const inputClass = 'profile-list-item__value profile-list-item__input';
        super(profileEditPasswordFormTmpl, {
            props: {
                first_name: 'Никита',
                avatarInput: new AvatarInput(),
                saveButton: new Button({
                    props: { content: 'Сохранить' },
                    attrs: { class: 'button' },
                }),
                oldPasswordInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        name: 'oldPassword',
                        type: 'password',
                    },
                }),
                newPasswordInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        name: 'newPassword',
                        type: 'password',
                    },
                }),
                newPasswordInputAgain: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        name: 'newPassword',
                        type: 'password',
                    },
                }),
            },
            attrs: {
                class: 'profile',
            },
        });
    }
}
