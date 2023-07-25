import { IBlockPropsAndAttrs } from '../block/types.ts';

export type ILinkProps = {
    text: string;
    isUnderlined?: boolean;
    isDanger?: boolean;
}

export type ILinkPropsAndAttrs = IBlockPropsAndAttrs<ILinkProps>;
