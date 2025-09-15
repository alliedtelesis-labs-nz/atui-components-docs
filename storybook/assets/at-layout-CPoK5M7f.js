import{j as t,M as o}from"./index-Cg48pWXi.js";import{useMDXComponents as s}from"./index-BhINsoOH.js";import{ar as r}from"./MermaidMarkdown-CEydFj9g.js";import"./iframe-nDnBDswv.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# atui-layout

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

 - [at-tab-selector](../at-tab-selector)

### Graph
\`\`\`mermaid
graph TD;
  at-tab-selector --> at-layout
  style at-layout fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Layout"}),`
`,t.jsx(r,{md:i})]})}function h(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{h as default};
