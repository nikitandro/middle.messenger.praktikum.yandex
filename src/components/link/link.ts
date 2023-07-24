import Handlebars from 'handlebars';
import linkTmpl from './link.tmpl.ts';
import './link.scss';
import Block from '../block';
import { ILinkPropsAndAttrs } from './types.ts';

export default function(text: string, href: string, underlined: boolean = false) {
    const template = Handlebars.compile(linkTmpl);

    return template({ text, href, underlined });
}

export class Link extends Block {
    constructor(propsAndAttrs: ILinkPropsAndAttrs) {
        const { props, attrs, events } = propsAndAttrs;
        super('a', { props, events, attrs: {
            href: '',
            ...attrs,
            class: 'link' + (propsAndAttrs.attrs?.class ? propsAndAttrs.attrs.class : ''),
        } });
    }

    protected render(): Node {
        return this.compile(linkTmpl, { ...this._props, ...this._children });
    }
}
