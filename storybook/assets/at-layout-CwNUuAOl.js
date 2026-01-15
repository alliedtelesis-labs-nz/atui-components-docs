import{j as t,M as o}from"./index-AKUlkaoO.js";import{useMDXComponents as s}from"./index-2XO93pEz.js";import{ar as i}from"./MermaidMarkdown-CTLQL1E0.js";import"./iframe-CRF3xhwh.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`# atui-layout

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                           | Type                                                 | Default           |
| ---------- | ---------- | ----------------------------------------------------- | ---------------------------------------------------- | ----------------- |
| \`overflow\` | \`overflow\` | If overflow is allowed on the detail in master-detail | \`boolean\`                                            | \`true\`            |
| \`template\` | \`template\` | Template used to display content                      | \`"content-container" \\| "master-detail" \\| "tabset"\` | \`'master-detail'\` |


## Slots

| Slot                  | Description                                               |
| --------------------- | --------------------------------------------------------- |
|                       | Content when template is content-container                |
| \`"detail"\`            | Used as the detail element when template is master-detail |
| \`"master"\`            | Used as the master element when template is master-detail |
| \`"tabset-content"\`    | Used as the content element when template is tabset       |
| \`"tabset-navigation"\` | Used as the navigation element when template is tabset    |


## Dependencies

### Used by

 - [at-tabs](../at-tabs)

### Graph
\`\`\`mermaid
graph TD;
  at-tabs --> at-layout
  style at-layout fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Layout"}),`
`,t.jsx(i,{md:r})]})}function h(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{h as default};
