import Form from '../form';
import Button from '../../components/button';
import Input from '../../components/input';
import AvatarInput from '../../components/avatar-input';
import profileEditDataFormTmpl from './profile-edit-data-form.tmpl';
const profile = {
    first_name: 'Никита',
    email: 'nik.vish.93@mail.ru',
    login: 'nikitandro',
    phone: '+79193813732',
    second_name: 'Вишняков',
    display_name: 'Никита',
};

export default class ProfileEditDataForm extends Form {
    constructor() {
        const inputClass = 'profile-list-item__value profile-list-item__input';
        super(profileEditDataFormTmpl, {
            props: {
                profile: profile,
                avatarInput: new AvatarInput(),
                saveButton: new Button({ props: { text: 'Сохранить' } }),
                emailInput: new Input({
                    attrs: {
                        class: inputClass,
                        value: profile.email,
                        name: 'email',
                    },
                }),
                loginInput: new Input({
                    attrs: {
                        class: inputClass,
                        value: profile.login,
                        name: 'login',
                    },
                }),
                firstNameInput: new Input({
                    attrs: {
                        class: inputClass,
                        value: profile.first_name,
                        name: 'first_name',
                    },
                }),
                secondNameInput: new Input({
                    attrs: {
                        class: inputClass,
                        value: profile.second_name,
                        name: 'second_name',
                    },
                }),
                displayNameInput: new Input({
                    attrs: {
                        class: inputClass,
                        value: profile.display_name,
                        name: 'display_name',
                    },
                }),
                phoneInput: new Input({
                    attrs: {
                        class: inputClass,
                        value: profile.phone,
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
