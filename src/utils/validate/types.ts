export type IValidationOptions = {
    minLength?: number;
    maxLength?: number;
    match?: RegExp | string;
};

export type IValidators = {
    [K in NonNullable<keyof IValidationOptions>]: (
        str: string,
        optionValue: NonNullable<IValidationOptions[K]>,
    ) => boolean;
};
