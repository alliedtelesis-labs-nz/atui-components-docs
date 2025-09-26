import{j as t,M as i}from"./index-DbjMhfFP.js";import{useMDXComponents as o}from"./index-Cy5wY4Pt.js";import{ar as a}from"./MermaidMarkdown-BJlfPthU.js";import"./iframe-Bu-M7Ori.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# atui-side-panel

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                            | Type                                                                                                                                                                   | Default       |
| -------- | --------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| \`size\`   | \`size\`    | Size of the button                     | \`"lg" \\| "md" \\| "sm"\`                                                                                                                                                 | \`'lg'\`        |
| \`type\`   | \`type\`    | Theme of the button. Default secondary | \`"destructive" \\| "destructiveOutline" \\| "destructiveText" \\| "primary" \\| "primaryOutline" \\| "primaryText" \\| "secondary" \\| "secondaryOutline" \\| "secondaryText"\` | \`'secondary'\` |


## Dependencies

### Depends on

- [at-button](../../at-button)

### Graph
\`\`\`mermaid
graph TD;
  at-sidebar-trigger --> at-button
  at-button --> at-loading
  style at-sidebar-trigger fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function r(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Sidebar/Sidebar Trigger/Sidebar Trigger"}),`
`,t.jsx(a,{md:s})]})}function y(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r()}export{y as default};
