import{j as e,M as a}from"./index-DL5NF-0G.js";import{useMDXComponents as u}from"./index-Cf2Ial-d.js";import{ar as r}from"./MermaidMarkdown-DxoiitXr.js";import"./iframe-C1qK1coH.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const o=`# atui-sidebar-menu

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

- [atui-accordion-item](../../atui-accordion/atui-accordion-item)
- [atui-sidebar-menuitem](../atui-sidebar-menuitem)
- [atui-menu](../../atui-menu)

### Graph
\`\`\`mermaid
graph TD;
  atui-sidebar-submenu --> atui-accordion-item
  atui-sidebar-submenu --> atui-sidebar-menuitem
  atui-sidebar-submenu --> atui-menu
  atui-accordion-item --> atui-accordion-trigger
  atui-sidebar-menuitem --> atui-badge
  style atui-sidebar-submenu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Sidebar/Sidebar Menu Sub/Sidebar Menu Sub"}),`
`,e.jsx(r,{md:o})]})}function p(n={}){const{wrapper:t}={...u(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{p as default};
