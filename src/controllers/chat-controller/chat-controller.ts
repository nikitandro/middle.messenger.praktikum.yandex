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
        try {
            const getChatsResponse = await ChatAPI.getChats(params);
            this._store.set('chats', getChatsResponse.response);
            return getChatsResponse;
        } catch (e) {
            throw new Error('Failed to get chats.');
        }
    }

    public static async createChat(requestModel: CreateChatRequestModel) {
        try {
            const response = await ChatAPI.createChat(requestModel);
            await this.getChats({});
            this._store.set('selectedChatId', response.response.id);
            return response;
        } catch (e) {
            throw new Error('Failed to create the chat.');
        }
    }

    public static getOldMessages(limit: number) {
        try {
            ChatAPI.getOldMessages(this._currentSocket, limit);
        } catch (e) {
            throw new Error('Failed to get old messages.');
        }
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
        try {
            const response = await ChatAPI.addUsersToChat(requestModel);
            await this.getChatUsers(requestModel.chatId);
            return response;
        } catch (e) {
            throw new Error('Failed to add user to the chat.');
        }
    }

    public static async changeChatAvatar(formData: FormData) {
        try {
            const response = await ChatAPI.changeChatAvatar(formData);
            const chats: ChatModel[] = this._store.getState().chats;
            const currentChat: ChatModel = this._store.getState().currentChat;
            let newAvatar: string | undefined;
            this._store.set(
                'chats',
                chats.map((chat) => {
                    if (chat.id === response.response.id) {
                        chat.avatar = response.response.avatar;
                        newAvatar = response.response.avatar;
                    }
                    return chat;
                }),
            );
            this._store.set('currentChat', { ...currentChat, avatar: newAvatar });
            return response;
        } catch (e) {
            throw new Error("Failed to change the chat's avatar");
        }
    }

    public static async deleteUsersFromChat(requestModel: DeleteUsersFromChatRequestModel) {
        try {
            const response = await ChatAPI.deleteUsersFormChat(requestModel);
            await this.getChatUsers(requestModel.chatId);
            return response;
        } catch (e) {
            throw new Error('Failed to delete users from the chat.');
        }
    }

    public static async deleteChatById(requestModel: DeleteChatByIdRequestModel) {
        try {
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
        } catch (e) {
            throw new Error('Failed to delete the chat.');
        }
    }

    public static async getChatUsers(chatId: number, queryParams?: GetChatUsersQueryParams) {
        try {
            const response = await ChatAPI.getChatUsers(chatId, queryParams);
            this._store.set('chatUsers', response.response);
            return response;
        } catch (e) {
            throw new Error("Failed to get the chat's users.");
        }
    }

    public static sendChatMessage(message: string) {
        try {
            ChatAPI.sendChatMessage(this._currentSocket, message);
        } catch (e) {
            throw new Error('Failed to send the chat message.');
        }
    }

    public static async connectToChat() {
        try {
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
        } catch (e) {
            throw new Error('Failed to connect to the chat.');
        }
    }
}
