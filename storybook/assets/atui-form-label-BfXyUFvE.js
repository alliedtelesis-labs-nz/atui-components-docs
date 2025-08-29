import{j as t,M as a}from"./index-DVIigT4M.js";import{useMDXComponents as u}from"./index-CWcFnLC7.js";import{ar as o}from"./MermaidMarkdown-zwduJRzm.js";import"./iframe-DAvOvYT2.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";const r=`# atui-form-label

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

 - [atui-button-group](../atui-button-group)
 - [atui-checkbox-group](../atui-checkbox-group)
 - [atui-input](../atui-input)
 - [atui-input-numeric](../atui-input-numeric)
 - [atui-input-range](../atui-input-range)
 - [atui-multi-select](../atui-multi-select)
 - [atui-prompt-input](../prompt-components/atui-prompt-input)
 - [atui-radio-group](../atui-radio-group)
 - [atui-search](../atui-search)
 - [atui-select](../atui-select)
 - [atui-textarea](../atui-textarea)
 - [atui-toggle-switch](../atui-toggle-switch)

### Depends on

- [atui-tooltip](../atui-tooltip)

### Graph
\`\`\`mermaid
graph TD;
  atui-form-label --> atui-tooltip
  atui-button-group --> atui-form-label
  atui-checkbox-group --> atui-form-label
  atui-input --> atui-form-label
  atui-input-numeric --> atui-form-label
  atui-input-range --> atui-form-label
  atui-multi-select --> atui-form-label
  atui-prompt-input --> atui-form-label
  atui-radio-group --> atui-form-label
  atui-search --> atui-form-label
  atui-select --> atui-form-label
  atui-textarea --> atui-form-label
  atui-toggle-switch --> atui-form-label
  style atui-form-label fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Form Label"}),`
`,t.jsx(o,{md:r})]})}function b(e={}){const{wrapper:n}={...u(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{b as default};
