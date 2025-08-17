import{j as t,M as s}from"./index-CCC5Q1D3.js";import{useMDXComponents as l}from"./index-B8CHl_FS.js";import{ar as a}from"./MermaidMarkdown-Z9d5FpXo.js";import"./iframe-DSUYMcEq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const o=`# atui-chip-list

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

| Event            | Description                                                | Type                    |
| ---------------- | ---------------------------------------------------------- | ----------------------- |
| \`atuiRemoveChip\` | Emitted when the 'X' on a chip, or 'Clear All' is clicked. | \`CustomEvent<string[]>\` |


## Slots

| Slot | Description                                     |
| ---- | ----------------------------------------------- |
|      | Placed after the chips & the 'clear all' button |


## Dependencies

### Used by

 - [atui-chip-list-cell](../table-components/cell-components/atui-chip-list-cell)
 - [atui-multi-select](../atui-multi-select)

### Depends on

- [atui-badge](../atui-badge)
- [atui-button](../atui-button)

### Graph
\`\`\`mermaid
graph TD;
  atui-chip-list --> atui-badge
  atui-chip-list --> atui-button
  atui-button --> atui-loading
  atui-chip-list-cell --> atui-chip-list
  atui-multi-select --> atui-chip-list
  style atui-chip-list fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Chip List"}),`
`,t.jsx(a,{md:o})]})}function m(n={}){const{wrapper:e}={...l(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i()}export{m as default};
