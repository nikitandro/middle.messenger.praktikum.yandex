import { IBlockInputParams } from '../block/types';

export type IFormProps<T> = {
    getFormValue?: GetFormValueFunction<T>;
} & Record<string, any>;

export type IFormInputParams<T = unknown> = IBlockInputParams<IFormProps<T>>;

export type GetFormValueFunction<T> = (formValue: T) => void;
