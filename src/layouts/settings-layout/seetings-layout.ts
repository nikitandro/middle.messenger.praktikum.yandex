import Block from '../../components/block';
import { IBlockInputParams } from '../../components/block/types';
import settingsLayoutTmpl from './settings-layout.tmpl';

export default class SettingsLayout extends Block {
    constructor(inputParams: IBlockInputParams<{ page: Block }>) {
        super('div', {
            ...inputParams,
            attrs: {
                class: 'profile-page',
            },
        });
    }

    protected render(): Node {
        return this.compile(settingsLayoutTmpl, { ...this._props, ...this._children });
    }
}
