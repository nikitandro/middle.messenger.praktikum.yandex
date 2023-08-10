import leftArrowIcon from '../../assets/icons/arrow-in-circle-left.svg';

export default /*hbs*/ `
        <button class="profile-page__go-back-area"><img src="${leftArrowIcon}" alt=""></button>
        <div class="profile-page__profile">
                {{{page}}}
        </div>
`;
