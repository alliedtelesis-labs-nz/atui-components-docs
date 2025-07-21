import{j as e,M as i}from"./index-B8R_n5k_.js";import{useMDXComponents as s}from"./index-B2Bfj9zn.js";import{ar as a}from"./MermaidMarkdown-Y_0hop0y.js";import"./iframe-CwMQwDnZ.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const r=`# atui-side-panel

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                           | Type                                                                                     | Default  |
| -------------- | -------------- | ------------------------------------- | ---------------------------------------------------------------------------------------- | -------- |
| \`collapsible\`  | \`collapsible\`  | Size of the sidebar when collapsed.   | \`"icon" \\| "none" \\| "offcanvas"\`                                                        | \`'icon'\` |
| \`default_open\` | \`default_open\` | Opens the sidebar by default when set | \`boolean\`                                                                                | \`true\`   |
| \`side\`         | \`side\`         | Position of the sidebar on the page   | \`"left" \\| "right"\`                                                                      | \`'left'\` |
| \`width\`        | \`width\`        | Width of the sidebar                  | \`"auto" \\| "menu" \\| "panel-lg" \\| "panel-md" \\| "panel-sm" \\| "panel-xl" \\| "panel-xs"\` | \`'menu'\` |


## Events

| Event               | Description                                                                                          | Type               |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ------------------ |
| \`atuiSidebarChange\` | Emits an even when the sidebar is toggled, with \`event.detail\` being true if the sidebar is now open | \`CustomEvent<any>\` |


## Methods

### \`getIsOpen() => Promise<boolean>\`

Getter method for the open state of the sidebar

#### Returns

Type: \`Promise<boolean>\`

The current open state of the sidebar

### \`toggleSidebar() => Promise<void>\`

Toggles the sidebar's open state.

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot                | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| \`"page-content"\`    | Content of the page                                                        |
| \`"sidebar-content"\` | Content displayed in the sidebar (likely to be atui-sidebar-menu elements) |
| \`"sidebar-footer"\`  | Footer displayed in the sidebar                                            |
| \`"sidebar-header"\`  | Header of the sidebar (likely to be atui-sidebar-trigger)                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Sidebar"}),`
`,e.jsx(a,{md:r})]})}function u(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{u as default};
