import{j as n,M as o}from"./index-BPqRPL7y.js";import{useMDXComponents as r}from"./index-BMBKA1PQ.js";import{at as m}from"./MermaidMarkdown-DXdLN7GB.js";import"./iframe-BN049X3X.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const c=`# at-column-manager

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description                              | Type                 | Default     |
| ---------- | --------- | ---------------------------------------- | -------------------- | ----------- |
| \`col_defs\` | --        | Column definitions used in your at-table | \`ColDef<any, any>[]\` | \`undefined\` |


## Events

| Event      | Description                                                                                      | Type                                       |
| ---------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| \`atChange\` | Custom event used by at-table-actions to perform ag-grid logic  Emitted when checkbox is clicked | \`CustomEvent<AtIColumnManagerChangeEvent>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)
 - [at-static-table](../at-static-table)

### Depends on

- [at-menu](../../at-menu)
- [at-tooltip](../../at-tooltip)
- [at-button](../../at-button)
- [at-icon](../../at-icon)
- [at-checkbox-group](../../at-checkbox-group)

### Graph
\`\`\`mermaid
graph TD;
  at-column-manager --> at-menu
  at-column-manager --> at-tooltip
  at-column-manager --> at-button
  at-column-manager --> at-icon
  at-column-manager --> at-checkbox-group
  at-button --> at-loading
  at-checkbox-group --> at-checkbox
  at-checkbox-group --> at-form-label
  at-form-label --> at-tooltip
  at-form-label --> at-icon
  at-search-table --> at-column-manager
  at-static-table --> at-column-manager
  style at-column-manager fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Table Components/Column Manager/Column Manager"}),`
`,n.jsx(m,{md:c})]})}function g(t={}){const{wrapper:a}={...r(),...t.components};return a?n.jsx(a,{...t,children:n.jsx(e,{...t})}):e()}export{g as default};
