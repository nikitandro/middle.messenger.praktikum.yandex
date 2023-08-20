import api, { API_DOMAIN } from '../api';
import {
    CreateChatRequestModel,
    CreateChatResponseModel,
    GetChatTokenResponseModel,
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

    public static getChatToken(chatId: number) {
        return api.post<GetChatTokenResponseModel>(`/chats/token/${chatId}`);
    }

    public static async connectToChat(chatId: number, userId: number) {
        const chatToken = (await this.getChatToken(chatId)).response.token;

        const socket = new WebSocket(
            `wss://${API_DOMAIN}/ws/chats/${userId}/${chatId}/${chatToken}`,
        );

        return socket;
    }

    public static getOldMessages(socket: WebSocket, limit: number) {
        socket.send(
            JSON.stringify({
                type: 'get old',
                content: limit.toString(),
            }),
        );
        return socket;
    }

    public static sendChatMessage(socket: WebSocket, content: string) {
        socket.send(
            JSON.stringify({
                type: 'message',
                content,
            }),
        );
        return socket;
    }
}
