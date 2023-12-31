import errorPageTmpl from './error-page.tmpl.ts';
import './error-page.scss';
import Block from '../../components/block';
import { IErrorPageInputParams, IErrorPageProps } from './types.ts';
import { IBlockInputParams } from '../../components/block/types.ts';
import Link from '../../components/link';

export default class ErrorPage extends Block<IErrorPageProps> {
    constructor(inputParams: IBlockInputParams<IErrorPageInputParams>) {
        const { props } = inputParams;

        super('div', {
            props: {
                comment: props ? props?.comment : '',
                statusCode: props ? props?.statusCode : 404,
                link: new Link({
                    props: {
                        text: props ? props?.linkText : '',
                        to: props ? props?.linkTo : '',
                    },
                }),
            },
            attrs: {
                class: 'error-page',
            },
        });
    }

    protected render(): Node {
        return this.compile(errorPageTmpl, { ...this._props, ...this._children });
    }
}
