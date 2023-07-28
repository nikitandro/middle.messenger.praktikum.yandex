import Block from '../../components/block';
import Button from '../../components/button';
import debugPageTmpl from './debug-page.tmpl';
import Input from '../../components/input';
import Link from '../../components/link';

const button = new Button({
    props: { content: 'Привет' },
    events: {
        click: (event) => {
            console.log(event.target);
        },
    },
});
const input = new Input({ props: { name: 'debug', type: 'text', placeholder: 'Привет' } });
const link = new Link({ props: { text: 'Привет', isUnderlined: true } });

export default class DebugPage extends Block {
    constructor() {
        super('div', {
            props: {
                button: button,
                input: input,
                link: link,
                links: [
                    new Link({ props: { text: 'Привет' } }),
                    new Link({ props: { text: 'Привет' } }),
                ],
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
