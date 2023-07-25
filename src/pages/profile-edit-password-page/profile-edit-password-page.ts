import AvatarInput from '../../components/avatar-input/avatar-input';
import Block from '../../components/block';
import Button from '../../components/button';
import profileEditPasswordPageTmpl from './profile-edit-password-page.tmpl';

export default class ProfileEditPasswordPage extends Block {
    constructor() {
        const profile: {
            first_name: string;
            second_name: string;
            email: string;
            phone: string;
            login: string;
        } = {
            first_name: 'Никита',
            email: 'nik.vish.93@mail.ru',
            login: 'nikitandro',
            phone: '+79193813732',
            second_name: 'Вишняков',
        };
        super('div', {
            props: {
                saveButton: new Button({ props: { text: 'Сохранить' } }),
                profile: profile,
                avatarInput: new AvatarInput(),
            },
            attrs: {
                class: 'profile-page',
            },
        });
    }

    protected render(): Node {
        return this.compile(profileEditPasswordPageTmpl, { ...this._props, ...this._children });
    }
}
