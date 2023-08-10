import './profile-page.scss';
import profilePageTmpl from './profile-page.tmpl.ts';
import Block from '../../components/block';
import Link from '../../components/link';
import AvatarInput from '../../components/avatar-input/avatar-input.ts';
import GoBackArea from '../../components/go-back-area/go-back-area.ts';

export default class ProfilePage extends Block {
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
                linkToProfileEditData: new Link({
                    props: {
                        text: 'Изменить данные',
                        to: '/settings/edit-data',
                    },
                }),
                linkToProfileEditPassword: new Link({
                    props: {
                        text: 'Изменить пароль',
                        to: '/settings/edit-password',
                    },
                }),
                linkLogout: new Link({
                    props: {
                        text: 'Выйти',
                        isDanger: true,
                        to: '/',
                    },
                }),
                avatarInput: new AvatarInput(),
                goBackArea: new GoBackArea(),
            },
            attrs: {
                class: 'profile-page',
            },
        });
    }

    protected render(): Node {
        return this.compile(profilePageTmpl, { ...this._props, ...this._children });
    }
}
