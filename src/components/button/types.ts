import { IBlockInputParams } from '../block/types.ts';

export type IButtonProps = {
    text: string;
};

export type IButtonPropsAndAttrs = IBlockInputParams<IButtonProps>;
