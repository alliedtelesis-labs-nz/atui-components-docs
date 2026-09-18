import{j as n,M as a}from"./index-DVPMu641.js";import{useMDXComponents as s}from"./index-CX0HaAid.js";import{at as i}from"./MermaidMarkdown-DaT9pJgf.js";import"./iframe-DQ3M92t5.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const o=`# at-resizable-group



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                      | Type                         | Default        |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------- |
| \`direction\`   | \`direction\`   | Layout axis for child panels and handles. Reflected so a runtime change is observable as an attribute mutation (at-resizable-handle watches it to stay in sync). | \`"horizontal" \\| "vertical"\` | \`'horizontal'\` |
| \`storage_key\` | \`storage_key\` | When set, panel sizes persist to localStorage under this key and are restored on load.                                                                           | \`string\`                     | \`undefined\`    |


## Events

| Event                 | Description                                                                                    | Type                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------- |
| \`atuiResizableChange\` | Fires whenever any panel's size or collapsed state changes, with the full ordered panel state. | \`CustomEvent<AtResizableChangeEntry[]>\` |


## Methods

### \`beginDrag(handleIndex: number, startClientPos: number) => Promise<void>\`

Begins a drag on the handle at handleIndex, capturing the group's current pixel size along its axis.

#### Parameters

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| \`handleIndex\`    | \`number\` |             |
| \`startClientPos\` | \`number\` |             |

#### Returns

Type: \`Promise<void>\`



### \`collapsePanel(id: string) => Promise<void>\`

Collapses a panel by id, if collapsible. Called by at-resizable-panel's own collapse() method.

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \`id\` | \`string\` |             |

#### Returns

Type: \`Promise<void>\`



### \`endDrag() => Promise<void>\`

Ends the in-progress drag and persists the result, if storage_key is set.

#### Returns

Type: \`Promise<void>\`



### \`expandPanel(id: string) => Promise<void>\`

Expands a panel by id. Called by at-resizable-panel's own expand() method.

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \`id\` | \`string\` |             |

#### Returns

Type: \`Promise<void>\`



### \`getAdjacentPanelIds(handleIndex: number) => Promise<{ prevId: string; nextId: string; } | null>\`

Resolves the panel ids on either side of the handle at the given index (position among
sibling at-resizable-handle elements). Returns null until both neighbors have actually
finished registering — handing out an id the controller has no state for would let a drag
or keyboard nudge silently no-op against a panel that never registered (or hasn't yet).

#### Parameters

| Name          | Type     | Description |
| ------------- | -------- | ----------- |
| \`handleIndex\` | \`number\` |             |

#### Returns

Type: \`Promise<{ prevId: string; nextId: string; }>\`



### \`getPanelState(id: string) => Promise<AtResizableChangeEntry | undefined>\`

Returns a single panel's current size/collapsed state, for a panel to read its own starting state right after registering.

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \`id\` | \`string\` |             |

#### Returns

Type: \`Promise<AtResizableChangeEntry>\`



### \`jumpToBound(handleIndex: number, toStart: boolean) => Promise<void>\`

Jumps the previous panel to its min (toStart) or max (!toStart) bound.

#### Parameters

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| \`handleIndex\` | \`number\`  |             |
| \`toStart\`     | \`boolean\` |             |

#### Returns

Type: \`Promise<void>\`



### \`nudge(handleIndex: number, deltaPercent: number) => Promise<void>\`

Keyboard nudge: moves deltaPercent from the next panel into the previous panel (negative shrinks it).

#### Parameters

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| \`handleIndex\`  | \`number\` |             |
| \`deltaPercent\` | \`number\` |             |

#### Returns

Type: \`Promise<void>\`



### \`registerPanel(id: string, el: HTMLElement, config: ResizablePanelConfig) => Promise<symbol>\`

Registers a panel with the group. Called by a child at-resizable-panel on load. Registration
is async (the panel awaits this call), so registration order can differ from DOM order —
layout order is always derived fresh from live DOM position (getPanelOrder), never from the
sequence panels happened to register in. Returns an owner token the caller must pass back
to unregisterPanel.

#### Parameters

| Name     | Type                   | Description |
| -------- | ---------------------- | ----------- |
| \`id\`     | \`string\`               |             |
| \`el\`     | \`HTMLElement\`          |             |
| \`config\` | \`ResizablePanelConfig\` |             |

#### Returns

Type: \`Promise<symbol>\`



### \`resetPair(handleIndex: number) => Promise<void>\`

Resets both panels adjacent to the handle back to their default_size.

#### Parameters

| Name          | Type     | Description |
| ------------- | -------- | ----------- |
| \`handleIndex\` | \`number\` |             |

#### Returns

Type: \`Promise<void>\`



### \`unregisterPanel(id: string, owner: symbol) => Promise<void>\`

Removes a panel from the group. Called by a child at-resizable-panel on disconnect with the
owner token it received from registerPanel — a stale instance's call is ignored if another
instance has since re-registered under the same id.

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| \`id\`    | \`string\` |             |
| \`owner\` | \`symbol\` |             |

#### Returns

Type: \`Promise<void>\`



### \`updateDrag(clientPos: number) => Promise<void>\`

Updates an in-progress drag with the pointer's current position along the resize axis.

#### Parameters

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| \`clientPos\` | \`number\` |             |

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot | Description                                                     |
| ---- | --------------------------------------------------------------- |
|      | Alternating at-resizable-panel and at-resizable-handle elements |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/Resizable"}),`
`,n.jsx(i,{md:o})]})}function g(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{g as default};
