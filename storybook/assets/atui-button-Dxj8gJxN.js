import{j as t,M as a}from"./index-DL45dN05.js";import{useMDXComponents as u}from"./index-2hJifa-C.js";import{ar as o}from"./MermaidMarkdown-B5WbBwOq.js";import"./iframe-BL0WfEXT.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";const l=`# atui-button

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
| \`type\`             | \`type\`             | Styling of the button                                                                  | \`"destructive" \\| "destructiveOutline" \\| "destructiveText" \\| "primary" \\| "primaryOutline" \\| "primaryText" \\| "secondary" \\| "secondaryOutline" \\| "secondaryText"\` | \`'primary'\` |


## Events

| Event       | Description                      | Type                     |
| ----------- | -------------------------------- | ------------------------ |
| \`atuiClick\` | Emits when the button is clicked | \`CustomEvent<AtuiEvent>\` |


## Slots

| Slot | Description                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
|      | Placed after the label, but before the icon_right. Can be used as a replacement for the label prop. |


## Dependencies

### Used by

 - [atui-chip-list](../atui-chip-list)
 - [atui-column-manager](../table-components/atui-column-manager)
 - [atui-custom-time-range](../atui-time-range/atui-custom-time-range)
 - [atui-input](../atui-input)
 - [atui-input-numeric](../atui-input-numeric)
 - [atui-menu-cell](../table-components/cell-components/atui-menu-cell)
 - [atui-multi-btn-cell](../table-components/cell-components/atui-multi-btn-cell)
 - [atui-multi-select](../atui-multi-select)
 - [atui-prompt-container](../prompt-components/atui-prompt-container)
 - [atui-prompt-input](../prompt-components/atui-prompt-input)
 - [atui-prompt-message](../prompt-components/atui-prompt-message)
 - [atui-search](../atui-search)
 - [atui-select](../atui-select)
 - [atui-sidebar-trigger](../atui-sidebar/atui-sidebar-trigger)
 - [atui-table-export-menu](../table-components/atui-table-export-menu)
 - [atui-table-filter-menu](../table-components/atui-table-filter-menu)
 - [atui-table-filters](../table-components/atui-table-filters)
 - [atui-table-pagination](../table-components/atui-table-pagination)
 - [atui-time-with-unit](../atui-time-range/atui-time-with-unit)

### Depends on

- [atui-loading](../atui-loading)

### Graph
\`\`\`mermaid
graph TD;
  atui-button --> atui-loading
  atui-chip-list --> atui-button
  atui-column-manager --> atui-button
  atui-custom-time-range --> atui-button
  atui-input --> atui-button
  atui-input-numeric --> atui-button
  atui-menu-cell --> atui-button
  atui-multi-btn-cell --> atui-button
  atui-multi-select --> atui-button
  atui-prompt-container --> atui-button
  atui-prompt-input --> atui-button
  atui-prompt-message --> atui-button
  atui-search --> atui-button
  atui-select --> atui-button
  atui-sidebar-trigger --> atui-button
  atui-table-export-menu --> atui-button
  atui-table-filter-menu --> atui-button
  atui-table-filters --> atui-button
  atui-table-pagination --> atui-button
  atui-time-with-unit --> atui-button
  style atui-button fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Button"}),`
`,t.jsx(o,{md:l})]})}function d(n={}){const{wrapper:e}={...u(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i()}export{d as default};
