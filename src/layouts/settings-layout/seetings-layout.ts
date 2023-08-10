import Block from '../../components/block';
import { IBlockInputParams } from '../../components/block/types';
import GoBackArea from '../../components/go-back-area';
import settingsLayoutTmpl from './settings-layout.tmpl';

export default class SettingsLayout extends Block {
    constructor({ props, attrs }: IBlockInputParams<{ page: Block }>) {
        super('div', {
            props: { ...props, goBackArea: new GoBackArea() },
            attrs: {
                class: 'profile-page',
            },
        });
    }

    protected render(): Node {
        return this.compile(settingsLayoutTmpl, { ...this._props, ...this._children });
    }
}
