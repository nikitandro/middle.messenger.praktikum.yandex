import ProfileEditPasswordForm from '../../components/profile-edit-password-form';
import SettingsLayout from '../../layouts/settings-layout';
import cloneDeep from '../../utils/cloneDeep';
import isEqual from '../../utils/isEqual';
import Store from '../../utils/store';
import { StoreEvents } from '../../utils/store/events';

export default class ProfileEditPasswordPage extends SettingsLayout {
    constructor() {
        const store = new Store();
        let user = store.getState().user ?? {};
        super({ props: { page: new ProfileEditPasswordForm(user) } });

        store.on(StoreEvents.Updated, () => {
            const newUser = cloneDeep(store.getState().user);

            if (isEqual(user, newUser)) {
                return;
            }
            this.setProps({ props: { page: new ProfileEditPasswordForm(newUser) } });
            user = newUser;
        });
    }
}
