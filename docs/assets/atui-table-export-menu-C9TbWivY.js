import{j as t,M as o}from"./index-lk0VIocu.js";import{useMDXComponents as i}from"./index-BZ-WbQW8.js";import{ar as u}from"./MermaidMarkdown-CscjgtQN.js";import"./iframe-BLGK-kH0.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const r=`# atui-table-export-menu

<!-- Auto Generated Below -->


## Events

| Event        | Description                                            | Type               |
| ------------ | ------------------------------------------------------ | ------------------ |
| \`atuiChange\` | Emits id of the clicked button, either 'CSV' or 'PDF'. | \`CustomEvent<any>\` |


## Dependencies

### Used by

 - [atui-search-table](../atui-search-table)

### Depends on

- [atui-menu](../../atui-menu)
- [atui-tooltip](../../atui-tooltip)
- [atui-button](../../atui-button)

### Graph
\`\`\`mermaid
graph TD;
  atui-table-export-menu --> atui-menu
  atui-table-export-menu --> atui-tooltip
  atui-table-export-menu --> atui-button
  atui-button --> atui-loading
  atui-search-table --> atui-table-export-menu
  style atui-table-export-menu fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Table Components/Table Export Menu/Table Export Menu"}),`
`,t.jsx(u,{md:r})]})}function x(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a()}export{x as default};
