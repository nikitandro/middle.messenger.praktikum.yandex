import Handlebars from 'handlebars';
import chatsPageTmpl from './chats-page.tmpl.ts';
import './chats-page.scss';

export default function () {
    const template = Handlebars.compile(chatsPageTmpl);

    return template({});
}
