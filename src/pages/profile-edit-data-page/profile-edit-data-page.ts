import ProfileEditDataForm from '../../components/profile-edit-data-form';
import SettingsLayout from '../../layouts/settings-layout/seetings-layout';

export default class ProfileEditDataPage extends SettingsLayout {
    constructor() {
        super({ props: { page: new ProfileEditDataForm() } });
    }
}
