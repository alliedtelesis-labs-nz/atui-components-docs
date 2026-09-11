import{j as e,M as s}from"./index-B0nxJV8R.js";import{useMDXComponents as a}from"./index-R9TESzdn.js";import{at as i}from"./MermaidMarkdown-CLrri2RY.js";import"./iframe-BYA7XexK.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const o=`# at-sidebar-provider



<!-- Auto Generated Below -->


## Events

| Event                       | Description                                                                                                                                                                                                                                                                                                                                               | Type                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| \`atuiSidebarBackdropChange\` | Emits true when at least one registered panel is a modal (backdropped, mode="over") overlay, false when none are. at-sidebar-inset listens for this to go inert while a modal panel is open.                                                                                                                                                              | \`CustomEvent<boolean>\`                                                   |
| \`atuiSidebarProviderChange\` | Emits whenever a registered panel's open state changes, with the panel's id, side, and new open state. Named distinctly from at-sidebar's own \`atuiSidebarChange\` (a plain boolean) — a nested at-sidebar's event bubbles by default, and sharing the same name would let a listener on this element receive either shape with no way to tell them apart. | \`CustomEvent<{ id: string; side: "left" \\| "right"; isOpen: boolean; }>\` |


## Methods

### \`getIsOpen(id: string) => Promise<boolean>\`

Returns a panel's current open state.

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \`id\` | \`string\` |             |

#### Returns

Type: \`Promise<boolean>\`



### \`registerPanel(id: string, state: AtSidebarProviderPanelState) => Promise<symbol>\`

Registers a panel with the provider. Called by a child at-sidebar on load.
Returns an owner token the caller must pass back to unregisterPanel.

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| \`id\`    | \`string\`                                        |             |
| \`state\` | \`{ side: "left" \\| "right"; isOpen: boolean; }\` |             |

#### Returns

Type: \`Promise<symbol>\`



### \`setBackdrop(id: string, active: boolean) => Promise<void>\`

A panel reports whether it currently needs the shared backdrop (mode="over", backdrop=true, and open). The provider renders a single backdrop while any panel requests one, so two modal panels never stack two scrims.

#### Parameters

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| \`id\`     | \`string\`  |             |
| \`active\` | \`boolean\` |             |

#### Returns

Type: \`Promise<void>\`



### \`setOpen(id: string, isOpen: boolean) => Promise<void>\`

Sets a panel's open state directly.

#### Parameters

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| \`id\`     | \`string\`  |             |
| \`isOpen\` | \`boolean\` |             |

#### Returns

Type: \`Promise<void>\`



### \`toggle(id: string) => Promise<void>\`

Toggles a panel's open state.

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \`id\` | \`string\` |             |

#### Returns

Type: \`Promise<void>\`



### \`unregisterPanel(id: string, owner: symbol) => Promise<void>\`

Removes a panel from the provider. Called by a child at-sidebar on
disconnect with the owner token it received from registerPanel — a
stale instance's call is ignored if another instance has since
re-registered under the same id.

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| \`id\`    | \`string\` |             |
| \`owner\` | \`symbol\` |             |

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot | Description                                                           |
| ---- | --------------------------------------------------------------------- |
|      | at-sidebar panels and an at-sidebar-inset for the shared page content |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function r(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Sidebar/Dual Sidebar"}),`
`,e.jsx(i,{md:o})]})}function b(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r()}export{b as default};
