import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';

const api = new HTTPTransport({
    baseUrl: 'https://ya-praktikum.tech/api/v2',
    withCredentials: true,
});

export default api;
