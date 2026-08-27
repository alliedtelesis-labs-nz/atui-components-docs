import{j as t,M as a}from"./index-CzGlrXVW.js";import{useMDXComponents as s}from"./index-BiWOW5Tg.js";import{at as r}from"./MermaidMarkdown-B9fDTRNc.js";import"./iframe-cTM72RLI.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# at-reload-button



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                                                                                                                                        | Type      | Default |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| \`has_updates\` | \`has_updates\` | Shows an indicator on the button when the underlying data has changed since it was last loaded. This component does not detect changes itself — the consumer sets this to true once it knows of an update (e.g. from a websocket or poll) and back to false once the user reloads. | \`boolean\` | \`false\` |


## Events

| Event        | Description                                | Type                |
| ------------ | ------------------------------------------ | ------------------- |
| \`atuiReload\` | Emitted when the reload button is clicked. | \`CustomEvent<void>\` |


## Dependencies

### Used by

 - [at-search-table](../table-components/at-search-table)

### Depends on

- [at-tooltip](../at-tooltip)
- [at-button](../at-button)
- [at-icon](../at-icon)

### Graph
\`\`\`mermaid
graph TD;
  at-reload-button --> at-tooltip
  at-reload-button --> at-button
  at-reload-button --> at-icon
  at-button --> at-loading
  at-search-table --> at-reload-button
  style at-reload-button fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Reload Button"}),`
`,t.jsx(r,{md:i})]})}function h(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o()}export{h as default};
