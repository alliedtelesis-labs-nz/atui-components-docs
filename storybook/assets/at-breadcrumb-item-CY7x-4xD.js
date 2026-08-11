import{j as e,M as i}from"./index-Dw0a1Pn4.js";import{useMDXComponents as a}from"./index-UCTt_4bi.js";import{at as s}from"./MermaidMarkdown-DXVUBND9.js";import"./iframe-CZun-6m3.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const m=`# at-breadcrumb-item

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute   | Description                                                                                                                                        | Type      | Default     |
| -------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| \`is_active\`          | \`is_active\` | Applies different styling and makes the element non-clickable when set                                                                             | \`boolean\` | \`undefined\` |
| \`label\` _(required)_ | \`label\`     | Label for the breadcrumb item. Rendered verbatim — no casing transform is applied, so identifiers such as \`AT-x550-hq-01\` keep their exact casing. | \`string\`  | \`undefined\` |


## Dependencies

### Used by

 - [at-breadcrumb](..)

### Graph
\`\`\`mermaid
graph TD;
  at-breadcrumb --> at-breadcrumb-item
  style at-breadcrumb-item fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function r(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Breadcrumb/Breadcrumb Item/Breadcrumb Item"}),`
`,e.jsx(s,{md:m})]})}function b(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r()}export{b as default};
