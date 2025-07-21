import{j as n,M as i}from"./index-B8R_n5k_.js";import{useMDXComponents as r}from"./index-B2Bfj9zn.js";import{ar as s}from"./MermaidMarkdown-Y_0hop0y.js";import"./iframe-CwMQwDnZ.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const l=`# atui-dialog

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                         | Type                        | Default     |
| ----------- | ----------- | ------------------------------------------------------------------- | --------------------------- | ----------- |
| \`dialog_id\` | \`dialog_id\` | ID of the dialog element (used to open and close the modal)         | \`string\`                    | \`undefined\` |
| \`role\`      | \`role\`      | Role of the dialog element. Can be either 'dialog' or 'alertdialog' | \`"alertdialog" \\| "dialog"\` | \`'dialog'\`  |


## Methods

### \`closeDialog() => Promise<void>\`

Closes the dialog modal

#### Returns

Type: \`Promise<void>\`

Promise that resolves when the dialog is closed

### \`openDialog() => Promise<void>\`

Opens the dialog modal

#### Returns

Type: \`Promise<void>\`

Promise that resolves when the dialog is opened


## Slots

| Slot | Description                             |
| ---- | --------------------------------------- |
|      | Content placed inside of the dialog box |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Dialog"}),`
`,n.jsx(s,{md:l})]})}function c(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{c as default};
