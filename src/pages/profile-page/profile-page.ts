import './profile-page.scss';
import profilePageTmpl from './profile-page.tmpl.ts';
import Handlebars from 'handlebars';
import editProfilePageTmpl from './edit-profile-page.tmpl.ts';
import editPasswordProfilePageTmpl from './edit-password-profile-page.tmpl.ts';

export default function(type: 'profile' | 'edit-data' | 'edit-password') {
  let template;

  switch (type) {
    case 'profile':
      template = Handlebars.compile(profilePageTmpl);
      break;
    case 'edit-data':
      template = Handlebars.compile(editProfilePageTmpl);
      break;
    case 'edit-password':
      template = Handlebars.compile(editPasswordProfilePageTmpl);
      break;
  }

  const profile: {
        first_name: string,
        second_name: string,
        email: string,
        phone: string,
        login: string
    } = {
      first_name: 'Никита',
      email: 'nik.vish.93@mail.ru',
      login: 'nikitandro',
      phone: '+79193813732',
      second_name: 'Вишняков',
    };

  return template({profile});
}
