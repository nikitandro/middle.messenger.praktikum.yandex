import { IBlockPropsAndAttrs } from '../block/types.ts';

export type IButtonProps = {
    text: string;
}


export type IButtonPropsAndAttrs = IBlockPropsAndAttrs<IButtonProps>;
