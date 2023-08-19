// export type IChatListItemInputParams = {
//     id: number;
//     title: string;
//     avatar: string;
//     unread_count: number;
//     last_message: {
//         user: {
//             id: number;
//             first_name: string;
//             second_name: string;
//             display_name: string;
//             login: string;
//             email: string;
//             phone: string;
//             avatar: string;
//         };
//         time: string;
//         content: string;
//     };
// };

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
