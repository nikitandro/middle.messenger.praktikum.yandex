export type GetChatsRequestQueryParams = { offset?: number; limit?: number; title?: string };

export type ChatModel = {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: {
            id: number;
            first_name: string;
            second_name: string;
            display_name: string;
            login: string;
            email: string;
            phone: string;
            avatar: string;
        };
        time?: string;
        content?: string;
    };
};

export type GetChatsResponseModel = ChatModel[];

export type CreateChatRequestModel = {
    title: string;
};

export type CreateChatResponseModel = {
    id: number;
};

export type GetChatTokenResponseModel = {
    token: string;
};

export type ChatMessage = {
    id: number;
    user_id: number;
    chat_id?: number;
    time: string;
    type: 'message' | 'file';
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
};

export enum ChatEvents {
    Message = 'message',
    UserConnected = 'user connected',
    GetOld = 'get old',
}

export type AddUsersToChatRequestModel = {
    users: number[];
    chatId: number;
};

export type DeleteUsersFromChatRequestModel = AddUsersToChatRequestModel;

export type ChatUsersModel = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    avatar: string;
    role: string;
};

export type GetChatUsersResponseModel = ChatUsersModel[];

export type GetChatUsersQueryParams = { offset: number; limit: number; name: string };

export type DeleteChatByIdRequestModel = {
    chatId: number;
};

export type DeleteChatByIdResponseModel = {
    userId: number;
    result: ChatModel;
};
