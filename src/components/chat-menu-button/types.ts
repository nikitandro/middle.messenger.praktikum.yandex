import Block from '../block';
import { IBlockInputParams } from '../block/types';

export type MenuButtonProps = {
    icon: Block;
    text: string;
};

export type MenuButtonInputParams = IBlockInputParams<MenuButtonProps>;
