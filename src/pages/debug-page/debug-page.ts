import Block from '../../components/block/block';
import { Button } from '../../components/button/button';
import debugPageTmpl from './debug-page.tmpl';

export default class DebugPage extends Block<{button: Button}> {
    constructor() {
        super('div');
    }

    protected render() {
        return this.compile(debugPageTmpl, { button: new Button({ text: 'Привет' }) });
    }
}
