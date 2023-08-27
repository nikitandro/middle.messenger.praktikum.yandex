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
        {{{createChatModal}}}
    </aside>

        {{{chat}}}
    
`;
