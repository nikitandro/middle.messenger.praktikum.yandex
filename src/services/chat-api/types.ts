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
