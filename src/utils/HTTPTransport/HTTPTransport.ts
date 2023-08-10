import { HTTPMethod, HTTPRequest, IHTTPTransportConfigOptions, METHODS } from './types';
import queryStringify from '../queryStringify';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
    public readonly config: IHTTPTransportConfigOptions;

    public static defaultTimeout = 5000;

    constructor(config: IHTTPTransportConfigOptions) {
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

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
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
            }

            xhr.open(options.method, url);

            for (const header in options.headers) {
                if (options.headers.hasOwnProperty(header)) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }

            xhr.onload = () => {
                resolve(xhr);
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
