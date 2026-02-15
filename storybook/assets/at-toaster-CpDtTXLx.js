import{j as t,M as s}from"./index-DfdVn7m7.js";import{useMDXComponents as a}from"./index-JBqQvZux.js";import{ar as r}from"./MermaidMarkdown-81CQ_Jqz.js";import"./iframe-Cc5cuJde.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# at-toaster

## Utilities

[ToasterService](/?path=/docs/utils-toaster--docs)

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                           | Type                                                                                              | Default          |
| ---------- | ---------- | ------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| \`position\` | \`position\` | Position of the toaster on the screen | \`"bottom-center" \\| "bottom-left" \\| "bottom-right" \\| "top-center" \\| "top-left" \\| "top-right"\` | \`'bottom-right'\` |


## Methods

### \`addToast(toast: AtIToast) => Promise<void>\`

Adds a new toast to the toaster container
This method is called from the ToasterService when a new toast is created.

#### Parameters

| Name    | Type       | Description      |
| ------- | ---------- | ---------------- |
| \`toast\` | \`AtIToast\` | The toast to add |

#### Returns

Type: \`Promise<void>\`



### \`removeToast(id: number) => Promise<void>\`

Removes a toast from the toaster container by its ID
This method is called by tapToast.

#### Parameters

| Name | Type     | Description                   |
| ---- | -------- | ----------------------------- |
| \`id\` | \`number\` | The ID of the toast to remove |

#### Returns

Type: \`Promise<void>\`




## Dependencies

### Depends on

- [at-message](../at-message)
- [at-button](../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-toaster --> at-message
  at-toaster --> at-button
  at-button --> at-loading
  style at-toaster fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Toaster"}),`
`,t.jsx(r,{md:i})]})}function u(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o()}export{u as default};
