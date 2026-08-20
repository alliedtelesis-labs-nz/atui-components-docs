import{j as e,M as i}from"./index-BmK04dFF.js";import{useMDXComponents as a}from"./index-BF0FuW6h.js";import{at as s}from"./MermaidMarkdown-uHF6U1FJ.js";import"./iframe-1fE3l9UF.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# at-dialog

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                                                                                                                                                  | Type                        | Default     |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| \`backdrop\`       | \`backdrop\`       | Whether to show a backdrop behind the panel, prevents any interaction with background UI.                                                                                                                                    | \`boolean\`                   | \`true\`      |
| \`close_backdrop\` | \`close_backdrop\` | Will close the dialog if clicked                                                                                                                                                                                             | \`boolean\`                   | \`false\`     |
| \`close_esc\`      | \`close_esc\`      | Whether pressing Escape dismisses the dialog. Set to \`false\` alongside \`close_backdrop={false}\` for a flow that must confirm before closing, such as an unsaved-changes guard — the host then closes it via \`closeDialog()\`. | \`boolean\`                   | \`true\`      |
| \`role\`           | \`role\`           | Role of the dialog element. Can be either 'dialog' or 'alertdialog'                                                                                                                                                          | \`"alertdialog" \\| "dialog"\` | \`'dialog'\`  |
| \`trigger_id\`     | \`trigger_id\`     | Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.                                                                                                            | \`string\`                    | \`undefined\` |


## Events

| Event              | Description                                                                                                                                                                      | Type                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| \`atuiDialogChange\` | Emits an event when the dialog is toggled, with \`event.detail\` being true if the dialog is now open. Emitted exactly once per open and once per close, whichever path caused it. | \`CustomEvent<boolean>\`                          |
| \`atuiDialogClose\`  | Emits once each time the dialog closes, with \`event.detail.reason\` describing which path closed it. Always accompanies an \`atuiDialogChange(false)\`.                             | \`CustomEvent<{ reason: AtDialogCloseReason; }>\` |


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
`,e.jsx(s,{md:l})]})}function m(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{m as default};
