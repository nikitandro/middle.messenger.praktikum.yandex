import Form from '../form';
import Button from '../../components/button';
import profileEditDataFormTmpl from './profile-edit-data-form.tmpl';
import ValidatedInput from '../validated-input/validated-input';
import { UserProfileModel } from '../../services/user-api/types';
import UserController from '../../controllers/user-controller/user-controller';
import Avatar from '../avatar';
import { createResourceURL } from '../../services/api';

class ProfileEditDataForm extends Form<UserProfileModel> {
    constructor(profile: any) {
        const inputClass = 'profile-list-item__value profile-list-item__input';
        const getFormValue = (formValue: UserProfileModel) => {
            UserController.changeUserProfile(formValue);
        };
        console.log(profile);
        super(profileEditDataFormTmpl, {
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
                emailInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        value: profile.email ?? '',
                        name: 'email',
                    },
                }),
                loginInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        value: profile.login ?? '',
                        name: 'login',
                    },
                }),
                firstNameInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        value: profile.first_name ?? '',
                        name: 'first_name',
                    },
                }),
                secondNameInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        value: profile.second_name ?? '',
                        name: 'second_name',
                    },
                }),
                displayNameInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        value: profile.display_name ?? '',
                        name: 'display_name',
                    },
                }),
                phoneInput: new ValidatedInput({
                    attrs: {
                        class: inputClass,
                        value: profile.phone ?? '',
                        name: 'phone',
                    },
                }),
            },
            attrs: {
                class: 'profile',
            },
        });
    }
}

export default ProfileEditDataForm;
