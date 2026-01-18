import{j as t,M as o}from"./index-gpB6NGc_.js";import{useMDXComponents as i}from"./index-17hmMDh5.js";import{ar as r}from"./MermaidMarkdown-BtKPFb_H.js";import"./iframe-BKyXi-vQ.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-tabs

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
| \`fill\`       | \`fill\`       | If true, tabs will fill the width of the container       | \`boolean\`                    | \`false\`        |
| \`hide_nav\`   | \`hide_nav\`   | hide navigation when you want to provide custom controls | \`boolean\`                    | \`false\`        |
| \`layout\`     | \`layout\`     | Layout of the tabs                                       | \`"horizontal" \\| "vertical"\` | \`'horizontal'\` |
| \`tabs\`       | --           | List of tabs the selector will have                      | \`Tab[]\`                      | \`[]\`           |


## Events

| Event           | Description                                          | Type                  |
| --------------- | ---------------------------------------------------- | --------------------- |
| \`atuiTabChange\` | Emits the id of the tab when a new active_tab is set | \`CustomEvent<string>\` |


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

| Slot            | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| \`"nav-content"\` | Content to be placed after the tabs                                       |
| \`"tab-content"\` | Used to place your own at-tab-content component                           |
| \`"tab-list"\`    | Used to place your own at-tab components instead of using the 'tabs' prop |


## Dependencies

### Depends on

- [at-tab-trigger](at-tab-trigger)
- [at-layout](../at-layout)

### Graph
\`\`\`mermaid
graph TD;
  at-tabs --> at-tab-trigger
  at-tabs --> at-layout
  style at-tabs fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Tabs"}),`
`,t.jsx(r,{md:s})]})}function m(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{m as default};
