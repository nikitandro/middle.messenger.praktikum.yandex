import Block from '../../components/block';
import ProfileEditDataForm from '../../components/profile-edit-data-form';
import profileEditDataPageTmpl from './profile-edit-data-page.tmpl';

export default class ProfileEditDataPage extends Block {
    constructor() {
        super('div', {
            props: {
                form: new ProfileEditDataForm(),
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
