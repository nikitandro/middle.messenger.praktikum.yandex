export default /*hbs*/ `       
        {{#if isAnyChatSelected}}
            {{{addUserToChatModal}}}
            {{{deleteUserFormChatModal}}}
            <div class="chat">
                <header class="chat-header">
                    <div class="chat-header__content">
                        {{{avatar}}}
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
        {{else}}
            <main class="chat-placeholder">
                <p class="chat-placeholder__text">Выберите чат чтобы отправить сообщение</p>
            </main>
        {{/if}}
`;
