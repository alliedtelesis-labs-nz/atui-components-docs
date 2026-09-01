import{j as e,M as o}from"./index-DT8CSDR5.js";import{useMDXComponents as s}from"./index-CIOjXxQj.js";import{at as a}from"./MermaidMarkdown-DADN2D0T.js";import"./iframe-DGu3NUEL.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# at-progress-bar



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                              | Type                                          | Default         |
| ------------ | ------------ | ------------------------------------------------------------------------ | --------------------------------------------- | --------------- |
| \`mode\`       | \`mode\`       | Mode of the progress bar, either determinate or indeterminate (loading). | \`"determinate" \\| "indeterminate"\`            | \`'determinate'\` |
| \`percentage\` | \`percentage\` | Percentage value of the progress bar.                                    | \`number\`                                      | \`0\`             |
| \`size\`       | \`size\`       | Height of the progress bar                                               | \`"lg" \\| "sm"\`                                | \`'sm'\`          |
| \`type\`       | \`type\`       | Type of the progress bar, which determines its color.                    | \`"error" \\| "info" \\| "success" \\| "warning"\` | \`'info'\`        |


## Slots

| Slot             | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| \`"label-after"\`  | Placed after the progress bar to add custom label content.  |
| \`"label-before"\` | Placed before the progress bar to add custom label content. |


## Dependencies

### Used by

 - [at-progress-bar-cell](../table-components/cell-components/at-progress-bar-cell)

### Graph
\`\`\`mermaid
graph TD;
  at-progress-bar-cell --> at-progress-bar
  style at-progress-bar fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Progress Bar"}),`
`,e.jsx(a,{md:i})]})}function g(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t()}export{g as default};
