export default function simpleValidate(name: string, value: string): boolean {
    switch (name) {
        case 'login':
            return value.length >= 3 && value.length <= 20;
        case 'email':
            return !!value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)?.length;
        case 'first_name':
            return !!value.match(/^[\p{Lu}\p{Ll}А-ЯЁ][\p{L}]*(-[\p{L}]+)*$/)?.length;
        case 'second_name':
            return !!value.match(/^[\p{Lu}\p{Ll}А-ЯЁ][\p{L}]*(-[\p{L}]+)*$/)?.length;
        case 'password':
            return (
                !!value.match(/^(?=.*[A-Z])(?=.*\d).+$/)?.length &&
                value.length >= 8 &&
                value.length <= 40
            );
        case 'newPassword':
            return (
                !!value.match(/^(?=.*[A-Z])(?=.*\d).+$/)?.length &&
                value.length >= 8 &&
                value.length <= 40
            );
        case 'message':
            return value.length > 0;
        case 'phone':
            return !!value.match(/^\+?\d+$/)?.length && value.length >= 10 && value.length <= 15;
        default:
            return true;
    }
}
