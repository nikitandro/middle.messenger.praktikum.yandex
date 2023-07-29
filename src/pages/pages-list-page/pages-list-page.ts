import Handlebars from 'handlebars';
import pagesListPageTmpl from './pages-list-page.tmpl.ts';
import './pages-list-page.scss';

export default function() {
    const template = Handlebars.compile(pagesListPageTmpl);
    return template({});
}
