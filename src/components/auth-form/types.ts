import AuthFormInput from '../auth-form-input/auth-form-input';
import Block from '../block';
import { IBlockInputParams } from '../block/types';
import { IFormProps } from '../form/types';

export type IAuthFormProps<T> = {
    inputs: AuthFormInput[];
    actions: Block[];
} & IFormProps<T>;

export type IAuthFormInputParams<T> = IBlockInputParams<IAuthFormProps<T>>;
