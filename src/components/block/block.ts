import { BlockLifeCycleEvents, IBlockMetaData } from './types';
import EventBus from '../../helpers/event-bus';

export class Block<TProps extends Record<string, any>> {
  _element: HTMLElement;
  _meta: IBlockMetaData;
  props: TProps;
  eventBus: () => EventBus;

  constructor(tagName: string = 'div', props: TProps = {} as TProps) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._element = document.createElement(tagName);

    this._registerEvents(eventBus);
    eventBus.emit(BlockLifeCycleEvents.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(BlockLifeCycleEvents.INIT, this.init.bind(this));
    eventBus.on(BlockLifeCycleEvents.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(BlockLifeCycleEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(BlockLifeCycleEvents.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this._render();
  }

  _componentDidMount(oldProps: TProps) {
    this.componentDidMount(oldProps);
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(oldProps: TProps) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(BlockLifeCycleEvents.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps: TProps, newProps: TProps) {
    return true;
  }

  setProps = (nextProps: TProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element.innerHTML = block;
  }

  // Может переопределять пользователь, необязательно трогать
  render() {
    return '';
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: TProps) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        const oldProps = self.props;
        const result = Reflect.set(target, prop, value, receiver);
        if (result) {
          self.eventBus().emit(BlockLifeCycleEvents.FLOW_CDU, { ...oldProps }, self.props);
        }
        return result;
      },
      deleteProperty() {
        throw Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
