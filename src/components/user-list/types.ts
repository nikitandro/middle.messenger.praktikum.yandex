import { IBlockInputParams } from '../block/types';
import UserListItem from '../user-list-item';

export type UserListProps = {
    users: UserListItem[];
};

export type UserListInputParams = IBlockInputParams<UserListProps>;
