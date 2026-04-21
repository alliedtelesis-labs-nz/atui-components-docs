import{j as t,M as o}from"./index-EVgcSU7t.js";import{useMDXComponents as r}from"./index-C0Ch1TO5.js";import{at as i}from"./MermaidMarkdown-DWWp5OdS.js";import"./iframe-Dp_1GPSo.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-search

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                            | Type     | Default     |
| ------------- | ------------- | ------------------------------------------------------ | -------- | ----------- |
| \`hint_text\`   | \`hint_text\`   | Hint text for the input, appears below the search bar. | \`string\` | \`undefined\` |
| \`info_text\`   | \`info_text\`   | Tooltip description.                                   | \`string\` | \`undefined\` |
| \`label\`       | \`label\`       | Label text above the search bar.                       | \`string\` | \`undefined\` |
| \`model\`       | \`model\`       | String content of the search.                          | \`string\` | \`undefined\` |
| \`placeholder\` | \`placeholder\` | Placeholder text inside the search component.          | \`string\` | \`undefined\` |


## Events

| Event      | Description                                                   | Type                  |
| ---------- | ------------------------------------------------------------- | --------------------- |
| \`atChange\` | Emits an event when the input is changed. Used by atui-table. | \`CustomEvent<string>\` |


## Dependencies

### Used by

 - [at-search-table](../table-components/at-search-table)

### Depends on

- [at-form-label](../at-form-label)
- [at-icon](../at-icon)
- [at-button](../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-search --> at-form-label
  at-search --> at-icon
  at-search --> at-button
  at-form-label --> at-tooltip
  at-form-label --> at-icon
  at-button --> at-loading
  at-search-table --> at-search
  style at-search fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Search"}),`
`,t.jsx(i,{md:s})]})}function u(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{u as default};
