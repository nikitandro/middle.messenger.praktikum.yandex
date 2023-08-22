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
        {{{createChatModal}}}
        {{{addUserToChatModal}}}
        <div class="chat">
            <header class="chat-header">
                <div class="chat-header__content">
                    <div class="chat-image"></div>
                    <h1 class="chat-header__name">{{currentChat.title}}</h1>
                </div>
                <ul class="chat-header-actions">
                    <li class="chat-header-actions-item">
                        {{{menuButton}}}
                        <div class="chat-header-actions-item__content">
                            {{{chatMenu}}}  
                        </div>
                    </li>
                </ul>
            </header>
            <div class="chat-body">
                {{{messagesList}}}
            </div>
            {{{chatInputForm}}}
        </div>
    </main>
`;
