import { IBlockInputParams } from '../block/types.ts';

export type ILinkProps = {
    text: string;
    isUnderlined?: boolean;
    isDanger?: boolean;
};

export type ILinkPropsAndAttrs = IBlockInputParams<ILinkProps>;
