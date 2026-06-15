import{j as n,M as o}from"./index-BzF9GqAZ.js";import{useMDXComponents as i}from"./index-CltOQV0v.js";import{at as r}from"./MermaidMarkdown-i64lXKPl.js";import"./iframe-DRswwPWt.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`# at-message

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                | Type                                                       | Default     |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| \`content\`       | \`content\`       | Content of the message.                                                                                                    | \`string\`                                                   | \`undefined\` |
| \`icon\`          | \`icon\`          | An icon is provided for success, warning, error, or info types. Custom icon can be used by providing the carbon icon name. | \`string\`                                                   | \`undefined\` |
| \`impact\`        | \`impact\`        | Theme of the message, either "light" or "default".                                                                         | \`"high" \\| "low"\`                                          | \`'high'\`    |
| \`message_title\` | \`message_title\` | Title of the app message.                                                                                                  | \`string\`                                                   | \`undefined\` |
| \`type\`          | \`type\`          | Type of the message.                                                                                                       | \`"default" \\| "error" \\| "info" \\| "success" \\| "warning"\` | \`'default'\` |


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
`;function s(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Message"}),`
`,n.jsx(r,{md:a})]})}function g(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s()}export{g as default};
