import EventBus from '../../helpers/event-bus';
import { StoreEvents } from './events';
import set from '../set';

class Store extends EventBus {
    private _state: Record<string, any> = {};

    constructor() {
        super();
        this.emit(StoreEvents.Created);
    }

    public getState() {
        return this._state;
    }

    public set(path: string, value: unknown) {
        set(this._state, path, value);
        this.emit(StoreEvents.Updated);
    }
}

export default new Store();
