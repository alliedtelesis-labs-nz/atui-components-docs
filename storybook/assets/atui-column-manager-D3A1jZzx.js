import{j as n,M as o}from"./index-Wi5CerBz.js";import{useMDXComponents as i}from"./index-DB4YBde-.js";import{ar as u}from"./MermaidMarkdown-C2JGx6n1.js";import"./iframe-B6m8q1QM.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const r=`# atui-column-manager

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                | Type                 | Default     |
| ---------- | ---------- | ------------------------------------------ | -------------------- | ----------- |
| \`col_defs\` | \`col_defs\` | Column definitions used in your atui-table | \`ColDef<any, any>[]\` | \`undefined\` |


## Events

| Event        | Description                                                                                        | Type               |
| ------------ | -------------------------------------------------------------------------------------------------- | ------------------ |
| \`atuiChange\` | Custom event used by atui-table-actions to perform ag-grid logic  Emitted when checkbox is clicked | \`CustomEvent<any>\` |


## Dependencies

### Used by

 - [atui-search-table](../atui-search-table)
 - [atui-static-table](../atui-static-table)

### Depends on

- [atui-menu](../../atui-menu)
- [atui-tooltip](../../atui-tooltip)
- [atui-button](../../atui-button)
- [atui-checkbox-group](../../atui-checkbox-group)

### Graph
\`\`\`mermaid
graph TD;
  atui-column-manager --> atui-menu
  atui-column-manager --> atui-tooltip
  atui-column-manager --> atui-button
  atui-column-manager --> atui-checkbox-group
  atui-button --> atui-loading
  atui-checkbox-group --> atui-checkbox
  atui-checkbox-group --> atui-form-label
  atui-form-label --> atui-tooltip
  atui-search-table --> atui-column-manager
  atui-static-table --> atui-column-manager
  style atui-column-manager fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(t){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Table Components/Column Manager/Column Manager"}),`
`,n.jsx(u,{md:r})]})}function d(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a()}export{d as default};
