import Block from '../block';
import { IBlockInputParams } from '../block/types';

export type IFormProps = {
    content: string | Block<Record<string, unknown>>;
};

export type IFormInputParams = IBlockInputParams<IFormProps>;
