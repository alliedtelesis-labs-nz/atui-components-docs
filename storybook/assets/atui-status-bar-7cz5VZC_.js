import{j as t,M as a}from"./index-D5J0kkkc.js";import{useMDXComponents as o}from"./index-DXKT59db.js";import{ar as r}from"./MermaidMarkdown-CM5KS0Mk.js";import"./iframe-VmFJ7gPS.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";const i=`# atui-status-bar

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute         | Description                                                                                    | Type           | Default     |
| ----------------- | ----------------- | ---------------------------------------------------------------------------------------------- | -------------- | ----------- |
| \`disable_tooltip\` | \`disable_tooltip\` | Disables the tooltip when hovered                                                              | \`boolean\`      | \`undefined\` |
| \`size\`            | \`size\`            | Height of the status bar                                                                       | \`"lg" \\| "sm"\` | \`'sm'\`      |
| \`status_bar\`      | \`status_bar\`      | List of segments that make up the status bar. Each segment implements the StatusBar interface. | \`StatusBar[]\`  | \`[]\`        |


## Dependencies

### Depends on

- [atui-tooltip](../atui-tooltip)

### Graph
\`\`\`mermaid
graph TD;
  atui-status-bar --> atui-tooltip
  style atui-status-bar fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Status Bar"}),`
`,t.jsx(r,{md:i})]})}function c(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s()}export{c as default};
