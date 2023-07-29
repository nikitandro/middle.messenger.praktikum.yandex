export type IEventBusListener = (...args: any[]) => void;

export type IEventBusListeners = Record<string, IEventBusListener[]>;
