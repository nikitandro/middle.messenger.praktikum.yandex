import { BlockLifeCycleEvents, IBlockMetaData } from './types';
import EventBus from '../../helpers/event-bus';
import { v4 as makeUUID } from 'uuid';

export default class Block<IBlockPropsAndChildren extends Record<string, any>> {
    public props: Record<string, any>;
    public children: Record<string, Block<any>>;
    public id: string;
    private _element: HTMLElement;
    private _meta: IBlockMetaData;
    private _setUpdate: boolean;

    public eventBus: () => EventBus;

    constructor(tagName: keyof HTMLElementTagNameMap = 'div',
        propsAndChildren: IBlockPropsAndChildren = {} as IBlockPropsAndChildren) {
        const eventBus = new EventBus();

        const { children, props } = this._getChildren(propsAndChildren);

        this.children = this._makePropsProxy(children);

        this._setUpdate = false;

        this.id = makeUUID();

        this._meta = {
            tagName,
            props: props,
            children: children,
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._element = document.createElement(tagName);

        this._registerEvents(eventBus);
        eventBus.emit(BlockLifeCycleEvents.INIT);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(BlockLifeCycleEvents.INIT, this.init.bind(this));
        eventBus.on(BlockLifeCycleEvents.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(BlockLifeCycleEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(BlockLifeCycleEvents.FLOW_RENDER, this._render.bind(this));
    }

    private _getChildren(propsAndChildren: IBlockPropsAndChildren) {
        const children: Record<string, Block<any>> = {};
        const props: Record<string, any> = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    private _addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((event) => {
            this._element.addEventListener(event, events[event]);
        });
    }

    private createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    public init() {
        this.createResources();
        this._render();
    }

    private _componentDidMount(oldProps: IBlockPropsAndChildren) {
        this.componentDidMount(oldProps);
    }

    // Может переопределять пользователь, необязательно трогать
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public componentDidMount(oldProps: IBlockPropsAndChildren) {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(BlockLifeCycleEvents.FLOW_CDM);
    }

    private _componentDidUpdate(
        oldProps: IBlockPropsAndChildren,
        newProps: IBlockPropsAndChildren
    ) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this.eventBus().emit(BlockLifeCycleEvents.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public componentDidUpdate(oldProps: IBlockPropsAndChildren, newProps: IBlockPropsAndChildren) {
        return true;
    }

    public setProps = (newProps: IBlockPropsAndChildren) => {
        if (!newProps) {
            return;
        }

        this._setUpdate = false;
        const oldValue = { ...this.props };

        const { children, props } = this._getChildren(newProps);

        if (Object.values(children).length) {
            Object.assign(this.children, children);
        }

        if (Object.values(props).length) {
            Object.assign(this.props, props);
        }

        if (this._setUpdate) {
            this.eventBus().emit(BlockLifeCycleEvents.FLOW_CDU, oldValue, this.props);
            this._setUpdate = false;
        }
    };

    public get element() {
        return this._element;
    }

    public compile(template: string, props: IBlockPropsAndChildren) {
        const propsAndStubs: Record<string, any> = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
        });

        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this.children).forEach((child) => {
            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

            stub?.replaceWith(child.getContent());
        });

        return Handlebars.compile(template, propsAndStubs);
    }

    private _render() {
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        this._element.innerHTML = block;

        this._addEvents();
    }

    // Может переопределять пользователь, необязательно трогать
    public render() {
        return '';
    }

    public getContent() {
        return this.element;
    }

    private _makePropsProxy(props: Record<string, any>) {
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

    private _createDocumentElement<K extends keyof HTMLElementTagNameMap>(tagName: K) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    public show() {
        this.getContent().style.display = 'block';
    }

    public hide() {
        this.getContent().style.display = 'none';
    }
}
