import{j as n,M as i}from"./index-Wi5CerBz.js";import{useMDXComponents as r}from"./index-DB4YBde-.js";import{ar as c}from"./MermaidMarkdown-C2JGx6n1.js";import"./iframe-B6m8q1QM.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const a=`# atui-accordion-item

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description                                                         | Type      | Default     |
| ---------------------- | --------- | ------------------------------------------------------------------- | --------- | ----------- |
| \`border\`               | \`border\`  | Puts a light gray separator below the accordion item                | \`boolean\` | \`true\`      |
| \`content\`              | \`content\` | String content to display when the accordion is open                | \`string\`  | \`undefined\` |
| \`item_id\` _(required)_ | \`item_id\` | Used to identify the accordion item among the other accordion items | \`string\`  | \`undefined\` |
| \`label\`                | \`label\`   | Provides an atui-accordion-trigger with this label if set           | \`string\`  | \`undefined\` |
| \`open\`                 | \`open\`    | Used for setting if the accordion is open.                          | \`boolean\` | \`false\`     |


## Methods

### \`closeAccordion() => Promise<void>\`

Closes this accordion item

#### Returns

Type: \`Promise<void>\`



### \`openAccordion() => Promise<void>\`

Opens this accordion item

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot        | Description                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| \`"content"\` | Used for placing the content for this accordion item.                                                                        |
| \`"trigger"\` | Used for placing the atui-accordion-trigger for this accordion item. Only use if not using the 'label' prop on this element. |


## Dependencies

### Used by

 - [atui-accordion](..)

### Depends on

- [atui-accordion-trigger](atui-accordion-trigger)

### Graph
\`\`\`mermaid
graph TD;
  atui-accordion-item --> atui-accordion-trigger
  atui-accordion --> atui-accordion-item
  style atui-accordion-item fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Accordion/Accordion Item/Accordion Item"}),`
`,n.jsx(c,{md:a})]})}function h(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{h as default};
