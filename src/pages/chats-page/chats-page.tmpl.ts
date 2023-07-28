// language=handlebars
export default /*hbs*/ `
    <aside>
        <div class="side-menu">
            <div class="side-menu__profile-link-container">
                <a href="/profile" class="side-menu__profile-link">Профиль</a>
            </div>
            <form class="search">
                <input type="text" class="search__input" placeholder="Поиск" name="search">
            </form>
            {{{chatList}}}
        </div>
    </aside>
    <main>
        <div class="chat">
            <header class="chat-header">
                <div class="chat-image"></div>
                <h1 class="chat-header__name">Никита</h1>
            </header>
            <div class="chat-body">
                {{{messagesList}}}
            </div>
            {{{chatInputForm}}}
        </div>
    </main>
`;
