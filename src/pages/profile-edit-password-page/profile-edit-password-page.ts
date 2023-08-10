import ProfileEditPasswordForm from '../../components/profile-edit-password-form';
import SettingsLayout from '../../layouts/settings-layout/seetings-layout';

export default class ProfileEditPasswordPage extends SettingsLayout {
    constructor() {
        super({ props: { page: new ProfileEditPasswordForm() } });
    }
}
