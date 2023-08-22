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

export type UserChangePasswordRequestModel = {
    oldPassword: string;
    newPassword: string;
};

export type SearchUsersByLoginRequestModel = {
    login: string;
};

export type SearchedUserByLoginModel = Omit<UserResponseModel, 'status' | 'phone'>;

export type SearchUsersByLoginResponseModel = SearchedUserByLoginModel[];
