// language=handlebars
import link from '../../components/link';

export default `
    <div class="error-page">
        <h1 class="error-page__status-code">{{statusCode}}</h1>
        <h2 class="error-page__comment">{{comment}}</h2>
        ${link('{{linkText}}', '{{linkHref}}')}
    </div>
`;