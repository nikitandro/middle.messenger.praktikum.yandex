import './profile-page.scss';
import profilePageTmpl from './profile-page.tmpl.ts';
import Block from '../../components/block';
import Link from '../../components/link';
import AvatarInput from '../../components/avatar-input';
import GoBackArea from '../../components/go-back-area';
import AuthController from '../../controllers/auth-controller';
import Modal from '../../components/modal';
import ChangeAvatarForm from '../../components/change-avatar-form';
import { GetUserInfoResponseModel } from '../../services/auth-api/types.ts';
import Store from '../../utils/store';
import { StoreEvents } from '../../utils/store/events.ts';
import isEqual from '../../utils/isEqual.ts';
import cloneDeep from '../../utils/cloneDeep.ts';

class ProfilePage extends Block {
    constructor() {
        const store = new Store();
        let user: GetUserInfoResponseModel;
        const modal = new Modal({
            content: new ChangeAvatarForm(),
        });
        const onAvatarClick = () => {
            modal.toggleOpen();
        };
        super('div', {
            props: {
                profile: {},
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
        store.on(StoreEvents.Updated, () => {
            const newUser = cloneDeep(store.getState().user);

            if (isEqual(newUser, user ?? {})) {
                return;
            }

            user = newUser;

            this.setProfile(newUser);
        });
    }

    public setProfile(user: GetUserInfoResponseModel) {
        this.setProps({ props: { profile: user } });
    }

    protected render(): Node {
        return this.compile(profilePageTmpl, { ...this._props, ...this._children });
    }
}

export default ProfilePage;
