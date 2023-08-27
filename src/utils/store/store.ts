import EventBus from '../../helpers/event-bus';
import { StoreEvents } from './events';
import set from '../set';

class Store extends EventBus {
    private _state: Record<string, any> = {};
    private static _instance?: Store;

    constructor() {
        if (Store._instance) {
            return Store._instance;
        }
        super();
        Store._instance = this;
    }

    public getState() {
        return this._state;
    }

    public set(path: string, value: unknown) {
        set(this._state, path, value);
        this.emit(StoreEvents.Updated);
    }
}

export default Store;
