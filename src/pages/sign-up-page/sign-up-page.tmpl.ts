import input from '../../components/input';
import button from '../../components/button';
import link from '../../components/link';


// language=handlebars
export default `
    <main>
        <div class="sign-in">
            <form action="" class="sign-in-form">
                <h1 class="sign-in-form__title">Регистрация</h1>
                <div class="sign-in-form__inputs">
                    ${input('email', 'Почта', 'email')}
                    ${input('text', 'Логин', 'login')}
                    ${input('text', 'Имя', 'first_name')}
                    ${input('text', 'Фамилия', 'second_name')}
                    ${input('phone', 'Телефон', 'phone')}
                    ${input('password', 'Пароль', 'password')}
                    ${input('password', 'Пароль (ещё раз)', 'password')}
                </div>
                <div class="sign-in-form__buttons">
                    ${button('Зарегистрироваться')}
                    ${link('Войти', '/sign-in')}
                </div>
            </form>
        </div>
    </main>`;
