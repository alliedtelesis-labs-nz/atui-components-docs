import{j as t,M as o}from"./index-DfdVn7m7.js";import{useMDXComponents as r}from"./index-JBqQvZux.js";import{ar as i}from"./MermaidMarkdown-81CQ_Jqz.js";import"./iframe-Cc5cuJde.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# atui-form-label

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                        | Type      | Default     |
| ----------- | ----------- | -------------------------------------------------- | --------- | ----------- |
| \`for\`       | \`for\`       | Placed in the 'for' attribute on the label element | \`string\`  | \`undefined\` |
| \`info_text\` | \`info_text\` | The text to be contained in the tooltip.           | \`string\`  | \`undefined\` |
| \`label\`     | \`label\`     | Label that appears before the info icon.           | \`string\`  | \`undefined\` |
| \`required\`  | \`required\`  | When true, there will be a red star on the label.  | \`boolean\` | \`undefined\` |


## Dependencies

### Used by

 - [at-button-group](../at-button-group)
 - [at-button-switch](../at-button-switch)
 - [at-checkbox-group](../at-checkbox-group)
 - [at-input](../at-input)
 - [at-input-date](../at-input-date)
 - [at-input-numeric](../at-input-numeric)
 - [at-input-range](../at-input-range)
 - [at-input-time](../at-input-time)
 - [at-multi-select](../at-multi-select)
 - [at-prompt-input](../prompt-components/at-prompt-input)
 - [at-radio-group](../at-radio-group)
 - [at-search](../at-search)
 - [at-select](../at-select)
 - [at-textarea](../at-textarea)
 - [at-toggle-switch](../at-toggle-switch)

### Depends on

- [at-tooltip](../at-tooltip)

### Graph
\`\`\`mermaid
graph TD;
  at-form-label --> at-tooltip
  at-button-group --> at-form-label
  at-button-switch --> at-form-label
  at-checkbox-group --> at-form-label
  at-input --> at-form-label
  at-input-date --> at-form-label
  at-input-numeric --> at-form-label
  at-input-range --> at-form-label
  at-input-time --> at-form-label
  at-multi-select --> at-form-label
  at-prompt-input --> at-form-label
  at-radio-group --> at-form-label
  at-search --> at-form-label
  at-select --> at-form-label
  at-textarea --> at-form-label
  at-toggle-switch --> at-form-label
  style at-form-label fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Form Label"}),`
`,t.jsx(i,{md:l})]})}function f(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{f as default};
