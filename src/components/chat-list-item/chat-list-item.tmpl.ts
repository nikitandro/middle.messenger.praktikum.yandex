export default /*hbs*/ `
<div class="chat-list-item__left-part">
    <div class="chat-image"></div>
    <div class="chat-list-item__texts">
        <h2 class="chat-list-item__name">{{title}}</h2>
        <p class="chat-list-item__content">{{last_message.content}}</p>
    </div>
</div>
<div class="chat-list-item__right-part">
    <p class="chat-list-item__date">{{formatDateToHoursAndMinutes last_message.time}}</p>
    <div class="chat-list-item__new-msg-count">{{unread_count}}</div>
</div>
`;
