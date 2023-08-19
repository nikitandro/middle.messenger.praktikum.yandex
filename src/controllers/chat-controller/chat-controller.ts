import ChatAPI from '../../services/chat-api';
import { GetChatsRequestQueryParams } from '../../services/chat-api/types';
import Store from '../../utils/store';

export default class ChatController {
    private static _store = new Store();
    public static async getChats(params: GetChatsRequestQueryParams) {
        const getChatsResponse = await ChatAPI.getChats(params);
        this._store.set('chats', getChatsResponse.response);
        return getChatsResponse;
    }
}
