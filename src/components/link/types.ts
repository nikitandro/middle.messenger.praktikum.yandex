import { IBlockPropsAndAttrs } from '../block/types.ts';

export type ILinkProps = {
    text: string;
    isUnderlined: boolean;
}

export type ILinkPropsAndAttrs = IBlockPropsAndAttrs<ILinkProps>;
