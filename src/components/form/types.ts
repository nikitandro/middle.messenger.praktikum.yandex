import Block from '../block';
import { IBlockInputParams } from '../block/types';

export type IFormProps = {
    content: string | Block<any, any>;
};

export type IFormInputParams = IBlockInputParams<IFormProps>;
