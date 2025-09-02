import{j as t,M as i}from"./index-DL45dN05.js";import{useMDXComponents as l}from"./index-2hJifa-C.js";import{ar as a}from"./MermaidMarkdown-B5WbBwOq.js";import"./iframe-BL0WfEXT.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";const s=`# atui-tooltip

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                          | Type                                     | Default     |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| \`align\`      | \`align\`      | Alignment of opened tooltip element relative to trigger element.                                     | \`"center" \\| "end" \\| "start"\`           | \`'center'\`  |
| \`delay\`      | \`delay\`      | Delay before showing and hiding the tooltip when interacting with the trigger element.               | \`number\`                                 | \`150\`       |
| \`disabled\`   | \`disabled\`   | Prevent opening tooltip                                                                              | \`boolean\`                                | \`false\`     |
| \`offset\`     | \`offset\`     | Offset in pixels from the edge of the trigger element                                                | \`number\`                                 | \`8\`         |
| \`position\`   | \`position\`   | Position of opened tooltip element relative to the trigger element.                                  | \`"bottom" \\| "left" \\| "right" \\| "top"\` | \`'top'\`     |
| \`trigger_id\` | \`trigger_id\` | Data-id of an external element to use as the trigger. When provided, the trigger slot is not needed. | \`string\`                                 | \`undefined\` |
| \`width\`      | \`width\`      | Maximum width constraint for the tooltip in pixels. Defaults to 300px for readability.               | \`string\`                                 | \`'200px'\`   |


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

 - [atui-column-manager](../table-components/atui-column-manager)
 - [atui-form-label](../atui-form-label)
 - [atui-list-selector](../atui-list-selector)
 - [atui-menu-cell](../table-components/cell-components/atui-menu-cell)
 - [atui-multi-btn-cell](../table-components/cell-components/atui-multi-btn-cell)
 - [atui-prompt-message](../prompt-components/atui-prompt-message)
 - [atui-status-bar](../atui-status-bar)
 - [atui-table-export-menu](../table-components/atui-table-export-menu)
 - [atui-table-filter-menu](../table-components/atui-table-filter-menu)
 - [atui-text-badge-cell](../table-components/cell-components/atui-text-badge-cell)
 - [atui-text-cell](../table-components/cell-components/atui-text-cell)
 - [atui-text-icon-cell](../table-components/cell-components/atui-text-icon-cell)
 - [atui-text-image-cell](../table-components/cell-components/atui-text-image-cell)
 - [atui-text-status-cell](../table-components/cell-components/atui-text-status-cell)
 - [atui-title-subtitle-cell](../table-components/cell-components/atui-title-subtitle-cell)
 - [atui-tree](../atui-tree)

### Graph
\`\`\`mermaid
graph TD;
  atui-column-manager --> atui-tooltip
  atui-form-label --> atui-tooltip
  atui-list-selector --> atui-tooltip
  atui-menu-cell --> atui-tooltip
  atui-multi-btn-cell --> atui-tooltip
  atui-prompt-message --> atui-tooltip
  atui-status-bar --> atui-tooltip
  atui-table-export-menu --> atui-tooltip
  atui-table-filter-menu --> atui-tooltip
  atui-text-badge-cell --> atui-tooltip
  atui-text-cell --> atui-tooltip
  atui-text-icon-cell --> atui-tooltip
  atui-text-image-cell --> atui-tooltip
  atui-text-status-cell --> atui-tooltip
  atui-title-subtitle-cell --> atui-tooltip
  atui-tree --> atui-tooltip
  style atui-tooltip fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Tooltip"}),`
`,t.jsx(a,{md:s})]})}function g(e={}){const{wrapper:n}={...l(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{g as default};
