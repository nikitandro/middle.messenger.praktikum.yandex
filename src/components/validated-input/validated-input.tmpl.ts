export default /*hbs*/ `
{{{input}}}
{{#if isValid}}
{{else}}
<span class="validation-text">Неверное значение</span>
{{/if}}
`;
