import input from '../../components/input';
import button from '../../components/button';
import link from '../../components/link';

// language=handlebars
export default `
    <div class="sign-in">
        <form action="" class="sign-in-form">
            <h1 class="sign-in-form__title">Вход</h1>
            <div class="sign-in-form__inputs">
                ${input('text', 'Логин', 'login')}
                ${input('password', 'Пароль', 'password')}
            </div>
            <div class="sign-in-form__buttons">
                ${button('Авторизоваться')}
                ${link('Нет аккаунта?', '/sign-up')}
            </div>
        </form>
    </div>`;