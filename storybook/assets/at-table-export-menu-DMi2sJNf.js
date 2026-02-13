import{j as t,M as a}from"./index-CjiMb2SD.js";import{useMDXComponents as r}from"./index-0DK7lDsI.js";import{ar as i}from"./MermaidMarkdown-D4T2Xntp.js";import"./iframe-Ddgyeil3.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const m=`# atui-table-export-menu

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                              | Type      | Default |
| ---------- | ---------- | -------------------------------------------------------- | --------- | ------- |
| \`hide_csv\` | \`hide_csv\` | If true, hides the CSV export option in the export menu. | \`boolean\` | \`false\` |
| \`hide_pdf\` | \`hide_pdf\` | If true, hides the PDF export option in the export menu. | \`boolean\` | \`false\` |


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
- [at-menu-item](../../at-menu/at-menu-item)

### Graph
\`\`\`mermaid
graph TD;
  at-table-export-menu --> at-menu
  at-table-export-menu --> at-tooltip
  at-table-export-menu --> at-button
  at-table-export-menu --> at-menu-item
  at-button --> at-loading
  at-search-table --> at-table-export-menu
  style at-table-export-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Table Components/Table Export Menu/Table Export Menu"}),`
`,t.jsx(i,{md:m})]})}function x(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{x as default};
