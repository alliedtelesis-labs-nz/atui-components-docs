import{j as t,M as o}from"./index-B6of3bqL.js";import{useMDXComponents as i}from"./index-CrZZCoyG.js";import{ar as r}from"./MermaidMarkdown-CcdrDQXp.js";import"./iframe-CDtpxKQW.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const a=`[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Classes

### ToasterService

Defined in: [toaster.service.ts:10](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/toaster.service.ts#L10)

#### Constructors

##### Constructor

> **new ToasterService**(): [\`ToasterService\`](#toasterservice)

###### Returns

[\`ToasterService\`](#toasterservice)

#### Methods

##### show()

> \`static\` **show**(\`type\`, \`message\`, \`options\`): \`Promise\`\\<\`void\`\\>

Defined in: [toaster.service.ts:22](https://github.com/alliedtelesis-labs-nz/atui-components/blob/e76b8a8dd878b5b83b0c272938c6f10452d89877/atui-components-stencil/src/utils/toaster.service.ts#L22)

Show a toast message

###### Parameters

###### type

\`ToastType\`

The type of the toast

###### message

\`string\`

The message to display in the toast

###### options

\`ToastOptions\` = \`{}\`

Additional options for the toast (title, position, timeout, dismissible)

###### Returns

\`Promise\`\\<\`void\`\\>
`;function s(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Utils/Toaster"}),`
`,t.jsx(r,{md:a})]})}function b(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s()}export{b as default};
