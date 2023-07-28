const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    POST: 'POST',
};

function queryStringify(data: Record<string, any>) {
    let query = '?';
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            query += `${key}=${data[key]}&`;
        }
    }
    query = query.slice(0, query.length - 1);
    return query;
}

type HTTPMethod = (url: string, options?: Record<string, any>) => Promise<unknown>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
    public get: HTTPMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };

    public put: HTTPMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
    };

    public post: HTTPMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
    };

    public delete: HTTPMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
    };

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    public request = (url: string, options: Record<string, any>, timeout = 5000) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            let data;

            if (options.method === METHODS.GET) {
                data = queryStringify(options.data);
                url += data;
            }

            xhr.open(options.method, url);

            for (const header in options.headers) {
                if (options.header.hasOwnProperty(header)) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }

            xhr.onload = () => {
                resolve(xhr);
            };

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
