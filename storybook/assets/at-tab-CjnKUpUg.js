import{j as t,M as o}from"./index-CogTFZOE.js";import{useMDXComponents as a}from"./index-B5fFVH1z.js";import{ar as r}from"./MermaidMarkdown-D-5eYCc-.js";import"./iframe-CI_AP51u.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const s=`# auti-tab

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                             | Type                         | Default        |
| ----------- | ----------- | --------------------------------------- | ---------------------------- | -------------- |
| \`is_active\` | \`is_active\` | Applies styling when active             | \`boolean\`                    | \`undefined\`    |
| \`layout\`    | \`layout\`    | Styling based on the layout of the tabs | \`"horizontal" \\| "vertical"\` | \`'horizontal'\` |
| \`tab_id\`    | \`tab_id\`    | ID of the tab                           | \`string\`                     | \`undefined\`    |
| \`tab_title\` | \`tab_title\` | Title to be displayed in the tab        | \`string\`                     | \`undefined\`    |


## Slots

| Slot | Description                                               |
| ---- | --------------------------------------------------------- |
|      | Use this slot to add custom elements after the tab title. |


## Dependencies

### Used by

 - [at-tab-selector](..)

### Graph
\`\`\`mermaid
graph TD;
  at-tab-selector --> at-tab
  style at-tab fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function i(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/Tab"}),`
`,t.jsx(r,{md:s})]})}function b(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i()}export{b as default};
