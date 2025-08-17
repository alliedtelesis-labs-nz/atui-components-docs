import{j as e,M as i}from"./index-CCC5Q1D3.js";import{useMDXComponents as u}from"./index-B8CHl_FS.js";import{ar as s}from"./MermaidMarkdown-Z9d5FpXo.js";import"./iframe-DSUYMcEq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const r=`# atui-auto-open-menu

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                                                  | Type                                     | Default     |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| \`align\`     | \`align\`     | Alignment of opened menu element relative to trigger element.                                                                                                                                                                                | \`"end" \\| "start"\`                       | \`'start'\`   |
| \`autoclose\` | \`autoclose\` | Prevent closing of menu when options are selected. Used for multi-selection controls.                                                                                                                                                        | \`boolean\`                                | \`true\`      |
| \`disabled\`  | \`disabled\`  | Prevent opening menu                                                                                                                                                                                                                         | \`boolean\`                                | \`false\`     |
| \`offset_x\`  | \`offset_x\`  | Menu's x offset from edge in pixels. Only applied for origin_x = 'start' \\| 'end'                                                                                                                                                            | \`number\`                                 | \`0\`         |
| \`offset_y\`  | \`offset_y\`  | Menu's y offset from edge in pixels. Only applied for origin_y = 'top' \\| 'bottom'                                                                                                                                                           | \`number\`                                 | \`0\`         |
| \`position\`  | \`position\`  | Position of opened menu element relative to the trigger element.                                                                                                                                                                             | \`"bottom" \\| "left" \\| "right" \\| "top"\` | \`'bottom'\`  |
| \`role\`      | \`role\`      | Close the menu when the user clicks within the menu panel. Default for single selection menus.                                                                                                                                               | \`"listbox" \\| "menu"\`                    | \`'menu'\`    |
| \`trigger\`   | \`trigger\`   | Event type that triggers the menu open state. Click or Hover.                                                                                                                                                                                | \`"click" \\| "hover"\`                     | \`'click'\`   |
| \`width\`     | \`width\`     | String representing the 'width' style of the menu element ('auto' or 'NUMpx'). When not specified, defaults to trigger element width. To fit menu to content use width="fit-content" - Avoid width='auto' as this will result in 100% width. | \`string\`                                 | \`undefined\` |


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

 - [atui-column-manager](../table-components/atui-column-manager)
 - [atui-menu-cell](../table-components/cell-components/atui-menu-cell)
 - [atui-multi-select](../atui-multi-select)
 - [atui-select](../atui-select)
 - [atui-sidebar-submenu](../atui-sidebar/atui-sidebar-submenu)
 - [atui-table-export-menu](../table-components/atui-table-export-menu)
 - [atui-table-filter-menu](../table-components/atui-table-filter-menu)

### Graph
\`\`\`mermaid
graph TD;
  atui-column-manager --> atui-menu
  atui-menu-cell --> atui-menu
  atui-multi-select --> atui-menu
  atui-select --> atui-menu
  atui-sidebar-submenu --> atui-menu
  atui-table-export-menu --> atui-menu
  atui-table-filter-menu --> atui-menu
  style atui-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Menu"}),`
`,e.jsx(s,{md:r})]})}function f(n={}){const{wrapper:t}={...u(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{f as default};
