import ChatAPI from '../../services/chat-api';
import {
    AddUsersToChatRequestModel,
    CreateChatRequestModel,
    DeleteUsersFromChatRequestModel,
    GetChatUsersQueryParams,
    GetChatsRequestQueryParams,
} from '../../services/chat-api/types';
import Store from '../../utils/store';

export default class ChatController {
    private static _store = new Store();
    private static _currentSocket: WebSocket;

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

    public static getOldMessages(limit: number) {
        ChatAPI.getOldMessages(this._currentSocket, limit);
    }

    private static _addSocketEventListeners(socket: WebSocket) {
        socket.addEventListener('open', () => {
            this.getOldMessages(0);
        });
        socket.addEventListener('message', (ev) => {
            const data = JSON.parse(ev.data);
            if (Array.isArray(data)) {
                this._store.set('messages', data);
            } else if (data.type === 'message') {
                this._store.set('messages', [data, ...this._store.getState().messages]);
            }
        });
    }

    public static async addUsersToChat(requestModel: AddUsersToChatRequestModel) {
        const response = await ChatAPI.addUsersToChat(requestModel);
        await this.getChatUsers(requestModel.chatId);
        return response;
    }

    public static async deleteUsersFromChat(requestModel: DeleteUsersFromChatRequestModel) {
        const response = await ChatAPI.deleteUsersFormChat(requestModel);
        await this.getChatUsers(requestModel.chatId);
        return response;
    }

    public static async getChatUsers(chatId: number, queryParams?: GetChatUsersQueryParams) {
        const response = await ChatAPI.getChatUsers(chatId, queryParams);
        this._store.set('chatUsers', response.response);
        return response;
    }

    public static sendChatMessage(message: string) {
        ChatAPI.sendChatMessage(this._currentSocket, message);
    }

    public static async connectToChat() {
        const userId = this._store.getState()?.user?.id;
        const selectedChatId = this._store.getState().selectedChatId;

        if (!selectedChatId) {
            throw new Error('No chat id.');
        }

        if (!userId) {
            throw new Error('No user id.');
        }

        if (this._currentSocket) {
            this._currentSocket.close();
        }

        const socket = await ChatAPI.connectToChat(selectedChatId, userId);
        this._currentSocket = socket;

        this._addSocketEventListeners(socket);

        return socket;
    }
}
