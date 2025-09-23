import{j as e,M as i}from"./index-c-GdNEPt.js";import{useMDXComponents as r}from"./index-BxKYIEhl.js";import{ar as a}from"./MermaidMarkdown-BGJSY8jq.js";import"./iframe-BnWT-bEe.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# atui-dialog

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                       | Type                        | Default     |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| \`backdrop\`   | \`backdrop\`   | Whether to show a backdrop behind the dialog                                                                      | \`boolean\`                   | \`false\`     |
| \`dialog_id\`  | \`dialog_id\`  | ID of the dialog element (used to open and close the modal)                                                       | \`string\`                    | \`undefined\` |
| \`role\`       | \`role\`       | Role of the dialog element. Can be either 'dialog' or 'alertdialog'                                               | \`"alertdialog" \\| "dialog"\` | \`'dialog'\`  |
| \`trigger_id\` | \`trigger_id\` | Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog. | \`string\`                    | \`undefined\` |


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

### \`toggleDialog() => Promise<void>\`

Toggles the dialog modal between open and closed states

#### Returns

Type: \`Promise<void>\`

Promise that resolves when the dialog state is toggled


## Slots

| Slot | Description                             |
| ---- | --------------------------------------- |
|      | Content placed inside of the dialog box |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Dialog"}),`
`,e.jsx(a,{md:l})]})}function c(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{c as default};
