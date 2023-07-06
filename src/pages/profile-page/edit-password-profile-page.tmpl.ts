import button from '../../components/button';
import leftArrowIcon from '../../assets/icons/arrow-in-circle-left.svg'

// language=handlebars

export default `
    <main>
        <div class="profile-page">
            <div class="profile-page__go-back-area"><img src="${leftArrowIcon}" alt=""></div>
            <div class="profile-page__profile">
                <form class="profile">
                    <div class="profile__avatar"></div>
                    <h1 class="profile__first-name">{{profile.first_name}}</h1>
                    <ul class="profile__data profile-list">
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Старый пароль</h2>
                            <input class="profile-list-item__value profile-list-item__input" type="password"
                                   name="oldPassword">
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Новый пароль</h2>
                            <input class="profile-list-item__value profile-list-item__input" type="password"
                                   name="newPassword">
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Повторите новый пароль</h2>
                            <input class="profile-list-item__value profile-list-item__input" type="password"
                                   name="newPassword">
                        </li>
                    </ul>
                    ${button('Сохранить')}
                </form>
            </div>
        </div>
    </main>`;