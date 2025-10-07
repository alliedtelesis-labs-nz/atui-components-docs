import{j as t,M as o}from"./index-DkSNfyI2.js";import{useMDXComponents as r}from"./index-Ch5oIDYo.js";import{ar as i}from"./MermaidMarkdown-vmFMeWin.js";import"./iframe-DKLakCCP.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-table-dropdown-filters

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                  | Type                               | Default     |
| ---------- | ---------- | -------------------------------------------- | ---------------------------------- | ----------- |
| \`col_defs\` | \`col_defs\` | Column definitions used in your at-table     | \`ColDef<any, any>[]\`               | \`undefined\` |
| \`selected\` | \`selected\` | Currently selected columns and filter values | \`{ id: string; value: string; }[]\` | \`[]\`        |


## Events

| Event      | Description                                    | Type                         |
| ---------- | ---------------------------------------------- | ---------------------------- |
| \`atChange\` | Emits id of column and filter value on change. | \`CustomEvent<FilterEvent[]>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-input](../../at-input)
- [at-button](../../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-table-filters --> at-input
  at-table-filters --> at-button
  at-input --> at-form-label
  at-input --> at-button
  at-form-label --> at-tooltip
  at-button --> at-loading
  at-search-table --> at-table-filters
  style at-table-filters fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Filters/Table Filters"}),`
`,t.jsx(i,{md:s})]})}function f(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{f as default};
