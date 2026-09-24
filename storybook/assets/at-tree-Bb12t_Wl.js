import{j as t,M as o}from"./index-9I9KMh4C.js";import{useMDXComponents as r}from"./index-CIl5Q_7I.js";import{at as s}from"./MermaidMarkdown-vP28IkqT.js";import"./iframe-CueZv120.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# at-tree

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
  at-tree-item --> at-icon
  style at-tree fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Tree"}),`
`,t.jsx(s,{md:a})]})}function f(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{f as default};
