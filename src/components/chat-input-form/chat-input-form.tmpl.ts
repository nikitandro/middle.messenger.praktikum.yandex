import clipIcon from '../../assets/icons/clip-icon.svg';
import arrowInCircleRight from '../../assets/icons/arrow-in-circle-right.svg';

export default /*hbs*/ `
    <button class="chat-input-form__clip-button"><img src="${clipIcon}" alt=""/></button>
    {{!-- <input class="chat-input-form__input" placeholder="Сообщение" name="message"> --}}
    {{{input}}}
    <button class="chat-input-form__send-button"><img src="${arrowInCircleRight}" alt=""></button>
`;
