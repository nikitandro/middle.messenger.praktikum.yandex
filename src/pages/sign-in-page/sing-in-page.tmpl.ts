// language=handlebars
export default /*hbs*/ `
            <form class="sign-in-form">
                <h1 class="sign-in-form__title">Вход</h1>
                <div class="sign-in-form__inputs">
                    {{{ loginInput }}}
                    {{{ passwordInput }}}
                </div>
                <div class="sign-in-form__buttons">
                    {{{ authButton }}}
                    {{{ linkToSignUp }}}
                </div>
            </form>
`;
