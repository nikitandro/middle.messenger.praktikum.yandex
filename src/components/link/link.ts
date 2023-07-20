import Handlebars from 'handlebars';
import linkTmpl from './link.tmpl.ts';
import './link.scss';

export default function(text: string, href: string, underlined: boolean = false) {
  const template = Handlebars.compile(linkTmpl);

  return template({ text, href, underlined });
}
