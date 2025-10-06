import{j as n,M as o}from"./index-DhQD5Sot.js";import{useMDXComponents as r}from"./index-DsMJGzLD.js";import{ar as m}from"./MermaidMarkdown-Dd8cyXy-.js";import"./iframe-BK-eHgrm.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const c=`# atui-column-manager

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                              | Type                 | Default     |
| ---------- | ---------- | ---------------------------------------- | -------------------- | ----------- |
| \`col_defs\` | \`col_defs\` | Column definitions used in your at-table | \`ColDef<any, any>[]\` | \`undefined\` |


## Events

| Event      | Description                                                                                      | Type                                    |
| ---------- | ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| \`atChange\` | Custom event used by at-table-actions to perform ag-grid logic  Emitted when checkbox is clicked | \`CustomEvent<ColumnManagerChangeEvent>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)
 - [at-static-table](../at-static-table)

### Depends on

- [at-menu](../../at-menu)
- [at-tooltip](../../at-tooltip)
- [at-button](../../at-button)
- [at-checkbox-group](../../at-checkbox-group)

### Graph
\`\`\`mermaid
graph TD;
  at-column-manager --> at-menu
  at-column-manager --> at-tooltip
  at-column-manager --> at-button
  at-column-manager --> at-checkbox-group
  at-button --> at-loading
  at-checkbox-group --> at-checkbox
  at-checkbox-group --> at-form-label
  at-form-label --> at-tooltip
  at-search-table --> at-column-manager
  at-static-table --> at-column-manager
  style at-column-manager fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Table Components/Column Manager/Column Manager"}),`
`,n.jsx(m,{md:c})]})}function d(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a()}export{d as default};
