import { HTTPMethod, HTTPRequest, HTTPTransportConfigOptions, METHODS, XHRResponse } from './types';
import queryStringify from '../queryStringify';
import HTTPMiddleware from '../HTTPMiddleware';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
    public readonly config: HTTPTransportConfigOptions;

    public static defaultTimeout = 5000;

    private _responseMiddleware?: HTTPMiddleware;

    constructor(config: HTTPTransportConfigOptions) {
        this.config = config;
    }

    public get: HTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.GET }, options?.timeout);
    };

    public put: HTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.PUT }, options?.timeout);
    };

    public post: HTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.POST }, options?.timeout);
    };

    public delete: HTTPMethod = (url, options) => {
        return this.request(url, { ...options, method: METHODS.DELETE }, options?.timeout);
    };

    public useResponseMiddleware(
        onFulfiled: <T>(config: XHRResponse<T>) => XHRResponse<T>,
        onError: <R>(config: XHRResponse<R>) => XHRResponse<R>,
    ) {
        this._responseMiddleware = new HTTPMiddleware(onFulfiled, onError);
    }

    public request: HTTPRequest = (
        url,
        options,
        timeout = this.config.timeout ? this.config.timeout : HTTPTransport.defaultTimeout,
    ) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            let data;

            if (this.config.baseUrl) {
                url = this.config.baseUrl + url;
            }

            xhr.responseType = options.responseType ? options.responseType : 'json';

            if (options.method === METHODS.GET) {
                data = queryStringify(options.queryData ? options.queryData : {});
                url += data;
            } else {
                data = options.data;
            }

            console.log(data);

            xhr.open(options.method, url);

            for (const header in options.headers) {
                if (options.headers.hasOwnProperty(header)) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }

            xhr.onload = () => {
                if (!this._responseMiddleware) {
                    if (xhr.status >= 400 && xhr.status <= 599) {
                        reject(xhr);
                        return;
                    }
                    resolve(xhr);
                    return;
                }

                if (xhr.status >= 400 && xhr.status <= 599) {
                    reject(this._responseMiddleware.onError(xhr));
                }

                resolve(this._responseMiddleware.onFulfiled(xhr));
            };

            xhr.withCredentials = options.withCredentials
                ? options.withCredentials
                : this.config.withCredentials
                ? this.config.withCredentials
                : false;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (options.method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

export default HTTPTransport;
