import Block from '../../components/block';
import ProfileEditPasswordForm from '../../components/profile-edit-password-form';
import profileEditPasswordPageTmpl from './profile-edit-password-page.tmpl';

export default class ProfileEditPasswordPage extends Block {
    constructor() {
        super('div', {
            props: {
                form: new ProfileEditPasswordForm(),
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
