import { IEventBusListener, IEventBusListeners } from './types';

export class EventBus {
    private _listeners: IEventBusListeners;

    constructor() {
        this._listeners = {};
    }

    public on(event: string, callback: (...args: any[]) => void) {
        if (!this._listeners[event]) {
            this._listeners[event] = [];
        }

        this._listeners[event].push(callback);
    }

    public off(event: string, callback: IEventBusListener) {
        if (!this._listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this._listeners[event] = this._listeners[event].filter(
            (listener) => listener !== callback
        );
    }

    public emit(event: string, ...args: any[]) {
        if (!this._listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this._listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}
