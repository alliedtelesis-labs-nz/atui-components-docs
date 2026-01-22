import{j as t,M as o}from"./index-DtkSsnpA.js";import{useMDXComponents as r}from"./index-B6A8z4cL.js";import{ar as m}from"./MermaidMarkdown-BozvweQ_.js";import"./iframe-C61wEBng.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# atui-table-export-menu

<!-- Auto Generated Below -->


## Events

| Event      | Description                                               | Type                  |
| ---------- | --------------------------------------------------------- | --------------------- |
| \`atChange\` | Emits id of the clicked menu item, either 'CSV' or 'PDF'. | \`CustomEvent<string>\` |


## Dependencies

### Used by

 - [at-search-table](../at-search-table)

### Depends on

- [at-menu](../../at-menu)
- [at-tooltip](../../at-tooltip)
- [at-button](../../at-button)
- [at-menu-item](../../at-menu/at-menu-item)

### Graph
\`\`\`mermaid
graph TD;
  at-table-export-menu --> at-menu
  at-table-export-menu --> at-tooltip
  at-table-export-menu --> at-button
  at-table-export-menu --> at-menu-item
  at-button --> at-loading
  at-search-table --> at-table-export-menu
  style at-table-export-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Export Menu/Table Export Menu"}),`
`,t.jsx(m,{md:i})]})}function c(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{c as default};
