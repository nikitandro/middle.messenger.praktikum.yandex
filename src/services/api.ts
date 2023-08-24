import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';

export const API_BASE_URL = 'https://ya-praktikum.tech/api/v2';

export const API_DOMAIN = 'ya-praktikum.tech';

export const API_NO_PROTOCOL_URL = 'ya-praktikum.tech/api/v2';

export const API_STATIC_URL = API_BASE_URL + '/resources';

export const createResourceURL = (uri: string) => {
    return API_STATIC_URL + uri;
};

const api = new HTTPTransport({
    baseUrl: API_BASE_URL,
    withCredentials: true,
});

export default api;
