import{j as e,M as i}from"./index-nfsT75sJ.js";import{useMDXComponents as s}from"./index-CzD549k1.js";import{at as a}from"./MermaidMarkdown-p_ZvjsOn.js";import"./iframe-DlA6nhXN.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# at-menu-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                              | Type      | Default     |
| ----------- | ----------- | ---------------------------------------------------------------------------------------- | --------- | ----------- |
| \`disabled\`  | \`disabled\`  | Disables user interaction with the menu-item and updates visual style to appear inactive | \`boolean\` | \`false\`     |
| \`is_active\` | \`is_active\` | Will change the styling of the menuitem when set                                         | \`boolean\` | \`false\`     |
| \`label\`     | \`label\`     | Label to be displayed for the menu item                                                  | \`string\`  | \`undefined\` |


## Events

| Event       | Description                      | Type                   |
| ----------- | -------------------------------- | ---------------------- |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<AtEvent>\` |


## Slots

| Slot        | Description                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|             | Use this slot to add custom elements (e.g., icons, badges, actions) after the label section of the menu item. This allows for flexible extension of the menu item content. |
| \`"actions"\` | Use this slot to add custom elements (e.g., icons, badges, actions) at the far right of the menu item.                                                                     |
| \`"icon"\`    | Carbon icon displayed at the left of the menu item                                                                                                                         |


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
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Menu/MenuItem"}),`
`,e.jsx(a,{md:l})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{h as default};
