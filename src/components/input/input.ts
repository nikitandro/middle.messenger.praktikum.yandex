import Handlebars from 'handlebars';
import inputTmpl from './input.tmpl.ts';
import './input.scss';
import Block from '../block';
import { IInputProps, IInputPropsAndAttrs } from './types.ts';

export default function(type: string, placeholder: string, name: string) {
    const template = Handlebars.compile(inputTmpl);

    return template({
        type,
        placeholder,
        name,
    });
}

export class Input extends Block<IInputProps> {
    constructor(propsAndAttrs: IInputPropsAndAttrs) {
        super('div',
            {
                props: propsAndAttrs.props,
                attrs: {
                    ...propsAndAttrs.attrs,
                    class: 'input-container' +
                           (propsAndAttrs.attrs?.class ? propsAndAttrs.attrs.class : ''),
                },
            });
    }

    protected render(): Node {
        return this.compile(inputTmpl, { ...this._props, ...this._children });
    }
}
