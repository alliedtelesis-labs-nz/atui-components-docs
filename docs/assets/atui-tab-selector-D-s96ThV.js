import{j as t,M as i}from"./index-B8R_n5k_.js";import{useMDXComponents as o}from"./index-B2Bfj9zn.js";import{ar as r}from"./MermaidMarkdown-Y_0hop0y.js";import"./iframe-CwMQwDnZ.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const s=`# atui-tab-selector

<!-- Auto Generated Below -->


## Overview

### interface Tab
\`\`\`
{
  id: string;
  title: string;
}
\`\`\`

## Properties

| Property     | Attribute    | Description                                              | Type                         | Default        |
| ------------ | ------------ | -------------------------------------------------------- | ---------------------------- | -------------- |
| \`active_tab\` | \`active_tab\` | Sets the current active tab                              | \`string\`                     | \`undefined\`    |
| \`hide_nav\`   | \`hide_nav\`   | hide navigation when you want to provide custom controls | \`boolean\`                    | \`false\`        |
| \`layout\`     | \`layout\`     | Layout of the tabs                                       | \`"horizontal" \\| "vertical"\` | \`'horizontal'\` |
| \`tabs\`       | \`tabs\`       | List of tabs the selector will have                      | \`Tab[]\`                      | \`[]\`           |


## Events

| Event        | Description                                          | Type                  |
| ------------ | ---------------------------------------------------- | --------------------- |
| \`atuiChange\` | Emits the id of the tab when a new active_tab is set | \`CustomEvent<string>\` |


## Methods

### \`getActiveTab() => Promise<string>\`

Gets the current active tab

#### Returns

Type: \`Promise<string>\`

The current active_tab value

### \`setActiveTab(value: string) => Promise<void>\`

Sets the current active tab

#### Parameters

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| \`value\` | \`string\` | - The tab id to set as active |

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot            | Description                         |
| --------------- | ----------------------------------- |
| \`"nav-content"\` | Content to be placed after the tabs |


## Dependencies

### Depends on

- [atui-tab](atui-tab)
- [atui-layout](../atui-layout)

### Graph
\`\`\`mermaid
graph TD;
  atui-tab-selector --> atui-tab
  atui-tab-selector --> atui-layout
  style atui-tab-selector fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Tab Selector"}),`
`,t.jsx(r,{md:s})]})}function h(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{h as default};
