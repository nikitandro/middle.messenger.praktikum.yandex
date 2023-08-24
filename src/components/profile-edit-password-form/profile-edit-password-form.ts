import UserController from '../../controllers/user-controller/user-controller';
import { createResourceURL } from '../../services/api';
import { UserChangePasswordRequestModel } from '../../services/user-api/types';
import Avatar from '../avatar';
import Button from '../button';
import Form from '../form';
import ValidatedInput from '../validated-input';
import profileEditPasswordFormTmpl from './profile-edit-password-form.tmpl';

export default class ProfileEditPasswordForm extends Form<UserChangePasswordRequestModel> {
    constructor(profile: any) {
        const inputClass = 'profile-list-item__value profile-list-item__input';
        const getFormValue = (formValue: UserChangePasswordRequestModel) => {
            UserController.changeUserPassword(formValue);
        };
        super(profileEditPasswordFormTmpl, {
            props: {
                getFormValue: getFormValue,
                avatar: new Avatar({
                    props: { src: profile.avatar ? createResourceURL(profile.avatar) : undefined },
                    attrs: {
                        class: 'profile__avatar',
                    },
                }),
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
