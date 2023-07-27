import leftArrowIcon from '../../assets/icons/arrow-in-circle-left.svg';

// language=handlebars

export default /*hbs*/ `
            <div class="profile-page__go-back-area"><img src="${leftArrowIcon}" alt=""></div>
            <div class="profile-page__profile">
                {{{form}}}
            </div>
            `;
