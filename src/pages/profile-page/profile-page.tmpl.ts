import leftArrowIcon from '../../assets/icons/arrow-in-circle-left.svg';
// language=handlebars
export default `
    <main>
        <div class="profile-page">
            <div class="profile-page__go-back-area"><img src="${leftArrowIcon}" alt=""></div>
            <div class="profile-page__profile">
                <form class="profile">
                    <input type="file" class="profile__avatar">
                    <h1 class="profile__first-name">{{profile.first_name}}</h1>
                    <ul class="profile__data profile-list">
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Почта</h2>
                            <p class="profile-list-item__value">{{profile.email}}</p>
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Логин</h2>
                            <p class="profile-list-item__value">{{profile.login}}</p>
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Имя</h2>
                            <p class="profile-list-item__value">{{profile.first_name}}</p>
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Фамилия</h2>
                            <p class="profile-list-item__value">{{profile.second_name}}</p>
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Имя в чате</h2>
                            <p class="profile-list-item__value">{{profile.first_name}}</p>
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Телефон</h2>
                            <p class="profile-list-item__value">{{profile.phone}}</p>
                        </li>
                    </ul>
                    <ul class="profile__actions profile-list">
                        <li class="profile-list-item"><a href="/profile-edit" class="link">Изменить данные</a></li>
                        <li class="profile-list-item"><a href="/profile-edit-password" class="link">Изменить пароль</a></li>
                        <li class="profile-list-item"><a href="/" class="link link_warning">Выйти</a></li>
                    </ul>
                </form>
            </div>
        </div>
    </main>
`;
