import leftArrowIcon from '../../assets/icons/arrow-in-circle-left.svg';
// language=handlebars
export default /*hbs*/ `
            <div class="profile-page__go-back-area"><img src="${leftArrowIcon}" alt=""></div>
            <div class="profile-page__profile">
                <form class="profile">
                    {{{avatarInput}}}
                    <h1 class="profile__first-name">{{profile.first_name}}</h1>
                    <ul class="profile__data profile-list">
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Почта</h2>
                            <input class="profile-list-item__value profile-list-item__input" value="{{profile.email}}"
                                   name="email">
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Логин</h2>
                            <input class="profile-list-item__value profile-list-item__input" value="{{profile.login}}"
                                   name="login">
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Имя</h2>
                            <input class="profile-list-item__value profile-list-item__input"
                                   value="{{profile.first_name}}" name="first_name">
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Фамилия</h2>
                            <input class="profile-list-item__value profile-list-item__input"
                                   value="{{profile.second_name}}" name="second_name">
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Имя в чате</h2>
                            <input class="profile-list-item__value profile-list-item__input"
                                   value="{{profile.first_name}}" name="display_name">
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Телефон</h2>
                            <input class="profile-list-item__value profile-list-item__input" value="{{profile.phone}}"
                                   name="phone">
                        </li>
                    </ul>
                    {{{saveButton}}}
                </form>
            </div>
`;
