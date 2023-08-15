export type UserProfileModel = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
};

export type UserResponseModel = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    avatar: string | null;
    status: null | string;
    phone: string;
};
