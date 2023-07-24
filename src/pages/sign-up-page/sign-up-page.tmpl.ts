// language=handlebars
export default /*hbs*/ `
            <form action="" class="sign-in-form">
                <h1 class="sign-in-form__title">Регистрация</h1>
                <div class="sign-in-form__inputs">
                    {{{ emailInput }}}
                    {{{ loginInput }}}
                    {{{ firstNameInput }}}
                    {{{ secondNameInput }}}
                    {{{ phoneInput }}}
                    {{{ passwordInput }}}
                    {{{ passwordAgainInput }}}
                </div>
                <div class="sign-in-form__buttons">
                    {{{ authButton }}}
                    {{{ linkToSignIn }}}
                </div>
            </form>
`;
