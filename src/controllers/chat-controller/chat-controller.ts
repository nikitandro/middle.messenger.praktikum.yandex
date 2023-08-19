import ChatAPI from '../../services/chat-api';
import { CreateChatRequestModel, GetChatsRequestQueryParams } from '../../services/chat-api/types';
import Store from '../../utils/store';

export default class ChatController {
    private static _store = new Store();
    public static async getChats(params: GetChatsRequestQueryParams) {
        const getChatsResponse = await ChatAPI.getChats(params);
        this._store.set('chats', getChatsResponse.response);
        return getChatsResponse;
    }

    public static async createChat(requestModel: CreateChatRequestModel) {
        const response = await ChatAPI.createChat(requestModel);
        await this.getChats({});
        this._store.set('selectedChatId', response.response.id);
        return response;
    }
}
