import{j as t,M as i}from"./index-DtoPCQIW.js";import{useMDXComponents as l}from"./index-L0bunzy-.js";import{ar as a}from"./MermaidMarkdown-Dvt209OR.js";import"./iframe-Cf5IOtsu.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const u=`# atui-tooltip

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                     | Type                                     | Default    |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| \`is_visible\` | \`is_visible\` | If false, forces the tooltip to hide. If true, tooltip will show when trigger is hovered        | \`boolean\`                                | \`true\`     |
| \`offset\`     | \`offset\`     | Offset in pixels from the edge of the trigger element                                           | \`number\`                                 | \`8\`        |
| \`position\`   | \`position\`   | Position of the tooltip content relative to the atui-tooltip                                    | \`"bottom" \\| "left" \\| "right" \\| "top"\` | \`'bottom'\` |
| \`width\`      | \`width\`      | String representing the 'max-width' style of the tooltip element (e.g., 'auto', '200px', '50%') | \`string\`                                 | \`'auto'\`   |


## Slots

| Slot                | Description                         |
| ------------------- | ----------------------------------- |
| \`"tooltip-content"\` | Content to go inside of the tooltip |
| \`"tooltip-trigger"\` | Shows the tooltip when hovered      |


## Dependencies

### Used by

 - [atui-color-status-cell](../table-components/cell-components/atui-color-status-cell)
 - [atui-column-manager](../table-components/atui-column-manager)
 - [atui-form-label](../atui-form-label)
 - [atui-icon-cell](../table-components/cell-components/atui-icon-cell)
 - [atui-image-cell](../table-components/cell-components/atui-image-cell)
 - [atui-list-selector](../atui-list-selector)
 - [atui-menu-cell](../table-components/cell-components/atui-menu-cell)
 - [atui-multi-btn-cell](../table-components/cell-components/atui-multi-btn-cell)
 - [atui-prompt-message](../prompt/atui-prompt-message)
 - [atui-status-bar](../atui-status-bar)
 - [atui-table-export-menu](../table-components/atui-table-export-menu)
 - [atui-table-filter-menu](../table-components/atui-table-filter-menu)
 - [atui-text-badge-cell](../table-components/cell-components/atui-text-badge-cell)
 - [atui-text-cell](../table-components/cell-components/atui-text-cell)
 - [atui-text-icon-cell](../table-components/cell-components/atui-text-icon-cell)
 - [atui-text-image-cell](../table-components/cell-components/atui-text-image-cell)
 - [atui-text-status-cell](../table-components/cell-components/atui-text-status-cell)
 - [atui-tree](../atui-tree)

### Graph
\`\`\`mermaid
graph TD;
  atui-color-status-cell --> atui-tooltip
  atui-column-manager --> atui-tooltip
  atui-form-label --> atui-tooltip
  atui-icon-cell --> atui-tooltip
  atui-image-cell --> atui-tooltip
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
  atui-tree --> atui-tooltip
  style atui-tooltip fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Tooltip"}),`
`,t.jsx(a,{md:u})]})}function f(e={}){const{wrapper:o}={...l(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n()}export{f as default};
