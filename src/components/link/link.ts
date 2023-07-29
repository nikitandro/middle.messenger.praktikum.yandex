import linkTmpl from './link.tmpl.ts';
import './link.scss';
import Block from '../block';
import { ILinkPropsAndAttrs } from './types.ts';

export default class Link extends Block {
    constructor(propsAndAttrs: ILinkPropsAndAttrs) {
        const { props, attrs, events } = propsAndAttrs;
        super('a', {
            props,
            events,
            attrs: {
                href: '',
                ...attrs,
                class: [
                    'link',
                    props?.isDanger ? 'link_danger' : '',
                    props?.isUnderlined ? 'link_underlined' : '',
                ].join(' ') +
            (attrs?.class ? ' ' + attrs.class : ''),
            } });
    }

    protected render(): Node {
        return this.compile(linkTmpl, { ...this._props, ...this._children });
    }
}
