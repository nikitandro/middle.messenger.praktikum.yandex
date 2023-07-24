import Block from '../../components/block/block';
import { Button } from '../../components/button/button';
import debugPageTmpl from './debug-page.tmpl';
import { Input } from '../../components/input/input.ts';
import { Link } from '../../components/link/link.ts';

const button = new Button({ props: { text: 'Привет' }, events: {
    click: (event) => {
        console.log(event.target);
    },
} });
const input = new Input({ props: { name: 'debug', type: 'text', placeholder: 'Привет' } });
const link = new Link({ props: { text: 'Привет', isUnderlined: true } } );

export default class DebugPage extends Block {
    constructor() {
        super(
            'div',
            {
                props: {
                    button: button,
                    input: input,
                    link: link,
                },
                attrs: {
                    style: 'display: flex; flex-direction: column; gap: 20px; align-items: center;',
                },
            });
    }

    protected render() {
        return this.compile(debugPageTmpl, this._props);
    }
}

// @ts-ignore
window.button = button;
// @ts-ignore
window.input = input;
// @ts-ignore
window.link = link;
