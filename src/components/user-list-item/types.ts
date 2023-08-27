import { SearchedUserByLoginModel } from '../../services/user-api/types';
import { IBlockInputParams } from '../block/types';

export type UserListItemInputParams = IBlockInputParams<SearchedUserByLoginModel>;
