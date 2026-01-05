import{j as t,M as o}from"./index-BLqYG9Eu.js";import{useMDXComponents as s}from"./index-BZEhjXiM.js";import{ar as r}from"./MermaidMarkdown-RVvYelxx.js";import"./iframe-DQIBDzbR.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# atui-table-actions

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                          | Type           | Default     |
| --------- | --------- | ---------------------------------------------------- | -------------- | ----------- |
| \`ag_grid\` | --        | AG Grid Api (provided by at-table createGrid method) | \`GridApi<any>\` | \`undefined\` |


## Events

| Event         | Description                                                                  | Type               |
| ------------- | ---------------------------------------------------------------------------- | ------------------ |
| \`atChange\`    | Emits an event when filters change                                           | \`CustomEvent<any>\` |
| \`atExportCsv\` | Emits an event when 'Export CSV' is pressed on provided at-table-export-menu | \`CustomEvent<any>\` |
| \`atExportPdf\` | Emits an event when 'Export PDF' is pressed on provided at-table-export-menu | \`CustomEvent<any>\` |


## Slots

| Slot                 | Description                                    |
| -------------------- | ---------------------------------------------- |
| \`"actions"\`          | Used to place actions related to table content |
| \`"column-manager"\`   | Used to place an at-column-manager             |
| \`"dropdown-filters"\` | Used to place an at-table-filters              |
| \`"export-menu"\`      | Used to place an at-export-menu                |
| \`"search"\`           | Used to place an at-search                     |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)
 - [at-static-table](../at-static-table)

### Graph
\`\`\`mermaid
graph TD;
  at-search-table --> at-table-actions
  at-static-table --> at-table-actions
  style at-table-actions fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Actions/Table Actions"}),`
`,t.jsx(r,{md:i})]})}function b(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{b as default};
