import{j as t,M as s}from"./index-aGh7eK9e.js";import{useMDXComponents as l}from"./index-CD6OJBFy.js";import{ar as a}from"./MermaidMarkdown-CKMJNd15.js";import"./iframe-D5amC9vs.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const o=`# atui-chip-list

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                       | Type           | Default     |
| ---------------- | ---------------- | --------------------------------------------------------------------------------- | -------------- | ----------- |
| \`chips\`          | \`chips\`          | Items in the chip list.                                                           | \`string[]\`     | \`undefined\` |
| \`disabled\`       | \`disabled\`       | Disables the list of chips. Prevents removing a chip.                             | \`boolean\`      | \`undefined\` |
| \`readonly\`       | \`readonly\`       | Disables the list of chips but keeps the text readable. Prevents removing a chip. | \`boolean\`      | \`undefined\` |
| \`show_clear_all\` | \`show_clear_all\` | Shows the 'Clear All' button                                                      | \`boolean\`      | \`true\`      |
| \`size\`           | \`size\`           | Size of the chips. Determines padding and font-size. For use in input chip lists. | \`"lg" \\| "sm"\` | \`'lg'\`      |


## Events

| Event          | Description                                                | Type                    |
| -------------- | ---------------------------------------------------------- | ----------------------- |
| \`atRemoveChip\` | Emitted when the 'X' on a chip, or 'Clear All' is clicked. | \`CustomEvent<string[]>\` |


## Slots

| Slot | Description                                     |
| ---- | ----------------------------------------------- |
|      | Placed after the chips & the 'clear all' button |


## Dependencies

### Used by

 - [at-chip-list-cell](../table-components/cell-components/at-chip-list-cell)
 - [at-multi-select](../at-multi-select)

### Depends on

- [at-badge](../at-badge)
- [at-button](../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-chip-list --> at-badge
  at-chip-list --> at-button
  at-button --> at-loading
  at-chip-list-cell --> at-chip-list
  at-multi-select --> at-chip-list
  style at-chip-list fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Chip List"}),`
`,t.jsx(a,{md:o})]})}function u(n={}){const{wrapper:e}={...l(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i()}export{u as default};
