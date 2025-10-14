import{j as e,M as a}from"./index-DHfAe5AB.js";import{useMDXComponents as r}from"./index-aVxMjrLO.js";import{ar as s}from"./MermaidMarkdown-CESQXsGq.js";import"./iframe-Df8VILH9.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const o=`# atui-side-panel

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                               | Type      | Default     |
| ----------- | ----------- | --------------------------------------------------------- | --------- | ----------- |
| \`badge\`     | \`badge\`     | Alert badge for the menu item                             | \`string\`  | \`undefined\` |
| \`icon\`      | \`icon\`      | Icon to be displayed with the label                       | \`string\`  | \`undefined\` |
| \`is_active\` | \`is_active\` | Will change style to indicate menuitem is active when set | \`boolean\` | \`undefined\` |
| \`label\`     | \`label\`     | Label to be displayed for the menu item                   | \`string\`  | \`undefined\` |


## Slots

| Slot                                                          | Description |
| ------------------------------------------------------------- | ----------- |
| \`"actions: Content displayed at the right of the menu item."\` |             |
| \`"label: Content displayed at the left of the menu item."\`    |             |


## Dependencies

### Used by

 - [at-sidebar-submenu](../at-sidebar-submenu)

### Depends on

- [at-badge](../../at-badge)

### Graph
\`\`\`mermaid
graph TD;
  at-sidebar-menuitem --> at-badge
  at-sidebar-submenu --> at-sidebar-menuitem
  style at-sidebar-menuitem fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Sidebar/Sidebar Menuitem/Sidebar Menuitem"}),`
`,e.jsx(s,{md:o})]})}function c(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{c as default};
