import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';

export const API_BASE_URL = 'https://ya-praktikum.tech/api/v2';

export const API_STATIC_URL = API_BASE_URL + '/resources';

const api = new HTTPTransport({
    baseUrl: API_BASE_URL,
    withCredentials: true,
});

export default api;
