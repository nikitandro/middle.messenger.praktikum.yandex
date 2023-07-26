import Block from '../../components/block';
import { IBlockInputParams } from '../../components/block/types';

export type IAsideLayoutProps = {
    aside: string | Block | Block[];
    main: string | Block | Block[];
};

export type IAsideLayoutInputParams = IBlockInputParams<IAsideLayoutProps>;
