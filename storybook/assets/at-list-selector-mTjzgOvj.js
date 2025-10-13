import{j as t,M as o}from"./index-p1hv_aRk.js";import{useMDXComponents as s}from"./index-CqazegI6.js";import{ar as r}from"./MermaidMarkdown-RnLmyGXo.js";import"./iframe-7u2fPp9Q.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# atui-slider-input

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute          | Description                            | Type                 | Default     |
| ------------------ | ------------------ | -------------------------------------- | -------------------- | ----------- |
| \`has_border\`       | \`has_border\`       | Whether each item has a bottom border. | \`boolean\`            | \`undefined\` |
| \`options\`          | --                 | List of items.                         | \`ListSelectorItem[]\` | \`[]\`        |
| \`selected_item_id\` | \`selected_item_id\` | The selected item.                     | \`string\`             | \`undefined\` |


## Events

| Event                 | Description                                                                                  | Type                            |
| --------------------- | -------------------------------------------------------------------------------------------- | ------------------------------- |
| \`atuiChange\`          | Emits an event when the selected item is changed, the \`event.detail\` is the ListSelectorItem | \`CustomEvent<ListSelectorItem>\` |
| \`atuiInfoButtonClick\` | Emits when event when the info button of an item is clicked                                  | \`CustomEvent<AtEvent>\`          |


## Slots

| Slot | Description                 |
| ---- | --------------------------- |
|      | Placed after the list items |


## Dependencies

### Depends on

- [at-tooltip](../at-tooltip)
- at-list-selector-item
- [at-badge](../at-badge)

### Graph
\`\`\`mermaid
graph TD;
  at-list-selector --> at-tooltip
  at-list-selector --> at-list-selector-item
  at-list-selector --> at-badge
  style at-list-selector fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/List Selector"}),`
`,t.jsx(r,{md:a})]})}function u(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{u as default};
