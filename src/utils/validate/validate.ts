import { IValidationOptions, IValidators } from './types';

const validators: IValidators = {
    minLength: (str: string, num: number) => {
        return str.length >= num;
    },
    maxLength: (str: string, num: number) => {
        return str.length <= num;
    },
    match: (str: string, pattern: RegExp | string) => {
        return !!str.match(pattern)?.length;
    },
};

export default function validate(string: string, options: IValidationOptions) {
    let isValid = true;
    let key: keyof IValidationOptions;
    for (key in options) {
        if (options.hasOwnProperty(key)) {
            if (options[key] !== undefined) {
                // @ts-ignore
                isValid = validators[key](string, options[key]);
            }
        }
    }
    return isValid;
}
