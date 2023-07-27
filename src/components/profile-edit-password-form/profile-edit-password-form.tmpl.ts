export default /*hbs*/ `
                    {{{avatarInput}}}
                    <h1 class="profile__first-name">{{first_name}}</h1>
                    <ul class="profile__data profile-list">
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Старый пароль</h2>
                            {{!-- <input class="profile-list-item__value profile-list-item__input" 
                                   type="password"
                                   name="oldPassword"> --}}
                                   {{{oldPasswordInput}}}
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Новый пароль</h2>
                            {{!-- <input class="profile-list-item__value profile-list-item__input" 
                                   type="password"
                                   name="newPassword"> --}}
                                   {{{newPasswordInput}}}
                        </li>
                        <li class="profile-list-item">
                            <h2 class="profile-list-item__title">Повторите новый пароль</h2>
                            {{!-- <input class="profile-list-item__value profile-list-item__input" 
                                   type="password"
                                   name="newPassword"> --}}
                                   {{{newPasswordInputAgain}}}
                        </li>
                    </ul>
                    {{{saveButton}}}
`;
