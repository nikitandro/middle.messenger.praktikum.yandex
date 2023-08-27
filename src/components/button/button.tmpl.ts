// language=handlebars
export default /*hbs*/ `
        {{#if isContentBlock}}
        {{{content}}}
        {{else}}
        {{content}}
        {{/if}}
    `;
