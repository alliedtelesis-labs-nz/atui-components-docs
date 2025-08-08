import{j as e,M as r}from"./index-B84iGnxY.js";import{useMDXComponents as o}from"./index-D1O4mhvG.js";import{ar as s}from"./MermaidMarkdown-BJgRPzVL.js";import"./iframe-Bm4-r1Ba.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const a=`# atui-tree

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

| Property    | Attribute   | Description                                 | Type                   | Default     |
| ----------- | ----------- | ------------------------------------------- | ---------------------- | ----------- |
| \`item_list\` | \`item_list\` | List of items to be displayed in the tree   | \`TreeNode[]\`           | \`undefined\` |
| \`size\`      | \`size\`      | Set the size of the tree button, default sm | \`"lg" \\| "md" \\| "sm"\` | \`'sm'\`      |


## Events

| Event       | Description                      | Type                    |
| ----------- | -------------------------------- | ----------------------- |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<TreeNode>\` |


## Dependencies

### Depends on

- [atui-tooltip](../atui-tooltip)
- [atui-tree-item](atui-tree-item)

### Graph
\`\`\`mermaid
graph TD;
  atui-tree --> atui-tooltip
  atui-tree --> atui-tree-item
  style atui-tree fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Tree"}),`
`,e.jsx(s,{md:a})]})}function f(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i()}export{f as default};
