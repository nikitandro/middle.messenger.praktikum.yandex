import { ChatMessage } from '../../services/chat-api/types';
import { IBlockInputParams } from '../block/types';

export type IMessageListItemProps = {
    content: string;
    isIncoming: boolean;
};

export type IMessageListItemInputParams = IBlockInputParams<ChatMessage>;
