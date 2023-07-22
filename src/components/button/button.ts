import Handlebars from 'handlebars';
import buttonTmpl from './button.tmpl.ts';
import Block from '../block';
import './button.scss';
import { IButtonProps } from './types.ts';

export default function(text: string) {
    const template = Handlebars.compile(buttonTmpl);

    return template({
        text,
    });
}

export class Button extends Block<IButtonProps> {
    constructor(props: IButtonProps) {
        super('button', props);
    }

    public render() {
        return this.compile(buttonTmpl, { ...this._props, ...this._children } as IButtonProps);
    }
}
