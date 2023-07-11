import Handlebars from 'handlebars';
import buttonTmpl from './button.tmpl.ts';
import './button.scss';

export default function(text: string) {
  const template = Handlebars.compile(buttonTmpl);

  return template({
    text,
  });
}
