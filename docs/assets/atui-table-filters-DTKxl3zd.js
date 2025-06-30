import{j as t,M as a}from"./index-uKwJqZOP.js";import{useMDXComponents as o}from"./index-ye-STgU3.js";import{ar as r}from"./MermaidMarkdown-COM3d1XX.js";import"./iframe-an26wWG3.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const u=`# atui-table-dropdown-filters

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                  | Type                               | Default     |
| ---------- | ---------- | -------------------------------------------- | ---------------------------------- | ----------- |
| \`col_defs\` | \`col_defs\` | Column definitions used in your atui-table   | \`ColDef<any, any>[]\`               | \`undefined\` |
| \`selected\` | \`selected\` | Currently selected columns and filter values | \`{ id: string; value: string; }[]\` | \`[]\`        |


## Events

| Event        | Description                                                           | Type               |
| ------------ | --------------------------------------------------------------------- | ------------------ |
| \`atuiChange\` | Emits id of column to filter and value to filter by filter on change. | \`CustomEvent<any>\` |


## Dependencies

### Used by

 - [atui-search-table](../atui-search-table)

### Depends on

- [atui-input](../../atui-input)
- [atui-button](../../atui-button)

### Graph
\`\`\`mermaid
graph TD;
  atui-table-filters --> atui-input
  atui-table-filters --> atui-button
  atui-input --> atui-form-label
  atui-input --> atui-button
  atui-form-label --> atui-tooltip
  atui-button --> atui-loading-spinner
  atui-search-table --> atui-table-filters
  style atui-table-filters fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Table Components/Table Filters/Table Filters"}),`
`,t.jsx(r,{md:u})]})}function c(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i()}export{c as default};
