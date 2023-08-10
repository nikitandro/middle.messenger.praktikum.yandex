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
const link = new Link({ props: { content: 'Привет', isUnderlined: true } });

export default class DebugPage extends Block {
    constructor() {
        super('div', {
            props: {
                button: button,
                input: input,
                link: link,
                links: [
                    new Link({ props: { content: 'Привет' } }),
                    new Link({ props: { content: 'Привет' } }),
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
