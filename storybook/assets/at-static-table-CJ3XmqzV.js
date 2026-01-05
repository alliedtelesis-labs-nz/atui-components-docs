import{j as t,M as o}from"./index-CMaY5MGj.js";import{useMDXComponents as i}from"./index-DjHQ-M-s.js";import{ar as r}from"./MermaidMarkdown-N1HWRRVK.js";import"./iframe-5lEdUmRW.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# atui-static-table

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute               | Description                                                                                                                                              | Type                               | Default     |
| ----------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------- |
| \`col_defs\`              | --                      | Column definitions for the table                                                                                                                         | \`ColDef<any, any>[]\`               | \`undefined\` |
| \`hide_column_manager\`   | \`hide_column_manager\`   | If true the column manager will not be added                                                                                                             | \`boolean\`                          | \`undefined\` |
| \`page_size\`             | \`page_size\`             | Max number of items per page                                                                                                                             | \`number\`                           | \`10\`        |
| \`table_data\`            | --                      | Data to go into the table                                                                                                                                | \`{ items: any[]; total: number; }\` | \`undefined\` |
| \`use_custom_pagination\` | \`use_custom_pagination\` | If true, disables pagination on the table and shows all data at once. Useful for server-side pagination where you want to control pagination externally. | \`boolean\`                          | \`false\`     |


## Dependencies

### Depends on

- [at-table-actions](../at-table-actions)
- [at-column-manager](../at-column-manager)
- [at-table](../at-table)

### Graph
\`\`\`mermaid
graph TD;
  at-static-table --> at-table-actions
  at-static-table --> at-column-manager
  at-static-table --> at-table
  at-column-manager --> at-menu
  at-column-manager --> at-tooltip
  at-column-manager --> at-button
  at-column-manager --> at-checkbox-group
  at-button --> at-loading
  at-checkbox-group --> at-checkbox
  at-checkbox-group --> at-form-label
  at-form-label --> at-tooltip
  style at-static-table fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function e(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Static Table"}),`
`,t.jsx(r,{md:l})]})}function d(n={}){const{wrapper:a}={...i(),...n.components};return a?t.jsx(a,{...n,children:t.jsx(e,{...n})}):e()}export{d as default};
