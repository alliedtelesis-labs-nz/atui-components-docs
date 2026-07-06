import{j as e,M as o}from"./index-C9xEBJZF.js";import{useMDXComponents as s}from"./index-B_SHOHKf.js";import{at as i}from"./MermaidMarkdown-2f4nBKaE.js";import"./iframe-BJtpCYCG.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# at-badge

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                       | Type                                                                     | Default     |
| --------- | --------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| \`impact\`  | \`impact\`  | Impact of the badge, changes the colours.                                         | \`"high" \\| "low"\`                                                        | \`'low'\`     |
| \`label\`   | \`label\`   | Title shown on the badge.                                                         | \`string\`                                                                 | \`undefined\` |
| \`rounded\` | \`rounded\` | Boolean value to round the edges of the badge.                                    | \`boolean\`                                                                | \`false\`     |
| \`size\`    | \`size\`    | Size of the badge. Determines padding and font-size. For use in input chip lists. | \`"lg" \\| "sm"\`                                                           | \`'lg'\`      |
| \`type\`    | \`type\`    | Type of the badge. Determines colour theming.                                     | \`"default" \\| "disabled" \\| "error" \\| "info" \\| "success" \\| "warning"\` | \`'default'\` |


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
 - [at-text-badge-cell](../table-components/cell-components/at-text-badge-cell)
 - [at-text-status-cell](../table-components/cell-components/at-text-status-cell)

### Graph
\`\`\`mermaid
graph TD;
  at-chip-list --> at-badge
  at-list-selector --> at-badge
  at-sidebar-menuitem --> at-badge
  at-text-badge-cell --> at-badge
  at-text-status-cell --> at-badge
  style at-badge fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Badge"}),`
`,e.jsx(i,{md:l})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{u as default};
