import{j as t,M as i}from"./index-3xIerm-K.js";import{useMDXComponents as s}from"./index-DN9Anltz.js";import{at as a}from"./MermaidMarkdown-Dx5oN7v-.js";import"./iframe-D33P_xBg.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`# at-list-selector

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute          | Description                            | Type                    | Default     |
| ------------------ | ------------------ | -------------------------------------- | ----------------------- | ----------- |
| \`has_border\`       | \`has_border\`       | Whether each item has a bottom border. | \`boolean\`               | \`undefined\` |
| \`options\`          | --                 | List of items.                         | \`AtIListSelectorItem[]\` | \`[]\`        |
| \`selected_item_id\` | \`selected_item_id\` | The selected item.                     | \`string\`                | \`undefined\` |


## Events

| Event                 | Description                                                                                  | Type                               |
| --------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------- |
| \`atuiChange\`          | Emits an event when the selected item is changed, the \`event.detail\` is the ListSelectorItem | \`CustomEvent<AtIListSelectorItem>\` |
| \`atuiInfoButtonClick\` | Emits when event when the info button of an item is clicked                                  | \`CustomEvent<AtEvent>\`             |


## Slots

| Slot       | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
|            | Placed after the list items                                      |
| \`"header"\` | Placed at the top of the list, usually for the title of the list |


## Dependencies

### Depends on

- [at-tooltip](../at-tooltip)
- at-list-selector-item
- [at-icon](../at-icon)
- [at-badge](../at-badge)
- [at-button](../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-list-selector --> at-tooltip
  at-list-selector --> at-list-selector-item
  at-list-selector --> at-icon
  at-list-selector --> at-badge
  at-list-selector --> at-button
  at-button --> at-loading
  style at-list-selector fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/List Selector"}),`
`,t.jsx(a,{md:r})]})}function u(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{u as default};
