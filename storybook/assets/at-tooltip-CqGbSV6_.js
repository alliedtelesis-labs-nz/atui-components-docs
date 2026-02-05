import{j as t,M as l}from"./index-4FuYFI1f.js";import{useMDXComponents as a}from"./index-BvwN1V-S.js";import{ar as i}from"./MermaidMarkdown-Bj_FRAIt.js";import"./iframe-BUGaSx2V.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-tooltip

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                                                | Type                                     | Default     |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| \`align\`      | \`align\`      | Alignment of opened tooltip element relative to trigger element.                                                                                           | \`"center" \\| "end" \\| "start"\`           | \`'center'\`  |
| \`delay\`      | \`delay\`      | Delay before showing and hiding the tooltip when interacting with the trigger element.                                                                     | \`number\`                                 | \`150\`       |
| \`disabled\`   | \`disabled\`   | Prevent opening tooltip                                                                                                                                    | \`boolean\`                                | \`false\`     |
| \`offset\`     | \`offset\`     | Offset in pixels from the edge of the trigger element                                                                                                      | \`number\`                                 | \`8\`         |
| \`position\`   | \`position\`   | Position of opened tooltip element relative to the trigger element.                                                                                        | \`"bottom" \\| "left" \\| "right" \\| "top"\` | \`'top'\`     |
| \`trigger_id\` | \`trigger_id\` | Target an external element to use as the trigger. When provided, clicking an element wia matching data-tooltip attribute value will toggle the side panel. | \`string\`                                 | \`undefined\` |
| \`width\`      | \`width\`      | Maximum width constraint for the tooltip in pixels. Defaults to 300px for readability.                                                                     | \`string\`                                 | \`'200px'\`   |


## Methods

### \`closeTooltip() => Promise<void>\`

Closes the tooltip.

#### Returns

Type: \`Promise<void>\`



### \`openTooltip() => Promise<void>\`

Opens the tooltip.

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot                | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| \`"default"\`         | Content to go inside the tooltip                                           |
| \`"tooltip-trigger"\` | Shows the tooltip when hovered (only used when trigger_id is not provided) |


## Dependencies

### Used by

 - [at-column-manager](../table-components/at-column-manager)
 - [at-form-label](../at-form-label)
 - [at-list-selector](../at-list-selector)
 - [at-menu-cell](../table-components/cell-components/at-menu-cell)
 - [at-multi-btn-cell](../table-components/cell-components/at-multi-btn-cell)
 - [at-prompt-message](../prompt-components/at-prompt-message)
 - [at-status-bar](../at-status-bar)
 - [at-table-export-menu](../table-components/at-table-export-menu)
 - [at-table-filter-menu](../table-components/at-table-filter-menu)
 - [at-text-badge-cell](../table-components/cell-components/at-text-badge-cell)
 - [at-text-cell](../table-components/cell-components/at-text-cell)
 - [at-text-icon-cell](../table-components/cell-components/at-text-icon-cell)
 - [at-text-image-cell](../table-components/cell-components/at-text-image-cell)
 - [at-text-status-cell](../table-components/cell-components/at-text-status-cell)
 - [at-title-subtitle-cell](../table-components/cell-components/at-title-subtitle-cell)
 - [at-tree](../at-tree)

### Graph
\`\`\`mermaid
graph TD;
  at-column-manager --> at-tooltip
  at-form-label --> at-tooltip
  at-list-selector --> at-tooltip
  at-menu-cell --> at-tooltip
  at-multi-btn-cell --> at-tooltip
  at-prompt-message --> at-tooltip
  at-status-bar --> at-tooltip
  at-table-export-menu --> at-tooltip
  at-table-filter-menu --> at-tooltip
  at-text-badge-cell --> at-tooltip
  at-text-cell --> at-tooltip
  at-text-icon-cell --> at-tooltip
  at-text-image-cell --> at-tooltip
  at-text-status-cell --> at-tooltip
  at-title-subtitle-cell --> at-tooltip
  at-tree --> at-tooltip
  style at-tooltip fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Tooltip"}),`
`,t.jsx(i,{md:s})]})}function u(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{u as default};
