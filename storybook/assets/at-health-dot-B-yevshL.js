import{j as t,M as a}from"./index-BxZlQvMQ.js";import{useMDXComponents as s}from"./index-DrLo5NUU.js";import{at as r}from"./MermaidMarkdown-BtbO94md.js";import"./iframe-pm-Cbj8B.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`# at-health-dot



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description              | Type                        | Default  |
| -------- | --------- | ------------------------ | --------------------------- | -------- |
| \`size\`   | \`size\`    | Size of the dot glyph.   | \`"lg" \\| "md" \\| "sm"\`      | \`'md'\`   |
| \`status\` | \`status\`  | Health state to display. | \`"bad" \\| "good" \\| "warn"\` | \`'good'\` |


## Dependencies

### Used by

 - [at-health-dot-cell](../table-components/cell-components/at-health-dot-cell)

### Graph
\`\`\`mermaid
graph TD;
  at-health-dot-cell --> at-health-dot
  style at-health-dot fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/HealthDot"}),`
`,t.jsx(r,{md:l})]})}function u(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o()}export{u as default};
