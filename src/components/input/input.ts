import Handlebars from 'handlebars';
import inputTmpl from './input.tmpl.ts';
import './input.scss';

export default function(type: string, label: string, name: string) {
    const template = Handlebars.compile(inputTmpl);

    return template({
        type,
        label,
        name,
    });
}
