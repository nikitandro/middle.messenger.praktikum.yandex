import errorPageTmpl from './error-page.tmpl.ts';
import './error-page.scss';
import Handlebars from 'handlebars';

export default function(statusCode: number, comment: string, linkText: string, linkHref: string) {
    const template = Handlebars.compile(errorPageTmpl);

    return template({ statusCode, comment, linkText, linkHref });
}
