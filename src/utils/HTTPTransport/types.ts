export type HTTPMethodOptions = {
    data?: unknown;
    queryData?: Record<string, any>;
    timeout?: number;
    headers?: Record<string, any>;
    withCredentials?: boolean;
    responseType?: XMLHttpRequestResponseType;
};

export type XHRResponse<T> = Omit<XMLHttpRequest, 'response'> & { response: T };

export type HTTPMethod = <R = unknown>(
    url: string,
    options?: HTTPMethodOptions,
) => Promise<XHRResponse<R>>;

export type HTTPRequest = <R = unknown>(
    url: string,
    options: { method: METHODS } & HTTPMethodOptions,
    timeout?: number,
) => Promise<XHRResponse<R>>;

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
