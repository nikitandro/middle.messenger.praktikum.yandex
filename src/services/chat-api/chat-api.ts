import api from '../api';
import {
    CreateChatRequestModel,
    CreateChatResponseModel,
    GetChatsRequestQueryParams,
    GetChatsResponseModel,
} from './types';

export default class ChatAPI {
    public static getChats(params?: GetChatsRequestQueryParams) {
        return api.get<GetChatsResponseModel>('/chats', params ? { queryData: params } : {});
    }

    public static createChat(requestModel: CreateChatRequestModel) {
        return api.post<CreateChatResponseModel>('/chats', {
            data: JSON.stringify(requestModel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
