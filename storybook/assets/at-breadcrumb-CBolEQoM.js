import{j as e,M as i}from"./index-BLqYG9Eu.js";import{useMDXComponents as a}from"./index-BZEhjXiM.js";import{ar as s}from"./MermaidMarkdown-RVvYelxx.js";import"./iframe-DQIBDzbR.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const o=`# atui-breadcrumb

<!-- Auto Generated Below -->


## Overview

A navigation breadcrumb component showing the user's current location in a hierarchical structure.
Provides clickable path navigation with customizable separators and accessibility features.

## Properties

| Property           | Attribute          | Description                                                                                                       | Type                      | Default     |
| ------------------ | ------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------- |
| \`get_prefix\`       | --                 | Function to get the prefix for breadcrumbs.                                                                       | \`(idx: number) => string\` | \`() => ''\`  |
| \`prefix_delimiter\` | \`prefix_delimiter\` | Delimiter between the prefix and the prefix.                                                                      | \`string\`                  | \`''\`        |
| \`values\`           | --                 | Used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) automatically with the string values given | \`string[]\`                | \`undefined\` |


## Events

| Event       | Description                                                                                                   | Type                  |
| ----------- | ------------------------------------------------------------------------------------------------------------- | --------------------- |
| \`atuiClick\` | Emits when one of the breadcrumb-items is clicked, \`event.detail\` is the 0-based index of the breadcrumb-item | \`CustomEvent<number>\` |


## Slots

| Slot | Description                                                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------- |
|      | Can be used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) when \`values\` prop is not set |


## Dependencies

### Depends on

- [at-breadcrumb-item](at-breadcrumb-item)

### Graph
\`\`\`mermaid
graph TD;
  at-breadcrumb --> at-breadcrumb-item
  style at-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function r(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Breadcrumb"}),`
`,e.jsx(s,{md:o})]})}function l(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r()}export{l as default};
