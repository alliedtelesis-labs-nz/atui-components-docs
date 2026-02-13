import{j as n,M as i}from"./index-CjiMb2SD.js";import{useMDXComponents as r}from"./index-0DK7lDsI.js";import{ar as a}from"./MermaidMarkdown-D4T2Xntp.js";import"./iframe-Ddgyeil3.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-accordion-item

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description                                                         | Type      | Default     |
| ---------------------- | --------- | ------------------------------------------------------------------- | --------- | ----------- |
| \`border\`               | \`border\`  | Puts a light gray separator below the accordion item                | \`boolean\` | \`true\`      |
| \`content\`              | \`content\` | String content to display when the accordion is open                | \`string\`  | \`undefined\` |
| \`item_id\` _(required)_ | \`item_id\` | Used to identify the accordion item among the other accordion items | \`string\`  | \`undefined\` |
| \`label\`                | \`label\`   | Provides an atui-accordion-trigger with this label if set           | \`string\`  | \`undefined\` |
| \`open\`                 | \`open\`    | Used for setting if the accordion is open.                          | \`boolean\` | \`false\`     |


## Events

| Event                 | Description                                          | Type                   |
| --------------------- | ---------------------------------------------------- | ---------------------- |
| \`atuiAccordionChange\` | Emitted when the accordion item's open state changes | \`CustomEvent<boolean>\` |


## Methods

### \`closeAccordion() => Promise<void>\`

Closes this accordion item

#### Returns

Type: \`Promise<void>\`



### \`getIsOpen() => Promise<boolean>\`

Return the accordion items open state

#### Returns

Type: \`Promise<boolean>\`



### \`openAccordion() => Promise<void>\`

Opens this accordion item

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot                  | Description                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| \`"accordion-trigger"\` | Used for placing the atui-accordion-trigger for this accordion item. Only use if not using the 'label' prop on this element. |
| \`"default"\`           | Used for placing the content for this accordion item.                                                                        |


## Dependencies

### Used by

 - [at-accordion](..)
 - [at-sidebar-submenu](../../at-sidebar/at-sidebar-submenu)

### Depends on

- [at-accordion-trigger](at-accordion-trigger)

### Graph
\`\`\`mermaid
graph TD;
  at-accordion-item --> at-accordion-trigger
  at-accordion --> at-accordion-item
  at-sidebar-submenu --> at-accordion-item
  style at-accordion-item fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Accordion/Accordion Item/Accordion Item"}),`
`,n.jsx(a,{md:s})]})}function h(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{h as default};
