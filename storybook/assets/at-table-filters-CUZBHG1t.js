import{j as t,M as o}from"./index-Bk-WR04t.js";import{useMDXComponents as i}from"./index-BAGDPO5x.js";import{at as r}from"./MermaidMarkdown-CK47AK90.js";import"./iframe-DEyhhVBf.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# atui-table-dropdown-filters

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description                                  | Type                               | Default     |
| ---------- | --------- | -------------------------------------------- | ---------------------------------- | ----------- |
| \`col_defs\` | --        | Column definitions used in your at-table     | \`ColDef<any, any>[]\`               | \`undefined\` |
| \`selected\` | --        | Currently selected columns and filter values | \`{ id: string; value: string; }[]\` | \`[]\`        |


## Events

| Event      | Description                                    | Type                            |
| ---------- | ---------------------------------------------- | ------------------------------- |
| \`atChange\` | Emits id of column and filter value on change. | \`CustomEvent<AtIFilterEvent[]>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-input](../../at-input)
- [at-button](../../at-button)
- [at-icon](../../at-icon)

### Graph
\`\`\`mermaid
graph TD;
  at-table-filters --> at-input
  at-table-filters --> at-button
  at-table-filters --> at-icon
  at-input --> at-form-label
  at-input --> at-button
  at-input --> at-icon
  at-form-label --> at-tooltip
  at-button --> at-loading
  at-search-table --> at-table-filters
  style at-table-filters fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Filters/Table Filters"}),`
`,t.jsx(r,{md:l})]})}function f(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{f as default};
