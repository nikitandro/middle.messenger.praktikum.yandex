import {
    BlockLifeCycleEvents,
    IBlockAttributes,
    IBlockEvents,
    IBlockMetaData,
    IBlockInputParams,
} from './types';
import EventBus from '../../helpers/event-bus';
import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';

export default class Block<
    TProps extends Record<string, any> = Record<string, any>,
    TAttrs extends IBlockAttributes = IBlockAttributes,
> {
    public readonly id: string;
    protected _props: Record<string, any>;
    protected _children: Record<string, Block<any, any> | Block<any, any>[]>;
    protected _element: HTMLElement;
    protected _meta: IBlockMetaData;
    protected _setUpdate: boolean;
    protected _attrs: TAttrs | Record<string, string | number | boolean>;
    protected _events: IBlockEvents;

    public eventBus: () => EventBus;

    constructor(
        tagName: keyof HTMLElementTagNameMap = 'div',
        propsAndChildren: IBlockInputParams<TProps, TAttrs> = {},
    ) {
        const eventBus = new EventBus();

        const { children, props } = this._getChildren(propsAndChildren.props ?? {});
        const attrs = propsAndChildren.attrs;
        const events = propsAndChildren.events;

        this._meta = {
            tagName,
            props: props,
            children: children,
            attrs: attrs,
            events: events,
        };

        this._props = this._makePropsProxy(props);
        this._children = this._makePropsProxy(children);
        this._attrs = this._makePropsProxy(attrs ?? {});
        this._events = this._makePropsProxy(events ?? {});
        this.eventBus = () => eventBus;
        this._setUpdate = false;
        this.id = makeUUID();

        this._element = document.createElement(tagName);

        this._registerEvents(eventBus);
        eventBus.emit(BlockLifeCycleEvents.INIT);
    }

    protected _registerEvents(eventBus: EventBus) {
        eventBus.on(BlockLifeCycleEvents.INIT, this.init.bind(this));
        eventBus.on(BlockLifeCycleEvents.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(BlockLifeCycleEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(BlockLifeCycleEvents.FLOW_RENDER, this._render.bind(this));
    }

    protected _getChildren(propsAndChildren: TProps | {}) {
        const children: Record<string, Block<any, any> | Block<any, any>[]> = {};
        const props: Record<string, any> = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else if (Array.isArray(value)) {
                const finalChildren: Block<any, any>[] = [];
                Object.values(value).forEach((innerValue) => {
                    if (innerValue instanceof Block) {
                        finalChildren.push(innerValue);
                    }
                });
                children[key] = finalChildren;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    protected _addEvents() {
        const events = this._events;

        Object.keys(events).forEach((event) => {
            // Здесь висит ts-ignore потому что ключи не имеют нужного типа
            //@ts-ignore
            this._element.addEventListener(event, events[event]);
        });
    }

    protected _removeEvents() {
        const events = this._events;

        if (!events) {
            return;
        }

        Object.keys(events).forEach((event) => {
            // Здесь висит ts-ignore потому что ключи не имеют нужного типа
            //@ts-ignore
            this._element.removeEventListener(event, events[event]);
        });
    }

    protected _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    public init() {
        this._createResources();
        this.eventBus().emit(BlockLifeCycleEvents.FLOW_RENDER);
    }

    protected _componentDidMount(oldProps: IBlockInputParams<TProps, TAttrs>) {
        this.componentDidMount(oldProps);

        Object.values(this._children).forEach((child) => {
            if (Array.isArray(child)) {
                Object.values(child).forEach((child) => {
                    child.dispatchComponentDidMount();
                });
                return;
            }
            child.dispatchComponentDidMount();
        });
    }

    // Может переопределять пользователь, необязательно трогать
    public componentDidMount(oldProps: IBlockInputParams<TProps, TAttrs>) {
        oldProps && '';
    }

    public dispatchComponentDidMount() {
        this.eventBus().emit(BlockLifeCycleEvents.FLOW_CDM);
    }

    protected _componentDidUpdate(
        oldProps: IBlockInputParams<TProps, TAttrs>,
        newProps: IBlockInputParams<TProps, TAttrs>,
    ) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this.eventBus().emit(BlockLifeCycleEvents.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    protected componentDidUpdate(
        oldProps: IBlockInputParams<TProps, TAttrs>,
        newProps: IBlockInputParams<TProps, TAttrs>,
    ) {
        oldProps && '';
        newProps && '';
        return true;
    }

    public setProps = (newProps: Partial<IBlockInputParams<TProps, TAttrs>>) => {
        if (!newProps) {
            return;
        }

        this._setUpdate = false;
        const oldValue = { ...this._props };

        const { children, props } = this._getChildren(newProps.props ?? {});
        const attrs = newProps.attrs;
        const events = newProps.events;

        if (Object.values(children).length) {
            Object.assign(this._children, children);
        }

        if (Object.values(props).length) {
            Object.assign(this._props, props);
        }

        if (attrs && Object.values(attrs).length) {
            Object.assign(this._attrs, attrs);
        }

        if (events && Object.values(events).length) {
            Object.assign(this._events, events);
        }

        if (this._setUpdate) {
            this.eventBus().emit(BlockLifeCycleEvents.FLOW_CDU, oldValue, this._props);
            this._setUpdate = false;
        }
    };

    public get element() {
        return this._element;
    }

    public compile(template: string, props: IBlockInputParams<TProps, TAttrs>) {
        const propsAndStubs: Record<string, any> = { ...props };

        Object.entries(this._children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                propsAndStubs[key] = '';
                Object.values(child).forEach((value) => {
                    propsAndStubs[key] += `<div data-id="${value.id}"></div>`;
                });
                return;
            }

            propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
        });

        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this._children).forEach((child) => {
            if (Array.isArray(child)) {
                Object.values(child).forEach((value) => {
                    const stub = fragment.content.querySelector(`[data-id="${value.id}"]`);
                    stub?.replaceWith(value.getContent());
                });

                return;
            }

            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

            stub?.replaceWith(child.getContent());
        });

        this._attrs &&
            Object.keys(this._attrs).forEach((key) => {
                this._element.setAttribute(key, this._attrs[key].toString());
            });

        return fragment.content;
    }

    protected _render() {
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду

        this._removeEvents();
        this._element.innerHTML = '';
        this._element.appendChild(block);
        this._addEvents();
    }

    // Может переопределять пользователь, необязательно трогать
    protected render(): Node {
        return document.createElement('template');
    }

    public getContent() {
        return this.element;
    }

    protected _makePropsProxy<T extends Record<string, any>>(props: T) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop, receiver) {
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                const oldValue = Reflect.get(target, prop, receiver);
                let result = false;
                if (oldValue !== value) {
                    result = Reflect.set(target, prop, value, receiver);
                    self._setUpdate = true;
                }
                return result;
            },
            deleteProperty() {
                throw Error('Нет доступа');
            },
        });
    }

    private _createDocumentElement<T extends keyof HTMLElementTagNameMap>(tagName: T) {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this.id);
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return element;
    }

    public show() {
        this.getContent().style.display = 'block';
    }

    public hide() {
        this.getContent().style.display = 'none';
    }
}
