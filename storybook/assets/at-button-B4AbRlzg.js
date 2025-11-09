import{j as t,M as i}from"./index-CvWuK9MY.js";import{useMDXComponents as o}from"./index-Fk5n-P1w.js";import{ar as l}from"./MermaidMarkdown-B-D0E52i.js";import"./iframe-DKCRiMf5.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`# atui-button

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute          | Description                                                                            | Type                                                                                                                                                                   | Default     |
| ------------------ | ------------------ | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`disabled\`         | \`disabled\`         | When set the button's styling will change and will no longer be interactive            | \`boolean\`                                                                                                                                                              | \`false\`     |
| \`icon\`             | \`icon\`             | Material icon to be displayed before the label within the button                       | \`string\`                                                                                                                                                               | \`undefined\` |
| \`icon_after\`       | \`icon_after\`       | Material icon to be displayed after the label within the button                        | \`string\`                                                                                                                                                               | \`undefined\` |
| \`in_progress\`      | \`in_progress\`      | When set, will display a loading spinner inside the button and hide all labels & icons | \`boolean\`                                                                                                                                                              | \`false\`     |
| \`label\`            | \`label\`            | Label to be displayed within the button                                                | \`string\`                                                                                                                                                               | \`undefined\` |
| \`size\`             | \`size\`             | Size of the button                                                                     | \`"lg" \\| "md" \\| "sm"\`                                                                                                                                                 | \`'lg'\`      |
| \`spinner_delay_ms\` | \`spinner_delay_ms\` | Delay period on spinner                                                                | \`number\`                                                                                                                                                               | \`1000\`      |
| \`submit\`           | \`submit\`           | If set, will request submit from the closest form element when clicked                 | \`boolean\`                                                                                                                                                              | \`false\`     |
| \`type\`             | \`type\`             | Theme of the button. Default primary                                                   | \`"destructive" \\| "destructiveOutline" \\| "destructiveText" \\| "primary" \\| "primaryOutline" \\| "primaryText" \\| "secondary" \\| "secondaryOutline" \\| "secondaryText"\` | \`'primary'\` |


## Events

| Event       | Description                      | Type                   |
| ----------- | -------------------------------- | ---------------------- |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<AtEvent>\` |


## Slots

| Slot | Description                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
|      | Placed after the label, but before the icon_right. Can be used as a replacement for the label prop. |


## Dependencies

### Used by

 - [at-chip-list](../at-chip-list)
 - [at-column-manager](../table-components/at-column-manager)
 - [at-custom-time-range](../at-time-range/at-custom-time-range)
 - [at-input](../at-input)
 - [at-input-numeric](../at-input-numeric)
 - [at-menu-cell](../table-components/cell-components/at-menu-cell)
 - [at-multi-btn-cell](../table-components/cell-components/at-multi-btn-cell)
 - [at-multi-select](../at-multi-select)
 - [at-prompt-container](../prompt-components/at-prompt-container)
 - [at-prompt-input](../prompt-components/at-prompt-input)
 - [at-prompt-message](../prompt-components/at-prompt-message)
 - [at-search](../at-search)
 - [at-select](../at-select)
 - [at-side-panel](../at-side-panel)
 - [at-table-export-menu](../table-components/at-table-export-menu)
 - [at-table-filter-menu](../table-components/at-table-filter-menu)
 - [at-table-filters](../table-components/at-table-filters)
 - [at-table-pagination](../table-components/at-table-pagination)
 - [at-time-with-unit](../at-time-range/at-time-with-unit)

### Depends on

- [at-loading](../at-loading)

### Graph
\`\`\`mermaid
graph TD;
  at-button --> at-loading
  at-chip-list --> at-button
  at-column-manager --> at-button
  at-custom-time-range --> at-button
  at-input --> at-button
  at-input-numeric --> at-button
  at-menu-cell --> at-button
  at-multi-btn-cell --> at-button
  at-multi-select --> at-button
  at-prompt-container --> at-button
  at-prompt-input --> at-button
  at-prompt-message --> at-button
  at-search --> at-button
  at-select --> at-button
  at-side-panel --> at-button
  at-table-export-menu --> at-button
  at-table-filter-menu --> at-button
  at-table-filters --> at-button
  at-table-pagination --> at-button
  at-time-with-unit --> at-button
  style at-button fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Button"}),`
`,t.jsx(l,{md:r})]})}function d(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{d as default};
