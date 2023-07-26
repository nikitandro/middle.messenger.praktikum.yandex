import { IBlockInputParams } from '../block/types';
import ChatListItem from '../chat-list-item/chat-list-item';

export type IChatListProps = {
    chats: ChatListItem[];
};

export type IChatListInputParams = IBlockInputParams<IChatListProps>;
