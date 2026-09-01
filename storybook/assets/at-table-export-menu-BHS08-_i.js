import{j as t,M as a}from"./index-HZ6su7Qj.js";import{useMDXComponents as r}from"./index-D_zQWoNS.js";import{at as i}from"./MermaidMarkdown-CY59acgD.js";import"./iframe-nfs9PGWG.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const m=`# at-table-export-menu

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                     | Type      | Default |
| ---------- | ---------- | --------------------------------------------------------------- | --------- | ------- |
| \`show_csv\` | \`show_csv\` | Offers the CSV export option in the export menu. On by default. | \`boolean\` | \`true\`  |
| \`show_pdf\` | \`show_pdf\` | Offers the PDF export option in the export menu. On by default. | \`boolean\` | \`true\`  |


## Events

| Event      | Description                                               | Type                  |
| ---------- | --------------------------------------------------------- | --------------------- |
| \`atChange\` | Emits id of the clicked menu item, either 'CSV' or 'PDF'. | \`CustomEvent<string>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-menu](../../at-menu)
- [at-tooltip](../../at-tooltip)
- [at-button](../../at-button)
- [at-icon](../../at-icon)
- [at-menu-item](../../at-menu/at-menu-item)

### Graph
\`\`\`mermaid
graph TD;
  at-table-export-menu --> at-menu
  at-table-export-menu --> at-tooltip
  at-table-export-menu --> at-button
  at-table-export-menu --> at-icon
  at-table-export-menu --> at-menu-item
  at-button --> at-loading
  at-search-table --> at-table-export-menu
  style at-table-export-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Table Components/Table Export Menu/Table Export Menu"}),`
`,t.jsx(i,{md:m})]})}function x(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o()}export{x as default};
