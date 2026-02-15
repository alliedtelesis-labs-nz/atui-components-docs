import{j as t,M as a}from"./index-DfdVn7m7.js";import{useMDXComponents as o}from"./index-JBqQvZux.js";import{ar as r}from"./MermaidMarkdown-81CQ_Jqz.js";import"./iframe-Cc5cuJde.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# atui-status-bar

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute         | Description                                                                                              | Type                    | Default     |
| ----------------- | ----------------- | -------------------------------------------------------------------------------------------------------- | ----------------------- | ----------- |
| \`disable_tooltip\` | \`disable_tooltip\` | Disables the tooltip when hovered                                                                        | \`boolean\`               | \`undefined\` |
| \`size\`            | \`size\`            | Height of the status bar                                                                                 | \`"lg" \\| "sm"\`          | \`'sm'\`      |
| \`status_bar\`      | --                | List of segments that make up the status bar. Each segment implements the AtIStatusBarSegment interface. | \`AtIStatusBarSegment[]\` | \`[]\`        |


## Dependencies

### Depends on

- [at-tooltip](../at-tooltip)

### Graph
\`\`\`mermaid
graph TD;
  at-status-bar --> at-tooltip
  style at-status-bar fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Status Bar"}),`
`,t.jsx(r,{md:i})]})}function c(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s()}export{c as default};
