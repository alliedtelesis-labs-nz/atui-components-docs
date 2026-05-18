import{j as n,M as i}from"./index-DuZddvtC.js";import{useMDXComponents as a}from"./index-bz9ihtZ1.js";import{at as r}from"./MermaidMarkdown-bw1yQ3Wr.js";import"./iframe-CDi-V1Vk.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# at-button-group-option

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                          | Type      | Default     |
| ----------- | ----------- | ------------------------------------------------------------------------------------ | --------- | ----------- |
| \`disabled\`  | \`disabled\`  | Will disable interaction if set                                                      | \`boolean\` | \`undefined\` |
| \`is_active\` | \`is_active\` | Will apply active styling to the button                                              | \`boolean\` | \`undefined\` |
| \`label\`     | \`label\`     | Displayed text value (optional) if not provided the value will be used as a fallback | \`string\`  | \`undefined\` |
| \`value\`     | \`value\`     | Value of the select option                                                           | \`string\`  | \`undefined\` |


## Events

| Event       | Description                      | Type                   |
| ----------- | -------------------------------- | ---------------------- |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<AtEvent>\` |


## Slots

| Slot      | Description                          |
| --------- | ------------------------------------ |
|           | Places content before the label.     |
| \`"after"\` | Places content after the label.      |
| \`"icon"\`  | Carbon icon placed before the label. |


## Dependencies

### Used by

 - [at-button-group](..)
 - [at-time-range](../../at-time-range)

### Graph
\`\`\`mermaid
graph TD;
  at-button-group --> at-button-group-option
  at-time-range --> at-button-group-option
  style at-button-group-option fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Button Group/Button Group Option/Button Group Option"}),`
`,n.jsx(r,{md:l})]})}function m(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o()}export{m as default};
