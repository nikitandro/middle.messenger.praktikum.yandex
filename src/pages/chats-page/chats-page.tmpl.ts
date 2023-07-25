import clipIcon from '../../assets/icons/clip-icon.svg';
import arrowInCircleRight from '../../assets/icons/arrow-in-circle-right.svg';

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
            <ul class="chat-list">
            <li class="chat-list-item">
                    <div class="chat-list-item__left-part">
                        <div class="chat-image"></div>
                        <div class="chat-list-item__texts">
                            <h2 class="chat-list-item__name">Никита</h2>
                            <p class="chat-list-item__content">Что-то</p>
                        </div>
                    </div>
                    <div class="chat-list-item__right-part">
                        <p class="chat-list-item__date">10:49</p>
                        <div class="chat-list-item__new-msg-count">2</div>
                    </div>
                </li>
                <li class="chat-list-item">
                    <div class="chat-list-item__left-part">
                        <div class="chat-image"></div>
                        <div class="chat-list-item__texts">
                            <h2 class="chat-list-item__name">Никита</h2>
                            <p class="chat-list-item__content">Что-то</p>
                        </div>
                    </div>
                    <div class="chat-list-item__right-part">
                        <p class="chat-list-item__date">10:49</p>
                        <div class="chat-list-item__new-msg-count">2</div>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
    <main>
        <div class="chat">
            <header class="chat-header">
                <div class="chat-image"></div>
                <h1 class="chat-header__name">Никита</h1>
            </header>
            <div class="chat-body">
                <ul class="message-list">
                    <li class="message-list-item message-list-item_incoming">
                        <div class="message-list-item__text-container">
                            <p class="message-list-item__text">
                                Привет! Смотри, тут всплыл интересный кусок лунной
                                космической истории — НАСА в какой-то момент попросила Хассельблад 
                                адаптировать модель
                                SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и
                                к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как
                                астронавты с собой забрали только кассеты с пленкой.

                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                                так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                                на аукционе за 45000 евро.</p>
                        </div>
                    </li>
                    <li class="message-list-item message-list-item_incoming">
                        <div class="message-list-item__text-container">
                            <p class="message-list-item__text">Привет! Смотри, тут всплыл интересный кусок лунной
                                космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель
                                SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и
                                к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как
                                астронавты с собой забрали только кассеты с пленкой.

                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                                так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                                на аукционе за 45000 евро.</p>
                        </div>
                    </li>
                    <li class="message-list-item message-list-item_incoming">
                        <div class="message-list-item__text-container">
                            <p class="message-list-item__text">Привет! Смотри, тут всплыл интересный кусок лунной
                                космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель
                                SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и
                                к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как
                                астронавты с собой забрали только кассеты с пленкой.

                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                                так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                                на аукционе за 45000 евро.</p>
                        </div>
                    </li>
                    <li class="message-list-item message-list-item_incoming">
                        <div class="message-list-item__text-container">
                            <p class="message-list-item__text">Привет! Смотри, тут всплыл интересный кусок лунной
                                космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель
                                SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и
                                к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как
                                астронавты с собой забрали только кассеты с пленкой.

                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                                так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                                на аукционе за 45000 евро.</p>
                        </div>
                    </li>
                    <li class="message-list-item message-list-item_incoming">
                        <div class="message-list-item__text-container">
                            <p class="message-list-item__text">Привет! Смотри, тут всплыл интересный кусок лунной
                                космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель
                                SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и
                                к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как
                                астронавты с собой забрали только кассеты с пленкой.

                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                                так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                                на аукционе за 45000 евро.</p>
                        </div>
                    </li>
                    <li class="message-list-item message-list-item_incoming">
                        <div class="message-list-item__text-container">
                            <p class="message-list-item__text">Привет! Смотри, тут всплыл интересный кусок лунной
                                космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель
                                SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и
                                к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как
                                астронавты с собой забрали только кассеты с пленкой.

                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                                так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                                на аукционе за 45000 евро.</p>
                        </div>
                    </li>
                    <li class="message-list-item message-list-item_outgoing">
                        <div class="message-list-item__text-container">
                            <p class="message-list-item__text">Круто!</p>
                        </div>
                    </li>
                </ul>
            </div>
            <form class="chat-input">
                <button class="chat-input__clip-button"><img src="${clipIcon}" alt=""/></button>
                <input class="chat-input__input" placeholder="Сообщение" name="message">
                <button class="chat-input__send-button"><img src="${arrowInCircleRight}" alt=""></button>
            </form>
        </div>
    </main>
`;
