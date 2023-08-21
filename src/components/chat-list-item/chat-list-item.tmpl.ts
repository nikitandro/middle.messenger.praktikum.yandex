export default /*hbs*/ `
<div class="chat-list-item__left-part">
    <div class="chat-image"></div>
    <div class="chat-list-item__texts">
        <h2 class="chat-list-item__name">{{title}}</h2>
        {{#if last_message}}
        <div class="chat-list-item__preview">
        <span class="chat-list-item__display-name">{{last_message.user.display_name}}:</span>
        <span class="chat-list-item__content">{{last_message.content}}</span>
        </div>
        {{/if}}
    </div>
</div>
<div class="chat-list-item__right-part">
    <p class="chat-list-item__date">{{formatDateToHoursAndMinutes last_message.time}}</p>
    {{#if (moreThanZero unread_count)}}
    <div class="chat-list-item__new-msg-count">{{unread_count}}</div>
    {{/if}}
</div>
`;
