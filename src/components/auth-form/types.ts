import Block from '../block';
import { IBlockInputParams } from '../block/types';
import Input from '../input';

export type IAuthFormProps = {
    inputs: Input[];
    actions: Block[];
};

export type IAuthFormInputParams = IBlockInputParams<IAuthFormProps>;
