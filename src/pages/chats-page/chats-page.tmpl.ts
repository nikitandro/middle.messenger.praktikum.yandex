// language=handlebars
export default /*hbs*/ `
    <aside>
        <div class="side-menu">
            <div class="side-menu__profile-link-container">
                {{{createChatButton}}}
                {{{profileLink}}}
            </div>
            {{{chatSearchForm}}}
            {{{chatList}}}
        </div>
    </aside>
    <main>
        {{{modal}}}
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
