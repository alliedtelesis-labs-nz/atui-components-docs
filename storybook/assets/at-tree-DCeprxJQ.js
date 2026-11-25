import{j as e,M as o}from"./index-BamMed5w.js";import{useMDXComponents as r}from"./index-DvZa8WVL.js";import{at as s}from"./MermaidMarkdown-C7m50irR.js";import"./iframe-P6MMPvSQ.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# at-tree

<!-- Auto Generated Below -->


## Overview

### \`\`\`interface AtITreeNode\`\`\`
\`\`\`
 id: string;
 displayName: string;
 children: AtITreeNode[];
 selected?: boolean;
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


## Slots

| Slot | Description                                                      |
| ---- | ---------------------------------------------------------------- |
|      | Use this slot to add custom elements before the tree navigation. |


## Dependencies

### Depends on

- [at-tree-item](at-tree-item)
- [at-tooltip](../at-tooltip)

### Graph
\`\`\`mermaid
graph TD;
  at-tree --> at-tree-item
  at-tree --> at-tooltip
  at-tree-item --> at-icon
  style at-tree fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Tree"}),`
`,e.jsx(s,{md:a})]})}function f(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i()}export{f as default};
