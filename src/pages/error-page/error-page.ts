import errorPageTmpl from './error-page.tmpl.ts';
import './error-page.scss';
import Handlebars from 'handlebars';
import Block from '../../components/block';
import { IErrorPageInputParams, IErrorPageProps } from './types.ts';
import { IBlockInputParams } from '../../components/block/types.ts';
import Link from '../../components/link';

export default function (statusCode: number, comment: string, linkText: string, linkHref: string) {
    const template = Handlebars.compile(errorPageTmpl);

    return template({ statusCode, comment, linkText, linkHref });
}

export class ErrorPage extends Block<IErrorPageProps> {
    constructor(inputParams: IBlockInputParams<IErrorPageInputParams>) {
        const { props } = inputParams;

        super('div', {
            props: {
                comment: props ? props?.comment : '',
                statusCode: props ? props?.statusCode : 404,
                link: new Link({
                    props: {
                        text: props ? props?.linkText : '',
                    },
                    attrs: {
                        href: props ? props?.linkHref : '',
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
