const i=(b,g)=>`
    <script>
    (function () {
        var group = document.getElementById('${b}');
        var specs = ${JSON.stringify(g)};

        function build() {
            specs.forEach(function (spec) {
                var el = document.createElement(spec.tag);
                Object.keys(spec).forEach(function (key) {
                    if (key === 'tag' || key === 'text') return;
                    el.setAttribute(key, spec[key]);
                });
                if (spec.text) el.textContent = spec.text;
                group.appendChild(el);
            });
        }

        // customElements.whenDefined only confirms the tags' classes are registered, not
        // that this specific group instance has finished its own Stencil load cycle —
        // appending panels before that races the group's own bootstrap and can wedge it.
        // componentOnReady() waits for the actual instance.
        Promise.all(
            ['at-resizable-panel', 'at-resizable-handle'].map(function (tag) {
                return customElements.whenDefined(tag);
            }),
        )
            .then(function () {
                return group.componentOnReady ? group.componentOnReady() : null;
            })
            .then(build);
    })();
    <\/script>
`,u=()=>`
    <at-resizable-group id="resizable-demo-horizontal" direction="horizontal" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    ${i("resizable-demo-horizontal",[{tag:"at-resizable-panel",default_size:"20",min_size:"10",max_size:"40",collapsible:"true",collapsed_size:"0",style:"padding: 16px;",text:"Sidebar (collapsible — drag past its min width, or press Enter on the handle)"},{tag:"at-resizable-handle",has_grip:"true"},{tag:"at-resizable-panel",style:"padding: 16px;",text:"Main content (no default_size — hugs whatever space its sized siblings don't claim)"},{tag:"at-resizable-handle",has_grip:"true"},{tag:"at-resizable-panel",default_size:"25",min_size:"15",max_size:"50",style:"padding: 16px;",text:"Details panel"}])}
`,m=()=>`
    <at-resizable-group id="resizable-demo-vertical" direction="vertical" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    ${i("resizable-demo-vertical",[{tag:"at-resizable-panel",default_size:"60",min_size:"20",style:"padding: 16px;",text:"Top panel"},{tag:"at-resizable-handle"},{tag:"at-resizable-panel",default_size:"40",min_size:"20",style:"padding: 16px;",text:"Bottom panel"}])}
`,h=()=>`
    <at-resizable-group id="resizable-demo-persisted" direction="horizontal" storage_key="storybook-resizable-demo" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    ${i("resizable-demo-persisted",[{tag:"at-resizable-panel",default_size:"30",min_size:"15",max_size:"60",style:"padding: 16px;",text:"Resize me, then reload the page — the width persists via storage_key."},{tag:"at-resizable-handle",has_grip:"true"},{tag:"at-resizable-panel",style:"padding: 16px;",text:"Main content"}])}
`,x={title:"Components/Resizable"},e=u.bind({}),t=m.bind({}),a=h.bind({});var s,r,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => \`
    <at-resizable-group id="resizable-demo-horizontal" direction="horizontal" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    \${buildPanels('resizable-demo-horizontal', [{
  tag: 'at-resizable-panel',
  default_size: '20',
  min_size: '10',
  max_size: '40',
  collapsible: 'true',
  collapsed_size: '0',
  style: 'padding: 16px;',
  text: 'Sidebar (collapsible — drag past its min width, or press Enter on the handle)'
}, {
  tag: 'at-resizable-handle',
  has_grip: 'true'
}, {
  tag: 'at-resizable-panel',
  style: 'padding: 16px;',
  text: "Main content (no default_size — hugs whatever space its sized siblings don't claim)"
}, {
  tag: 'at-resizable-handle',
  has_grip: 'true'
}, {
  tag: 'at-resizable-panel',
  default_size: '25',
  min_size: '15',
  max_size: '50',
  style: 'padding: 16px;',
  text: 'Details panel'
}])}
\``,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var o,n,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => \`
    <at-resizable-group id="resizable-demo-vertical" direction="vertical" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    \${buildPanels('resizable-demo-vertical', [{
  tag: 'at-resizable-panel',
  default_size: '60',
  min_size: '20',
  style: 'padding: 16px;',
  text: 'Top panel'
}, {
  tag: 'at-resizable-handle'
}, {
  tag: 'at-resizable-panel',
  default_size: '40',
  min_size: '20',
  style: 'padding: 16px;',
  text: 'Bottom panel'
}])}
\``,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,c,z;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
    <at-resizable-group id="resizable-demo-persisted" direction="horizontal" storage_key="storybook-resizable-demo" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    \${buildPanels('resizable-demo-persisted', [{
  tag: 'at-resizable-panel',
  default_size: '30',
  min_size: '15',
  max_size: '60',
  style: 'padding: 16px;',
  text: 'Resize me, then reload the page — the width persists via storage_key.'
}, {
  tag: 'at-resizable-handle',
  has_grip: 'true'
}, {
  tag: 'at-resizable-panel',
  style: 'padding: 16px;',
  text: 'Main content'
}])}
\``,...(z=(c=a.parameters)==null?void 0:c.docs)==null?void 0:z.source}}};const y=["Horizontal","Vertical","PersistedSizes"];export{e as Horizontal,a as PersistedSizes,t as Vertical,y as __namedExportsOrder,x as default};
