import { XHRResponse } from '../HTTPTransport/types';

export default class HTTPMiddleware {
    public onFulfiled: <T>(config: XHRResponse<T>) => XHRResponse<T>;
    public onError: <T>(config: XHRResponse<T>) => XHRResponse<T>;

    constructor(
        onFulfiled: <T>(config: XHRResponse<T>) => XHRResponse<T>,
        onError: <T>(config: XHRResponse<T>) => XHRResponse<T>,
    ) {
        this.onFulfiled = onFulfiled;
        this.onError = onError;
    }
}
