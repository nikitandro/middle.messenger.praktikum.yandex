import AvatarInput from '../avatar-input';
import Button from '../button';
import Form from '../form';
import Input from '../input';
import profileEditPasswordFormTmpl from './profile-edit-password-form.tmpl';
const profile = {
    first_name: 'Никита',
    email: 'nik.vish.93@mail.ru',
    login: 'nikitandro',
    phone: '+79193813732',
    second_name: 'Вишняков',
    display_name: 'Никита',
};

export default class ProfileEditPasswordForm extends Form {
    constructor() {
        const inputClass = 'profile-list-item__value profile-list-item__input';
        super(profileEditPasswordFormTmpl, {
            props: {
                avatarInput: new AvatarInput(),
                saveButton: new Button({ props: { text: 'Сохранить' } }),
                oldPasswordInput: new Input({
                    attrs: {
                        class: inputClass,
                        name: 'oldPassword',
                        type: 'password',
                    },
                }),
                newPasswordInput: new Input({
                    attrs: {
                        class: inputClass,
                        name: 'newPassword',
                        type: 'password',
                    },
                }),
                newPasswordInputAgain: new Input({
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
