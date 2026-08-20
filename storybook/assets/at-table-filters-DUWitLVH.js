import{j as t,M as r}from"./index-B7xxERmP.js";import{useMDXComponents as i}from"./index-Dfye4hpB.js";import{at as o}from"./MermaidMarkdown-BuuIx2Yk.js";import"./iframe-0-pUWuQK.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# at-table-filters

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                 | Type             | Default     |
| --------- | --------- | ----------------------------------------------------------------------------------------------------------- | ---------------- | ----------- |
| \`filters\` | --        | The active filters to display as a removable chip list, grouped with And/Or operators and nested subgroups. | \`AtIFilterGroup\` | \`undefined\` |


## Events

| Event           | Description                                                                              | Type                          |
| --------------- | ---------------------------------------------------------------------------------------- | ----------------------------- |
| \`atChange\`      | Emits the remaining filters whenever a chip is removed or all are cleared.               | \`CustomEvent<AtIFilterGroup>\` |
| \`atFilterClick\` | Emits the clicked filter condition when a chip is clicked (excluding its remove button). | \`CustomEvent<AtIFilter>\`      |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-badge](../../at-badge)
- [at-icon](../../at-icon)
- [at-button](../../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-table-filters --> at-badge
  at-table-filters --> at-icon
  at-table-filters --> at-button
  at-button --> at-loading
  at-search-table --> at-table-filters
  style at-table-filters fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Table Components/Table Filters/Table Filters"}),`
`,t.jsx(o,{md:s})]})}function b(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{b as default};
