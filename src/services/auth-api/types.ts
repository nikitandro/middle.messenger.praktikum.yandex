export type SignUpRequestModel = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
};

export type SignInRequestModel = {
    login: string;
    password: string;
};

export type SignUpResponseModel = {
    id: number;
};

export type SignInResponseModel = {
    id: number;
};

export type GetUserInfoResponseModel = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    avatar: string;
    email: string;
    phone: string;
};
