import{j as t,M as o}from"./index-CJBBbBvK.js";import{useMDXComponents as i}from"./index-yR1Kxihu.js";import{at as s}from"./MermaidMarkdown-5MkNYw5k.js";import"./iframe-g3IvarPb.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`# at-table-pagination

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute      | Description                                  | Type                | Default                                                                                                                                |
| ------------------- | -------------- | -------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| \`current_page\`      | \`current_page\` | Current page number                          | \`number\`            | \`1\`                                                                                                                                    |
| \`num_pages\`         | \`num_pages\`    | Total number of pages                        | \`number\`            | \`1\`                                                                                                                                    |
| \`page_size\`         | \`page_size\`    | The number of table rows displayed per page  | \`number\`            | \`10\`                                                                                                                                   |
| \`page_size_options\` | --             | Options provided in dropdown for page sizes. | \`AtISelectOption[]\` | \`[         { value: '5' },         { value: '10' },         { value: '20' },         { value: '50' },         { value: '100' },     ]\` |


## Events

| Event              | Description                                                | Type                  |
| ------------------ | ---------------------------------------------------------- | --------------------- |
| \`atChange\`         | Emits event with \`\`\`event.detail\`\`\` as the new page number | \`CustomEvent<number>\` |
| \`atPageSizeChange\` | Emits event with \`\`\`event.detail\`\`\` as the new page size   | \`CustomEvent<number>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-select](../../at-select)
- [at-button](../../at-button)
- [at-icon](../../at-icon)

### Graph
\`\`\`mermaid
graph TD;
  at-table-pagination --> at-select
  at-table-pagination --> at-button
  at-table-pagination --> at-icon
  at-select --> at-menu
  at-select --> at-form-label
  at-select --> at-button
  at-select --> at-icon
  at-select --> at-select-option
  at-select --> at-select-group
  at-form-label --> at-tooltip
  at-form-label --> at-icon
  at-button --> at-loading
  at-search-table --> at-table-pagination
  style at-table-pagination fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Pagination/Table Pagination"}),`
`,t.jsx(s,{md:r})]})}function g(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{g as default};
