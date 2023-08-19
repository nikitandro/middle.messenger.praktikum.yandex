import Block from '../block';
import modalTmpl from './modal.tmpl';
import './modal.scss';

export default class Modal extends Block {
    public isOpen: boolean = false;

    constructor(inputParams: { content: Block }) {
        const click = inputParams.content._events.click;
        inputParams.content.setProps({
            events: {
                click: (e) => {
                    e.stopPropagation();
                    click && click(e);
                },
            },
        });
        super('div', {
            props: {
                content: inputParams.content,
            },
            attrs: {
                class: 'modal',
            },
            events: {
                click: () => {
                    this.toggleOpen();
                },
            },
        });
        this.hide();
    }

    public toggleOpen() {
        if (this.isOpen) {
            this.hide();
        } else {
            this.show();
        }
        this.isOpen = !this.isOpen;
    }

    protected render(): Node {
        return this.compile(modalTmpl, { ...this._props, ...this._children });
    }
}
