import{j as e,M as i}from"./index-DkSNfyI2.js";import{useMDXComponents as a}from"./index-Ch5oIDYo.js";import{ar as s}from"./MermaidMarkdown-vmFMeWin.js";import"./iframe-DKLakCCP.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const o=`# atui-breadcrumb

<!-- Auto Generated Below -->


## Overview

A navigation breadcrumb component showing the user's current location in a hierarchical structure.
Provides clickable path navigation with customizable separators and accessibility features.

## Properties

| Property           | Attribute          | Description                                                                                                       | Type                      | Default     |
| ------------------ | ------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------- |
| \`get_prefix\`       | \`get_prefix\`       | Function to get the prefix for breadcrumbs.                                                                       | \`(idx: number) => string\` | \`() => ''\`  |
| \`prefix_delimiter\` | \`prefix_delimiter\` | Delimiter between the prefix and the prefix.                                                                      | \`string\`                  | \`''\`        |
| \`values\`           | \`values\`           | Used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) automatically with the string values given | \`string[]\`                | \`undefined\` |


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
`;function r(t){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Breadcrumb"}),`
`,e.jsx(s,{md:o})]})}function l(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r()}export{l as default};
