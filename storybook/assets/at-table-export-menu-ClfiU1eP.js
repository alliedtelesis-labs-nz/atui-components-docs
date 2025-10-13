import{j as t,M as o}from"./index-ByY1ib39.js";import{useMDXComponents as r}from"./index-BAJIdy-F.js";import{ar as s}from"./MermaidMarkdown-BfS1D-6t.js";import"./iframe-CCzsNMjR.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# atui-table-export-menu

<!-- Auto Generated Below -->


## Events

| Event      | Description                                            | Type                  |
| ---------- | ------------------------------------------------------ | --------------------- |
| \`atChange\` | Emits id of the clicked button, either 'CSV' or 'PDF'. | \`CustomEvent<string>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-menu](../../at-menu)
- [at-tooltip](../../at-tooltip)
- [at-button](../../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-table-export-menu --> at-menu
  at-table-export-menu --> at-tooltip
  at-table-export-menu --> at-button
  at-button --> at-loading
  at-search-table --> at-table-export-menu
  style at-table-export-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Export Menu/Table Export Menu"}),`
`,t.jsx(s,{md:i})]})}function x(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{x as default};
