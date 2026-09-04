import{j as t,M as o}from"./index-CKkCopoY.js";import{useMDXComponents as s}from"./index-CCSEzhPK.js";import{at as r}from"./MermaidMarkdown-BpPevDjf.js";import"./iframe-K9Wp_FDQ.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# at-table-actions

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

| Slot                | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| \`"actions"\`         | Used to place actions related to table content                                |
| \`"column-manager"\`  | Used to place an at-column-manager                                            |
| \`"export-menu"\`     | Used to place an at-export-menu                                               |
| \`"filter-bar"\`      | Used to place the persistent filter controls that sit beside the search field |
| \`"filters"\`         | Used to place an at-table-filters                                             |
| \`"leading-actions"\` | Used to place actions immediately left of the column manager                  |
| \`"reload-button"\`   | Used to place an at-reload-button                                             |
| \`"search"\`          | Used to place an at-search                                                    |


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
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Actions/Table Actions"}),`
`,t.jsx(r,{md:i})]})}function u(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{u as default};
