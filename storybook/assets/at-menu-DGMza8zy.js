import{j as e,M as i}from"./index-Cg48pWXi.js";import{useMDXComponents as r}from"./index-BhINsoOH.js";import{ar as s}from"./MermaidMarkdown-CEydFj9g.js";import"./iframe-nDnBDswv.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# atui-auto-open-menu

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                                                                                                                                  | Type                                     | Default     |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| \`align\`      | \`align\`      | Alignment of opened menu element relative to trigger element.                                                                                                                                                                                | \`"end" \\| "start"\`                       | \`'start'\`   |
| \`autoclose\`  | \`autoclose\`  | Prevent closing of menu when options are selected. Used for multi-selection controls.                                                                                                                                                        | \`boolean\`                                | \`true\`      |
| \`disabled\`   | \`disabled\`   | Prevent opening menu                                                                                                                                                                                                                         | \`boolean\`                                | \`false\`     |
| \`offset_x\`   | \`offset_x\`   | Menu's x offset from edge in pixels. Only applied for origin_x = 'start' \\| 'end'                                                                                                                                                            | \`number\`                                 | \`0\`         |
| \`offset_y\`   | \`offset_y\`   | Menu's y offset from edge in pixels. Only applied for origin_y = 'top' \\| 'bottom'                                                                                                                                                           | \`number\`                                 | \`0\`         |
| \`position\`   | \`position\`   | Position of opened menu element relative to the trigger element.                                                                                                                                                                             | \`"bottom" \\| "left" \\| "right" \\| "top"\` | \`'bottom'\`  |
| \`role\`       | \`role\`       | Close the menu when the user clicks within the menu panel. Default for single selection menus.                                                                                                                                               | \`"listbox" \\| "menu"\`                    | \`'menu'\`    |
| \`trigger\`    | \`trigger\`    | Event type that triggers the menu open state. Click or Hover.                                                                                                                                                                                | \`"click" \\| "hover"\`                     | \`'click'\`   |
| \`trigger_id\` | \`trigger_id\` | Data-id of an external element to use as the trigger. When provided, the trigger slot is not needed.                                                                                                                                         | \`string\`                                 | \`undefined\` |
| \`width\`      | \`width\`      | String representing the 'width' style of the menu element ('auto' or 'NUMpx'). When not specified, defaults to trigger element width. To fit menu to content use width="fit-content" - Avoid width='auto' as this will result in 100% width. | \`string\`                                 | \`undefined\` |


## Events

| Event                 | Description                                    | Type                   |
| --------------------- | ---------------------------------------------- | ---------------------- |
| \`atuiMenuStateChange\` | Emits an event containing the open menu state. | \`CustomEvent<boolean>\` |


## Methods

### \`closeMenu() => Promise<void>\`

Closes the dropdown menu.

#### Returns

Type: \`Promise<void>\`



### \`getIsOpen() => Promise<boolean>\`

Return the current menu open state

#### Returns

Type: \`Promise<boolean>\`



### \`openMenu() => Promise<void>\`

Opens the dropdown menu.

#### Returns

Type: \`Promise<void>\`



### \`toggleMenu() => Promise<void>\`

Toggles the dropdown menu's open state.

#### Returns

Type: \`Promise<void>\`




## Dependencies

### Used by

 - [at-column-manager](../table-components/at-column-manager)
 - [at-menu-cell](../table-components/cell-components/at-menu-cell)
 - [at-multi-select](../at-multi-select)
 - [at-select](../at-select)
 - [at-sidebar-submenu](../at-sidebar/at-sidebar-submenu)
 - [at-table-export-menu](../table-components/at-table-export-menu)
 - [at-table-filter-menu](../table-components/at-table-filter-menu)

### Graph
\`\`\`mermaid
graph TD;
  at-column-manager --> at-menu
  at-menu-cell --> at-menu
  at-multi-select --> at-menu
  at-select --> at-menu
  at-sidebar-submenu --> at-menu
  at-table-export-menu --> at-menu
  at-table-filter-menu --> at-menu
  style at-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Menu"}),`
`,e.jsx(s,{md:a})]})}function g(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{g as default};
