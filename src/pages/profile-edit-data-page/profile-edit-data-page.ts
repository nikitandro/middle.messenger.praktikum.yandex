import AvatarInput from '../../components/avatar-input';
import Block from '../../components/block';
import Button from '../../components/button';
import profileEditDataPageTmpl from './profile-edit-data-page.tmpl';

export default class ProfileEditDataPage extends Block {
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
                profile: profile,
                avatarInput: new AvatarInput(),
                saveButton: new Button({ props: { text: 'Сохранить' } }),
            },
            attrs: {
                class: 'profile-page',
            },
        });
    }

    protected render(): Node {
        return this.compile(profileEditDataPageTmpl, { ...this._props, ...this._children });
    }
}
