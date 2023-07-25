import { IBlockInputParams } from '../block/types';

export type IMessageListItemProps = {
    id?: number;
    user_id?: number;
    chat_id?: number;
    time?: string;
    type?: 'message' | 'file';
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
};

export type IMessageListItemInputParams = IBlockInputParams<IMessageListItemProps>;
