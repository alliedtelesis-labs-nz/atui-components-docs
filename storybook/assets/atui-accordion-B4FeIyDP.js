import{j as n,M as i}from"./index-DL5NF-0G.js";import{useMDXComponents as r}from"./index-Cf2Ial-d.js";import{ar as s}from"./MermaidMarkdown-DxoiitXr.js";import"./iframe-C1qK1coH.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const a=`# atui-accordion

<!-- Auto Generated Below -->


## Overview

### \`\`\`interface AccordionItem\`\`\`
\`\`\`
item_id: string;
label: string;
content: string;
\`\`\`

## Properties

| Property       | Attribute      | Description                                           | Type              | Default |
| -------------- | -------------- | ----------------------------------------------------- | ----------------- | ------- |
| \`default_open\` | \`default_open\` | If set, all child accordions will be open by default. | \`boolean\`         | \`false\` |
| \`items\`        | \`items\`        | Used to create accordion items.                       | \`AccordionItem[]\` | \`[]\`    |


## Methods

### \`closeAll() => Promise<void>\`

Closes all accordion items.

#### Returns

Type: \`Promise<void>\`



### \`openAll() => Promise<void>\`

Opens all accordion items

#### Returns

Type: \`Promise<void>\`



### \`toggleAll() => Promise<void>\`

Toggles all accordion item's open state.

#### Returns

Type: \`Promise<void>\`



### \`toggleById(value: string) => Promise<void>\`

Toggles the open state of a specific accordion item

#### Parameters

| Name    | Type     | Description                 |
| ------- | -------- | --------------------------- |
| \`value\` | \`string\` | Id of element to be toggled |

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot | Description                                                                                                    |
| ---- | -------------------------------------------------------------------------------------------------------------- |
|      | Content is placed within the accordion wrapper. Used for placing atui-accordion-items if not using items prop. |


## Dependencies

### Depends on

- [atui-accordion-item](atui-accordion-item)

### Graph
\`\`\`mermaid
graph TD;
  atui-accordion --> atui-accordion-item
  atui-accordion-item --> atui-accordion-trigger
  style atui-accordion fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Accordion"}),`
`,n.jsx(s,{md:a})]})}function f(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{f as default};
