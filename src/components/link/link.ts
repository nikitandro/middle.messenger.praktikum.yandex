import linkTmpl from './link.tmpl.ts';
import './link.scss';
import Block from '../block';
import { ILinkPropsAndAttrs } from './types.ts';
import useNavigate from '../../utils/useNavigate.ts';

export default class Link extends Block {
    constructor(propsAndAttrs: ILinkPropsAndAttrs) {
        const navigate = useNavigate();
        const { props, attrs, events } = propsAndAttrs;
        super('a', {
            props,
            events: {
                ...events,
                click: (event) => {
                    event.preventDefault();
                    if (props?.to) {
                        navigate.go(props?.to);
                    } else {
                        throw new Error('Link must have a "to" value.');
                    }

                    if (events?.click) {
                        events.click(event);
                    }
                },
            },
            attrs: {
                href: '',
                ...attrs,
                class:
                    [
                        'link',
                        props?.isDanger ? 'link_danger' : '',
                        props?.isUnderlined ? 'link_underlined' : '',
                    ].join(' ') + (attrs?.class ? ' ' + attrs.class : ''),
            },
        });
    }

    protected render(): Node {
        return this.compile(linkTmpl, { ...this._props, ...this._children });
    }
}
