import{j as e,M as o}from"./index-BbvEcmt5.js";import{useMDXComponents as a}from"./index-DOOeS7Mh.js";import{at as i}from"./MermaidMarkdown-DEYGXvEn.js";import"./iframe-BLYvuzkt.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`# atui-message

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                               | Type                                                       | Default     |
| --------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| \`content\`       | \`content\`       | Content of the message.                                                                                                                                   | \`string\`                                                   | \`undefined\` |
| \`icon\`          | \`icon\`          | An icon is provided for success, warning, error, or info types. You can provide a custom value to replace the default icon.  Must use material icon name. | \`string\`                                                   | \`undefined\` |
| \`impact\`        | \`impact\`        | Theme of the message, either "light" or "default".                                                                                                        | \`"high" \\| "low"\`                                          | \`'high'\`    |
| \`message_title\` | \`message_title\` | Title of the app message.                                                                                                                                 | \`string\`                                                   | \`undefined\` |
| \`type\`          | \`type\`          | Type of the message.                                                                                                                                      | \`"default" \\| "error" \\| "info" \\| "success" \\| "warning"\` | \`'default'\` |


## Slots

| Slot | Description              |
| ---- | ------------------------ |
|      | Placed after the content |


## Dependencies

### Used by

 - [at-toaster](../at-toaster)

### Depends on

- [at-icon](../at-icon)

### Graph
\`\`\`mermaid
graph TD;
  at-message --> at-icon
  at-toaster --> at-message
  style at-message fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Message"}),`
`,e.jsx(i,{md:r})]})}function f(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{f as default};
