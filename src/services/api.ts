import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';

export default new HTTPTransport({
    baseUrl: 'https://ya-praktikum.tech/api/v2',
    withCredentials: true,
});
