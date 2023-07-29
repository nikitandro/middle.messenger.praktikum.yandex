import AuthFormInput from '../auth-form-input/auth-form-input';
import Block from '../block';
import { IBlockInputParams } from '../block/types';

export type IAuthFormProps = {
    inputs: AuthFormInput[];
    actions: Block[];
};

export type IAuthFormInputParams = IBlockInputParams<IAuthFormProps>;
