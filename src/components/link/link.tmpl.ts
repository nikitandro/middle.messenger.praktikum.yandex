// language=handlebars
export default `{{#if underlined}}
    <a class="link link_underlined" href="{{href}}">{{text}}</a>
{{else}}
    <a class="link" href="{{href}}">{{text}}</a>
{{/if}}`;
