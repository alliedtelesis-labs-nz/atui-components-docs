import{j as t,M as s}from"./index-DdWIgGDN.js";import{useMDXComponents as a}from"./index--9ZmQy6W.js";import{at as o}from"./MermaidMarkdown-D3rZxo0F.js";import"./iframe-CAOTA88m.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`# auti-tab

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                                                | Type      | Default     |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| \`has_activated\` | \`has_activated\` | True once this panel's tab has been selected at least once. Reflected, and set before at-tabs emits atuiTabChange, so a consumer can defer building expensive panel content until the tab is first opened. | \`boolean\` | \`false\`     |
| \`is_active\`     | \`is_active\`     | Determines if the tab content is active                                                                                                                                                                    | \`boolean\` | \`false\`     |
| \`tab_id\`        | \`tab_id\`        | ID of the tab                                                                                                                                                                                              | \`string\`  | \`undefined\` |


## Events

| Event          | Description                                                  | Type                  |
| -------------- | ------------------------------------------------------------ | --------------------- |
| \`atuiActivate\` | Emits this panel's tab_id the first time its tab is selected | \`CustomEvent<string>\` |


## Slots

| Slot | Description                                                       |
| ---- | ----------------------------------------------------------------- |
|      | Use this slot to add custom elements within the tab content area. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Tab/Content"}),`
`,t.jsx(o,{md:r})]})}function b(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{b as default};
