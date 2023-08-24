import ChatAPI from '../../services/chat-api';
import {
    AddUsersToChatRequestModel,
    ChatModel,
    CreateChatRequestModel,
    DeleteChatByIdRequestModel,
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

    private static _addSocketEventListeners() {
        this._currentSocket.addEventListener('open', () => {
            if (this._currentSocket.readyState === this._currentSocket.CONNECTING) {
                return;
            }
            this.getOldMessages(0);
        });
        this._currentSocket.addEventListener('message', (ev) => {
            const data = JSON.parse(ev.data);
            if (Array.isArray(data)) {
                this._store.set('messages', data);
            } else if (data.type === 'message') {
                this._store.set('messages', [data, ...this._store.getState().messages]);
            }
        });
        this._currentSocket.addEventListener('close', () => {
            ChatController.connectToChat();
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

    public static async deleteChatById(requestModel: DeleteChatByIdRequestModel) {
        const response = await ChatAPI.deleteChatById(requestModel);
        const chats: ChatModel[] = this._store.getState().chats;
        if (chats) {
            this._store.set(
                'chats',
                chats.filter((chat) => chat.id !== response.response.result.id),
            );
            this._store.set('selectedChatId', null);
        }
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
            return;
        }

        if (!userId) {
            return;
        }

        if (this._currentSocket) {
            this._currentSocket.close();
        }

        const socket = await ChatAPI.connectToChat(selectedChatId, userId);
        this._currentSocket = socket;

        this._addSocketEventListeners();

        return socket;
    }
}
