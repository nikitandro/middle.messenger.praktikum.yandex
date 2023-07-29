import { IBlockInputParams } from '../block/types';
import MessageListItem from '../message-list-item';

export type IMessageListProps = {
    messages: MessageListItem[];
};

export type IMessageListInputParams = IBlockInputParams<IMessageListProps>;
