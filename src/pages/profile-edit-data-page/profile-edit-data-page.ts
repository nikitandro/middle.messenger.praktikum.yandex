import ProfileEditDataForm from '../../components/profile-edit-data-form';
import AuthController from '../../controllers/auth-controller/auth-controller';
import SettingsLayout from '../../layouts/settings-layout';
import isEqual from '../../utils/isEqual';
import Store from '../../utils/store';
import { StoreEvents } from '../../utils/store/events';

export default class ProfileEditDataPage extends SettingsLayout {
    constructor() {
        let user = {};
        super({ props: { page: new ProfileEditDataForm(user) } });
        const store = new Store();
        AuthController.getUserInfo();
        store.on(StoreEvents.Updated, () => {
            console.log(user);
            const newUser = store.getState().user;
            if (isEqual(user, newUser)) {
                return;
            }
            this.setProps({ props: { page: new ProfileEditDataForm(newUser) } });
            user = newUser;
        });
    }
}
