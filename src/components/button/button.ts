import buttonTmpl from './button.tmpl.ts';
import Block from '../block';
import './button.scss';
import { IButtonProps, IButtonPropsAndAttrs } from './types.ts';

export default class Button extends Block<IButtonProps, Record<string, string>> {
    constructor({ props, attrs, events }: IButtonPropsAndAttrs) {
        super(
            'button',
            {
                props,
                attrs: {
                    ...attrs,
                    class: 'button clickable' + (attrs?.class ? attrs.class : ''),
                },
                events: events,
            } );
    }

    public render() {
        return this.compile(buttonTmpl, { ...this._props, ...this._children });
    }
}
