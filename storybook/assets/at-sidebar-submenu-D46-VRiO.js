import{j as e,M as a}from"./index-04jGdf08.js";import{useMDXComponents as r}from"./index-w4NNEhiP.js";import{ar as o}from"./MermaidMarkdown-GDMvoCR-.js";import"./iframe-B2TBQepj.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-sidebar-menu

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute   | Description                                      | Type      | Default     |
| -------------------- | ----------- | ------------------------------------------------ | --------- | ----------- |
| \`badge\`              | \`badge\`     | Alert badge for the menu item                    | \`string\`  | \`undefined\` |
| \`icon\`               | \`icon\`      | Icon to be displayed with the label              | \`string\`  | \`undefined\` |
| \`is_active\`          | \`is_active\` | Will change the styling of the menuitem when set | \`boolean\` | \`undefined\` |
| \`label\` _(required)_ | \`label\`     | Label to be displayed for the menu item          | \`string\`  | \`undefined\` |


## Slots

| Slot                      | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| \`"submenu-content"\`       | To place the atui-sidebar-menuitem(s) in the sub menu                   |
| \`"submenu-hover-content"\` | To place the atui-sidebar-menuitem(s) in the sub menu on collapsed mode |


## Dependencies

### Depends on

- [at-accordion-item](../../at-accordion/at-accordion-item)
- [at-sidebar-menuitem](../at-sidebar-menuitem)
- [at-menu](../../at-menu)

### Graph
\`\`\`mermaid
graph TD;
  at-sidebar-submenu --> at-accordion-item
  at-sidebar-submenu --> at-sidebar-menuitem
  at-sidebar-submenu --> at-menu
  at-accordion-item --> at-accordion-trigger
  at-sidebar-menuitem --> at-badge
  style at-sidebar-submenu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Sidebar/Sidebar Menu Sub/Sidebar Menu Sub"}),`
`,e.jsx(o,{md:s})]})}function p(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{p as default};
