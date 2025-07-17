import{j as n,M as i}from"./index-DtoPCQIW.js";import{useMDXComponents as r}from"./index-L0bunzy-.js";import{ar as a}from"./MermaidMarkdown-Dvt209OR.js";import"./iframe-Cf5IOtsu.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const c=`# atui-accordion-item

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
| \`"accordion-content"\` | Used for placing the content for this accordion item.                                                                        |
| \`"accordion-trigger"\` | Used for placing the atui-accordion-trigger for this accordion item. Only use if not using the 'label' prop on this element. |


## Dependencies

### Used by

 - [atui-accordion](..)
 - [atui-sidebar-submenu](../../atui-sidebar/atui-sidebar-submenu)

### Depends on

- [atui-accordion-trigger](atui-accordion-trigger)

### Graph
\`\`\`mermaid
graph TD;
  atui-accordion-item --> atui-accordion-trigger
  atui-accordion --> atui-accordion-item
  atui-sidebar-submenu --> atui-accordion-item
  style atui-accordion-item fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Accordion/Accordion Item/Accordion Item"}),`
`,n.jsx(a,{md:c})]})}function h(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{h as default};
