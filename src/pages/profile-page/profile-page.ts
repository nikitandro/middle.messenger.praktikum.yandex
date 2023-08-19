import './profile-page.scss';
import profilePageTmpl from './profile-page.tmpl.ts';
import Block from '../../components/block';
import Link from '../../components/link';
import AvatarInput from '../../components/avatar-input';
import GoBackArea from '../../components/go-back-area';
import AuthController from '../../controllers/auth-controller';
import withProfileState from '../../helpers/withProfileState.ts';
import Modal from '../../components/modal';
import ChangeAvatarForm from '../../components/change-avatar-form';

class ProfilePage extends Block {
    constructor(state: any) {
        const modal = new Modal({
            content: new ChangeAvatarForm(),
        });
        const onAvatarClick = () => {
            modal.toggleOpen();
        };
        super('div', {
            props: {
                ...state,
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
                    events: {
                        click: () => {
                            AuthController.logout();
                        },
                    },
                }),
                avatarInput: new AvatarInput({
                    events: {
                        click: () => {
                            onAvatarClick();
                        },
                    },
                }),
                goBackArea: new GoBackArea(),
                modal,
            },
            attrs: {
                class: 'profile-page',
            },
        });
        AuthController.getUserInfo();
    }

    protected render(): Node {
        return this.compile(profilePageTmpl, { ...this._props, ...this._children });
    }
}

export default withProfileState(ProfilePage);
