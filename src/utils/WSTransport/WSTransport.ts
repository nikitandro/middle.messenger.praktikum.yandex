export default class WSTransport {
    public socket: WebSocket;
    constructor(url: string, config: any) {
        this.socket = new WebSocket(url);
    }
}
