import{j as t,M as a}from"./index-QMAOGJfD.js";import{useMDXComponents as r}from"./index-BVc9bNeh.js";import{at as s}from"./MermaidMarkdown-_pO5dXBa.js";import"./iframe-D_P4QMTy.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const p=`# at-table-export-menu

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                 | Type      | Default |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| \`show_csv\` | \`show_csv\` | Offers the CSV export option in the export menu. On by default.                                                                                                                             | \`boolean\` | \`true\`  |
| \`show_pdf\` | \`show_pdf\` | <span style="color:red">**[DEPRECATED]**</span> PDF export is being removed. Set it to false and offer CSV export.<br/><br/>Offers the PDF export option in the export menu. On by default. | \`boolean\` | \`true\`  |


## Events

| Event      | Description                                     | Type                  |
| ---------- | ----------------------------------------------- | --------------------- |
| \`atChange\` | Emits the chosen format, either 'CSV' or 'PDF'. | \`CustomEvent<string>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-tooltip](../../at-tooltip)
- [at-button](../../at-button)
- [at-icon](../../at-icon)
- [at-menu](../../at-menu)
- [at-menu-item](../../at-menu/at-menu-item)

### Graph
\`\`\`mermaid
graph TD;
  at-table-export-menu --> at-tooltip
  at-table-export-menu --> at-button
  at-table-export-menu --> at-icon
  at-table-export-menu --> at-menu
  at-table-export-menu --> at-menu-item
  at-button --> at-loading
  at-search-table --> at-table-export-menu
  style at-table-export-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Table Components/Table Export Menu/Table Export Menu"}),`
`,t.jsx(s,{md:p})]})}function c(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{c as default};
