import{j as t,M as r}from"./index-B4ch0DdM.js";import{useMDXComponents as i}from"./index-DEDEVNXg.js";import{at as d}from"./MermaidMarkdown-BLNYmhMR.js";import"./iframe-DQILdWCH.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# at-dashboard



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute     | Description                                                                                                                                                                                                                                                                 | Type                       | Default     |
| -------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| \`drag_handle\`  | \`drag_handle\` | Optional CSS selector that restricts where drag can be initiated. When set, users can only drag widgets by grabbing elements matching this selector (e.g. '[data-drag-handle]' for card headers). When not set, the entire widget surface is draggable (GridStack default). | \`string\`                   | \`undefined\` |
| \`read_only\`    | \`read_only\`   | When true the dashboard is read-only: widgets keep their positions and sizes but cannot be dragged, resized or deleted (the per-widget menu is hidden). Use for fixed/system dashboards whose layout is owned elsewhere.                                                    | \`boolean\`                  | \`false\`     |
| \`widget_items\` | --            | Array of dashboard widget items to display in the grid layout.                                                                                                                                                                                                              | \`AtICustomGridStackItem[]\` | \`[]\`        |


## Events

| Event             | Description                                                          | Type                                  |
| ----------------- | -------------------------------------------------------------------- | ------------------------------------- |
| \`changedItem\`     | Emitted when a widget's position or size changes in the grid.        | \`CustomEvent<AtICustomGridStackItem>\` |
| \`editItem\`        | Emitted when a widget's Edit action is triggered from the dashboard. | \`CustomEvent<AtICustomGridStackItem>\` |
| \`removedItem\`     | Emitted when a widget is removed from the dashboard.                 | \`CustomEvent<AtICustomGridStackItem>\` |
| \`resizeDragEvent\` | Emitted when a widget finishes resizing or dragging.                 | \`CustomEvent<AtICustomGridStackItem>\` |


## Dependencies

### Depends on

- [at-menu](../at-menu)
- [at-button](../at-button)
- [at-icon](../at-icon)
- [at-menu-item](../at-menu/at-menu-item)

### Graph
\`\`\`mermaid
graph TD;
  at-dashboard --> at-menu
  at-dashboard --> at-button
  at-dashboard --> at-icon
  at-dashboard --> at-menu-item
  at-button --> at-loading
  style at-dashboard fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Dashboard"}),`
`,t.jsx(d,{md:s})]})}function l(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{l as default};
