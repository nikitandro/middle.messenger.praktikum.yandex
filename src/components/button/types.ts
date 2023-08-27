import { IBlockInputParams } from '../block/types.ts';

export type IButtonProps = {
    content: unknown;
    isContentBlock?: boolean;
};

export type IButtonPropsAndAttrs = IBlockInputParams<IButtonProps>;
