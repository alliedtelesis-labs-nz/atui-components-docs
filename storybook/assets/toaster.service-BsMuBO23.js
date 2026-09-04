import{j as t,M as o}from"./index-B1Q0xbv8.js";import{useMDXComponents as a}from"./index-BWiFu3Dh.js";import{at as i}from"./MermaidMarkdown-lqRWEInJ.js";import"./iframe-CBiHAvtU.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const r=`[**@alliedtelesis-labs-nz/atui-components-stencil**](README.md)

***

## Classes

### ToasterService

Defined in: [toaster.service.ts:11](https://github.com/alliedtelesis-labs-nz/atui-components/blob/5e5f54a3a7b3ec2a12a2405f934ab396b53fd8bf/atui-components-stencil/src/utils/toaster.service.ts#L11)

#### Constructors

##### Constructor

> **new ToasterService**(): [\`ToasterService\`](#toasterservice)

###### Returns

[\`ToasterService\`](#toasterservice)

#### Methods

##### show()

> \`static\` **show**(\`type\`, \`message\`, \`options?\`): \`Promise\`\\<\`AtIToastHandle\`\\>

Defined in: [toaster.service.ts:25](https://github.com/alliedtelesis-labs-nz/atui-components/blob/5e5f54a3a7b3ec2a12a2405f934ab396b53fd8bf/atui-components-stencil/src/utils/toaster.service.ts#L25)

Show a toast message

###### Parameters

###### type

\`AtIToastType\`

The type of the toast

###### message

\`string\`

The message to display in the toast

###### options?

\`AtIToastOptions\` = \`{}\`

Additional options for the toast (title, position, timeout, dismissible)

###### Returns

\`Promise\`\\<\`AtIToastHandle\`\\>

A handle to the shown toast, for a caller that needs to take it
down itself. A caller showing an ordinary timed toast can ignore it.
`;function s(n){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Utils/Toaster"}),`
`,t.jsx(i,{md:r})]})}function f(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s()}export{f as default};
