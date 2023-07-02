import input from '../../components/input/index.ts';

// language=handlebars
export default `
    <div class="sign-in">
        <form action="" class="sign-in__form">
            <h1 class="sign-in__form-title">Вход</h1>
            <div class="sign-in__form-inputs">
                ${input('text', 'Логин', 'login')}
                ${input('password', 'Пароль', 'password')}
            </div>
        </form>
    </div>`;