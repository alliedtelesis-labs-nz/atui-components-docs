import{j as e,M as r}from"./index-BpRwEArn.js";import{useMDXComponents as o}from"./index-CRID036a.js";import{ar as s}from"./MermaidMarkdown-BVTLM2lp.js";import"./iframe-CdhIbeUi.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# atui-tree

<!-- Auto Generated Below -->


## Overview

### \`\`\`interface ItemNode\`\`\`
\`\`\`
 id: string;
 displayName: string;
 children: ItemNode[];
 isSelected?: boolean;
 tooltip?: string;
\`\`\`

## Properties

| Property    | Attribute | Description                                 | Type                   | Default     |
| ----------- | --------- | ------------------------------------------- | ---------------------- | ----------- |
| \`item_list\` | --        | List of items to be displayed in the tree   | \`TreeNode[]\`           | \`undefined\` |
| \`size\`      | \`size\`    | Set the size of the tree button, default sm | \`"lg" \\| "md" \\| "sm"\` | \`'sm'\`      |


## Events

| Event       | Description                      | Type                    |
| ----------- | -------------------------------- | ----------------------- |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<TreeNode>\` |


## Dependencies

### Depends on

- [at-tooltip](../at-tooltip)
- [at-tree-item](at-tree-item)

### Graph
\`\`\`mermaid
graph TD;
  at-tree --> at-tooltip
  at-tree --> at-tree-item
  style at-tree fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Tree"}),`
`,e.jsx(s,{md:a})]})}function f(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i()}export{f as default};
