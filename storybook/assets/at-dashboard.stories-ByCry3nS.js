const m=[{id:"usage",x:0,y:0,w:6,h:3},{id:"clients",x:6,y:0,w:6,h:3},{id:"alerts",x:0,y:3,w:12,h:3}],d=(s,u)=>`
    <div slot="${s.toLowerCase()}" style="height: 100%;">
        <at-card card_title="${s}">
            <p class="text-secondary">${u}</p>
        </at-card>
    </div>`,p=s=>`
<at-dashboard ${s.read_only?"read_only":""}>
    ${d("Usage","Bandwidth over the last 24 hours.")}
    ${d("Clients","128 connected clients.")}
    ${d("Alerts","No alerts in the selected period.")}
</at-dashboard>
<script>
document.querySelector('at-dashboard').widget_items = ${JSON.stringify(m,null,4)};
<\/script>
`,b=()=>`
<at-dashboard drag_handle=".widget-handle">
    <div slot="usage" style="height: 100%;">
        <at-card card_title="Usage">
            <at-button slot="card-header-actions" class="widget-handle" type="secondaryText" size="sm" label="Move"></at-button>
            <p class="text-secondary">Only the Move button starts a drag.</p>
        </at-card>
    </div>
    <div slot="clients" style="height: 100%;">
        <at-card card_title="Clients">
            <at-button slot="card-header-actions" class="widget-handle" type="secondaryText" size="sm" label="Move"></at-button>
            <p class="text-secondary">Dragging the card body does nothing.</p>
        </at-card>
    </div>
</at-dashboard>
<script>
document.querySelector('at-dashboard').widget_items = [
    { id: 'usage', x: 0, y: 0, w: 6, h: 3 },
    { id: 'clients', x: 6, y: 0, w: 6, h: 3 }
];
<\/script>
`,w={title:"Components/Dashboard"},t=p.bind({});t.args={read_only:!1};t.parameters={docs:{description:{story:"Widgets are positioned by `widget_items`; each entry's `id` names the slot its content goes in. Widgets can be dragged and resized, and every change emits `changedItem`."}}};const e=p.bind({});e.storyName="Read Only";e.args={read_only:!0};e.parameters={docs:{description:{story:"With `read_only` the layout is fixed: no dragging, no resizing, and no per-widget options menu, so a dashboard can be shown to someone who may not rearrange it."}}};const a=b.bind({});a.storyName="Custom Drag Handle";a.parameters={docs:{description:{story:"`drag_handle` takes a selector, so only that element starts a drag. Use it when a widget contains controls of its own that a drag would otherwise swallow."}}};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-dashboard \${args.read_only ? 'read_only' : ''}>
    \${widgetBody('Usage', 'Bandwidth over the last 24 hours.')}
    \${widgetBody('Clients', '128 connected clients.')}
    \${widgetBody('Alerts', 'No alerts in the selected period.')}
</at-dashboard>
<script>
document.querySelector('at-dashboard').widget_items = \${JSON.stringify(WIDGETS, null, 4)};
<\/script>
\``,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-dashboard \${args.read_only ? 'read_only' : ''}>
    \${widgetBody('Usage', 'Bandwidth over the last 24 hours.')}
    \${widgetBody('Clients', '128 connected clients.')}
    \${widgetBody('Alerts', 'No alerts in the selected period.')}
</at-dashboard>
<script>
document.querySelector('at-dashboard').widget_items = \${JSON.stringify(WIDGETS, null, 4)};
<\/script>
\``,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
<at-dashboard drag_handle=".widget-handle">
    <div slot="usage" style="height: 100%;">
        <at-card card_title="Usage">
            <at-button slot="card-header-actions" class="widget-handle" type="secondaryText" size="sm" label="Move"></at-button>
            <p class="text-secondary">Only the Move button starts a drag.</p>
        </at-card>
    </div>
    <div slot="clients" style="height: 100%;">
        <at-card card_title="Clients">
            <at-button slot="card-header-actions" class="widget-handle" type="secondaryText" size="sm" label="Move"></at-button>
            <p class="text-secondary">Dragging the card body does nothing.</p>
        </at-card>
    </div>
</at-dashboard>
<script>
document.querySelector('at-dashboard').widget_items = [
    { id: 'usage', x: 0, y: 0, w: 6, h: 3 },
    { id: 'clients', x: 6, y: 0, w: 6, h: 3 }
];
<\/script>
\``,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const _=["Default","ReadOnly","CustomDragHandle"];export{a as CustomDragHandle,t as Default,e as ReadOnly,_ as __namedExportsOrder,w as default};
