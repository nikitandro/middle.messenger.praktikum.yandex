import { IBlockInputParams } from '../block/types.ts';

export type IButtonProps = {
    content: unknown;
};

export type IButtonPropsAndAttrs = IBlockInputParams<IButtonProps>;
