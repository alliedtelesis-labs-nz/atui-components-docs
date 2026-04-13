import{j as e,M as o}from"./index-Di0HHf0m.js";import{useMDXComponents as r}from"./index-Bst0uJWx.js";import{at as s}from"./MermaidMarkdown-C-uOgDnO.js";import"./iframe-BFBkkCOV.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# atui-tree

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
| \`item_list\` | --        | List of items to be displayed in the tree   | \`AtITreeNode[]\`        | \`undefined\` |
| \`size\`      | \`size\`    | Set the size of the tree button, default sm | \`"lg" \\| "md" \\| "sm"\` | \`'sm'\`      |


## Events

| Event       | Description                      | Type                       |
| ----------- | -------------------------------- | -------------------------- |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<AtITreeNode>\` |


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
`;function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Tree"}),`
`,e.jsx(s,{md:a})]})}function f(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i()}export{f as default};
