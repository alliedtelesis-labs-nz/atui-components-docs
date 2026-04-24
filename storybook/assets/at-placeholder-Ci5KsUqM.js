import{j as n,M as a}from"./index-DS6h-T6U.js";import{useMDXComponents as l}from"./index-CLF-kAHK.js";import{at as i}from"./MermaidMarkdown-BBQR9Otq.js";import"./iframe-DeHesftk.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`# atui-placeholder

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

### Used by

 - [at-search-table](../table-components/at-search-table)

### Depends on

- [at-loading](../at-loading)

### Graph
\`\`\`mermaid
graph TD;
  at-placeholder --> at-loading
  at-search-table --> at-placeholder
  style at-placeholder fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/Placeholder"}),`
`,n.jsx(i,{md:r})]})}function u(e={}){const{wrapper:t}={...l(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{u as default};
