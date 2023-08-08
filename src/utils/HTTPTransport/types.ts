export type HTTPMethodOptions<T> = {
    data?: T;
    queryData?: Record<string, any>;
    timeout?: number;
    headers?: Record<string, any>;
    withCredentials?: boolean;
};

export type HTTPMethod<R = unknown, T = undefined> = (
    url: string,
    options?: HTTPMethodOptions<T>,
) => Promise<R>;

export type HTTPRequest<R = unknown, T = undefined> = (
    url: string,
    options: { method: METHODS } & HTTPMethodOptions<T>,
    timeout?: number,
) => Promise<R>;

export enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
    POST = 'POST',
}

export type IHTTPTransportConfigOptions = {
    baseUrl?: string;
    timeout?: number;
    withCredentials?: boolean;
};
