import{j as n,M as r}from"./index-V4Vlffbf.js";import{useMDXComponents as i}from"./index-tBXBy-QZ.js";import{at as a}from"./MermaidMarkdown-BR5-scUn.js";import"./iframe-DgsuCUEC.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const c=`# at-accordion-trigger

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                            | Type     | Default     |
| -------- | --------- | ------------------------------------------------------ | -------- | ----------- |
| \`label\`  | \`label\`   | Text to display on the trigger for the accordion item. | \`string\` | \`undefined\` |


## Slots

| Slot | Description                                                                     |
| ---- | ------------------------------------------------------------------------------- |
|      | Content placed inside of the trigger, after the 'label' prop if one is provided |


## Dependencies

### Used by

 - [at-accordion-item](..)

### Depends on

- [at-icon](../../../at-icon)

### Graph
\`\`\`mermaid
graph TD;
  at-accordion-trigger --> at-icon
  at-accordion-item --> at-accordion-trigger
  style at-accordion-trigger fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(t){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Components/Accordion/Accordion Item/Accordion Trigger/Accordion Trigger"}),`
`,n.jsx(a,{md:c})]})}function f(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o()}export{f as default};
