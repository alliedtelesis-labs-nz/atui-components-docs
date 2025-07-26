import{j as t,M as o}from"./index-BCOq32Yz.js";import{useMDXComponents as s}from"./index-CNrtwbtI.js";import{ar as r}from"./MermaidMarkdown-BjenbvF-.js";import"./iframe-4yyd4xre.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const a=`# atui-slider-input

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute          | Description                            | Type                 | Default     |
| ------------------ | ------------------ | -------------------------------------- | -------------------- | ----------- |
| \`has_border\`       | \`has_border\`       | Whether each item has a bottom border. | \`boolean\`            | \`undefined\` |
| \`options\`          | \`options\`          | List of items.                         | \`ListSelectorItem[]\` | \`[]\`        |
| \`selected_item_id\` | \`selected_item_id\` | The selected item.                     | \`string\`             | \`undefined\` |


## Events

| Event                 | Description                                                                                  | Type                            |
| --------------------- | -------------------------------------------------------------------------------------------- | ------------------------------- |
| \`atuiChange\`          | Emits an event when the selected item is changed, the \`event.detail\` is the ListSelectorItem | \`CustomEvent<ListSelectorItem>\` |
| \`atuiInfoButtonClick\` | Emits when event when the info button of an item is clicked                                  | \`CustomEvent<AtuiEvent>\`        |


## Slots

| Slot | Description                 |
| ---- | --------------------------- |
|      | Placed after the list items |


## Dependencies

### Depends on

- [atui-tooltip](../atui-tooltip)
- atui-list-selector-item
- [atui-badge](../atui-badge)

### Graph
\`\`\`mermaid
graph TD;
  atui-list-selector --> atui-tooltip
  atui-list-selector --> atui-list-selector-item
  atui-list-selector --> atui-badge
  style atui-list-selector fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/List Selector"}),`
`,t.jsx(r,{md:a})]})}function h(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{h as default};
