import{j as e,M as o}from"./index-4FuYFI1f.js";import{useMDXComponents as s}from"./index-BvwN1V-S.js";import{ar as a}from"./MermaidMarkdown-Bj_FRAIt.js";import"./iframe-BUGaSx2V.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# atui-menu-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                              | Type      | Default     |
| ----------- | ----------- | ---------------------------------------------------------------------------------------- | --------- | ----------- |
| \`disabled\`  | \`disabled\`  | Disables user interaction with the menu-item and updates visual style to appear inactive | \`boolean\` | \`false\`     |
| \`icon\`      | \`icon\`      | Icon to be displayed with the label                                                      | \`string\`  | \`undefined\` |
| \`is_active\` | \`is_active\` | Will change the styling of the menuitem when set                                         | \`boolean\` | \`false\`     |
| \`label\`     | \`label\`     | Label to be displayed for the menu item                                                  | \`string\`  | \`undefined\` |


## Events

| Event       | Description                      | Type                   |
| ----------- | -------------------------------- | ---------------------- |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<AtEvent>\` |


## Slots

| Slot | Description                                                                                                                                                                |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      | Use this slot to add custom elements (e.g., icons, badges, actions) after the label section of the menu item. This allows for flexible extension of the menu item content. |


## Dependencies

### Used by

 - [at-menu-cell](../../table-components/cell-components/at-menu-cell)
 - [at-table-export-menu](../../table-components/at-table-export-menu)

### Graph
\`\`\`mermaid
graph TD;
  at-menu-cell --> at-menu-item
  at-table-export-menu --> at-menu-item
  style at-menu-item fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Menu/MenuItem"}),`
`,e.jsx(a,{md:l})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{h as default};
