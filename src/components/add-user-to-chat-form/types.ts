import { IBlockInputParams } from '../block/types';

export type AddUsersToChatFormProps = {
    onSelectUser: (userId: number) => void;
};

export type AddUsersToChatFormInputParams = IBlockInputParams<AddUsersToChatFormProps>;
