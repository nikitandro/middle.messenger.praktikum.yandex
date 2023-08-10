import useNavigate from '../../utils/useNavigate';
import Block from '../block';
import './go-back-area.scss';
import goBackAreaTmpl from './go-back-area.tmpl';

export default class GoBackArea extends Block {
    constructor() {
        const navigate = useNavigate();
        super('button', {
            attrs: {
                class: 'go-back-area',
            },
            events: {
                click: () => {
                    navigate.back();
                },
            },
        });
    }

    protected render(): Node {
        return this.compile(goBackAreaTmpl, { ...this._props, ...this._children });
    }
}
