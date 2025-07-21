import{j as t,M as i}from"./index-B8R_n5k_.js";import{useMDXComponents as o}from"./index-B2Bfj9zn.js";import{ar as r}from"./MermaidMarkdown-Y_0hop0y.js";import"./iframe-CwMQwDnZ.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const s=`# atui-table-actions

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                            | Type           | Default     |
| --------- | --------- | ------------------------------------------------------ | -------------- | ----------- |
| \`ag_grid\` | \`ag_grid\` | AG Grid Api (provided by atui-table createGrid method) | \`GridApi<any>\` | \`undefined\` |


## Events

| Event           | Description                                                                    | Type               |
| --------------- | ------------------------------------------------------------------------------ | ------------------ |
| \`atuiChange\`    | Emits an event when filters change                                             | \`CustomEvent<any>\` |
| \`atuiExportCsv\` | Emits an event when 'Export CSV' is pressed on provided atui-table-export-menu | \`CustomEvent<any>\` |
| \`atuiExportPdf\` | Emits an event when 'Export PDF' is pressed on provided atui-table-export-menu | \`CustomEvent<any>\` |


## Slots

| Slot                 | Description                                    |
| -------------------- | ---------------------------------------------- |
| \`"actions"\`          | Used to place actions related to table content |
| \`"column-manager"\`   | Used to place an atui-column-manager           |
| \`"dropdown-filters"\` | Used to place an atui-table-filters            |
| \`"export-menu"\`      | Used to place an atui-export-menu              |
| \`"search"\`           | Used to place an atui-search                   |


## Dependencies

### Used by

 - [atui-search-table](../atui-search-table)
 - [atui-static-table](../atui-static-table)

### Graph
\`\`\`mermaid
graph TD;
  atui-search-table --> atui-table-actions
  atui-static-table --> atui-table-actions
  style atui-table-actions fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Table Components/Table Actions/Table Actions"}),`
`,t.jsx(r,{md:s})]})}function b(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{b as default};
