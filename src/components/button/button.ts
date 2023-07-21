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

class Button extends Block<IButtonProps> {
    constructor(props: IButtonProps) {
        super('button', props);
    }

    public render(): string {
        const template = Handlebars.compile(buttonTmpl);


        return '';
    }
}
