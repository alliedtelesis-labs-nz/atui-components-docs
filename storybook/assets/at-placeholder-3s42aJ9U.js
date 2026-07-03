import{j as n,M as i}from"./index-BPqRPL7y.js";import{useMDXComponents as l}from"./index-BMBKA1PQ.js";import{at as r}from"./MermaidMarkdown-DXdLN7GB.js";import"./iframe-BN049X3X.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# at-placeholder

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute              | Description                             | Type                           | Default     |
| ---------------------- | ---------------------- | --------------------------------------- | ------------------------------ | ----------- |
| \`content\`              | \`content\`              | Content to be displayed below the title | \`string\`                       | \`undefined\` |
| \`placeholder_title\`    | \`placeholder_title\`    | Title to be displayed below the icon    | \`string\`                       | \`undefined\` |
| \`show_loading_spinner\` | \`show_loading_spinner\` | Will show a loading spinner when set    | \`boolean\`                      | \`undefined\` |
| \`size\`                 | \`size\`                 | Size of the placeholder                 | \`"lg" \\| "md" \\| "sm" \\| "xs"\` | \`'md'\`      |


## Slots

| Slot     | Description                                         |
| -------- | --------------------------------------------------- |
|          | Placed below the content                            |
| \`"icon"\` | Carbon icon placed in the center of the placeholder |


## Dependencies

### Depends on

- [at-loading](../at-loading)

### Graph
\`\`\`mermaid
graph TD;
  at-placeholder --> at-loading
  style at-placeholder fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Placeholder"}),`
`,n.jsx(r,{md:a})]})}function f(e={}){const{wrapper:t}={...l(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{f as default};
