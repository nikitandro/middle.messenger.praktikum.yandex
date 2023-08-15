import api from '../api';
import { GetChatsRequestQueryParams, GetChatsResponseModel } from './types';

export default class ChatAPI {
    public static getChats(params?: GetChatsRequestQueryParams) {
        return api.get<GetChatsResponseModel>('/chats', params ? { queryData: params } : {});
    }
}