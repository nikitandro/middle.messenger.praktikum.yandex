import buttonTmpl from './button.tmpl.ts';
import Block from '../block';
import './button.scss';
import { IButtonProps } from './types.ts';
import { IBlockPropsAndAttrs } from '../block/types.ts';

export default class Button extends Block<IButtonProps> {
    constructor(propsAndAttrs: IBlockPropsAndAttrs<IButtonProps>) {
        super('button',
            {
                props: propsAndAttrs.props,
                attrs: {
                    ...propsAndAttrs.attrs,
                    class: 'button' + (propsAndAttrs.attrs?.class ? propsAndAttrs.attrs.class : ''),
                } });
    }

    public render() {
        return this.compile(buttonTmpl, { ...this._props, ...this._children });
    }
}
