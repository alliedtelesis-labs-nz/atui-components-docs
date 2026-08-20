import{j as t,M as o}from"./index-B7xxERmP.js";import{useMDXComponents as s}from"./index-Dfye4hpB.js";import{at as a}from"./MermaidMarkdown-BuuIx2Yk.js";import"./iframe-0-pUWuQK.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# at-chip-list

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute               | Description                                                                                                                                                                                                                                                                           | Type           | Default     |
| ----------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------- |
| \`chips\`                 | --                      | Items in the chip list.                                                                                                                                                                                                                                                               | \`string[]\`     | \`undefined\` |
| \`disabled\`              | \`disabled\`              | Disables the list of chips. Prevents removing a chip.                                                                                                                                                                                                                                 | \`boolean\`      | \`undefined\` |
| \`readonly\`              | \`readonly\`              | Disables the list of chips but keeps the text readable. Prevents removing a chip.                                                                                                                                                                                                     | \`boolean\`      | \`undefined\` |
| \`show_clear_all\`        | \`show_clear_all\`        | Shows the 'Clear All' button                                                                                                                                                                                                                                                          | \`boolean\`      | \`true\`      |
| \`show_overflow_counter\` | \`show_overflow_counter\` | Keeps the chips on a single line, replacing those that do not fit with a \`+N\` counter that lists them on hover. Off by default so lists that are meant to grow — a multi-select input, for example — keep wrapping. Use it where the container height is fixed, such as a table cell. | \`boolean\`      | \`false\`     |
| \`size\`                  | \`size\`                  | Size of the chips. Determines padding and font-size. For use in input chip lists.                                                                                                                                                                                                     | \`"lg" \\| "sm"\` | \`'lg'\`      |


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
- [at-icon](../at-icon)
- [at-tooltip](../at-tooltip)
- [at-button](../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-chip-list --> at-badge
  at-chip-list --> at-icon
  at-chip-list --> at-tooltip
  at-chip-list --> at-button
  at-button --> at-loading
  at-chip-list-cell --> at-chip-list
  at-multi-select --> at-chip-list
  style at-chip-list fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Chip List"}),`
`,t.jsx(a,{md:l})]})}function u(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{u as default};
