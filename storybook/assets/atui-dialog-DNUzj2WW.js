import{j as e,M as i}from"./index-D5J0kkkc.js";import{useMDXComponents as r}from"./index-DXKT59db.js";import{ar as a}from"./MermaidMarkdown-CM5KS0Mk.js";import"./iframe-VmFJ7gPS.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";const s=`# atui-dialog

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                         | Type                        | Default     |
| ----------- | ----------- | ------------------------------------------------------------------- | --------------------------- | ----------- |
| \`backdrop\`  | \`backdrop\`  | Whether to show a backdrop behind the dialog                        | \`boolean\`                   | \`false\`     |
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
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Dialog"}),`
`,e.jsx(a,{md:s})]})}function c(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{c as default};
