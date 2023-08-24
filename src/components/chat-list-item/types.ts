import { ChatModel } from '../../services/chat-api/types';
import { IBlockInputParams } from '../block/types';

export type IChatListItemProps = {
    title: string;
    unread_count: number;
    last_message: {
        time: string;
        content: string;
    };
};

export type IChatListItemInputParams = IBlockInputParams<ChatModel>;
