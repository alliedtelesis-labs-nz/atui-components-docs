import{j as e,M as s}from"./index-HZ6su7Qj.js";import{useMDXComponents as l}from"./index-D_zQWoNS.js";import{at as o}from"./MermaidMarkdown-CY59acgD.js";import"./iframe-nfs9PGWG.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# at-badge

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                                                                                                                                                                                 | Type                                                                     | Default     |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| \`impact\`  | \`impact\`  | Impact of the badge, changes the colours.                                                                                                                                                                                                                                   | \`"high" \\| "low"\`                                                        | \`'low'\`     |
| \`label\`   | \`label\`   | Title shown on the badge.                                                                                                                                                                                                                                                   | \`string\`                                                                 | \`undefined\` |
| \`rounded\` | \`rounded\` | Boolean value to round the edges of the badge.                                                                                                                                                                                                                              | \`boolean\`                                                                | \`false\`     |
| \`size\`    | \`size\`    | Size of the badge. Determines padding and font-size. \`sm\` is the default and suits dense product UI — page/entity headers, summary and list rows, table status cells. Use \`lg\` for input chip lists, where the badge is an interactive control rather than a status marker. | \`"lg" \\| "sm"\`                                                           | \`'sm'\`      |
| \`type\`    | \`type\`    | Type of the badge. Determines colour theming.                                                                                                                                                                                                                               | \`"default" \\| "disabled" \\| "error" \\| "info" \\| "success" \\| "warning"\` | \`'default'\` |


## Slots

| Slot     | Description                         |
| -------- | ----------------------------------- |
|          | Content placed after the label      |
| \`"icon"\` | Carbon icon placed before the label |


## Dependencies

### Used by

 - [at-chip-list](../at-chip-list)
 - [at-list-selector](../at-list-selector)
 - [at-sidebar-menuitem](../at-sidebar/at-sidebar-menuitem)
 - [at-stepper-item](../at-stepper/at-stepper-item)
 - [at-table-filter-menu](../table-components/at-table-filter-menu)
 - [at-table-filters](../table-components/at-table-filters)
 - [at-text-badge-cell](../table-components/cell-components/at-text-badge-cell)
 - [at-text-status-cell](../table-components/cell-components/at-text-status-cell)

### Graph
\`\`\`mermaid
graph TD;
  at-chip-list --> at-badge
  at-list-selector --> at-badge
  at-sidebar-menuitem --> at-badge
  at-stepper-item --> at-badge
  at-table-filter-menu --> at-badge
  at-table-filters --> at-badge
  at-text-badge-cell --> at-badge
  at-text-status-cell --> at-badge
  style at-badge fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Badge"}),`
`,e.jsx(o,{md:i})]})}function u(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{u as default};
