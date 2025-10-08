import{j as e,M as i}from"./index-DEXjxUMH.js";import{useMDXComponents as r}from"./index-BrRbpMhE.js";import{ar as a}from"./MermaidMarkdown-DFJTjzNB.js";import"./iframe-t0M_5GMY.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-dialog

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                                       | Type                        | Default     |
| ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| \`backdrop\`       | \`backdrop\`       | Whether to show a backdrop behind the panel, prevents any interaction with background UI.                         | \`boolean\`                   | \`true\`      |
| \`close_backdrop\` | \`close_backdrop\` | Will close the dialog if clicked                                                                                  | \`boolean\`                   | \`false\`     |
| \`role\`           | \`role\`           | Role of the dialog element. Can be either 'dialog' or 'alertdialog'                                               | \`"alertdialog" \\| "dialog"\` | \`'dialog'\`  |
| \`trigger_id\`     | \`trigger_id\`     | Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog. | \`string\`                    | \`undefined\` |


## Events

| Event              | Description                                                                                         | Type               |
| ------------------ | --------------------------------------------------------------------------------------------------- | ------------------ |
| \`atuiDialogChange\` | Emits an event when the dialog is toggled, with \`event.detail\` being true if the dialog is now open | \`CustomEvent<any>\` |


## Methods

### \`closeDialog() => Promise<void>\`

Closes the dialog modal

#### Returns

Type: \`Promise<void>\`

Promise that resolves when the dialog is closed

### \`getIsOpen() => Promise<boolean>\`

Getter method for the open state of the dialog

#### Returns

Type: \`Promise<boolean>\`

The current open state of the dialog

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

| Slot | Description                       |
| ---- | --------------------------------- |
|      | Display content within the dialog |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Dialog"}),`
`,e.jsx(a,{md:s})]})}function c(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{c as default};
