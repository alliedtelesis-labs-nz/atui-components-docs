const l=e=>`
<at-tabs
    active_tab="${e.active_tab??""}"
    layout="${e.layout??"horizontal"}"
/>
<script>
document.querySelector('at-tabs').tabs = ${JSON.stringify(e.tabs,null,4)}
<\/script>
`,d={title:"Components/Tabs",argTypes:{layout:{options:["vertical","horizontal"],control:{type:"radio"}}}},t=l.bind({});t.args={tabs:[{id:"one",title:"one"},{id:"two",title:"two"},{id:"three",title:"three"}],active_tab:"one",layout:"horizontal"};const c=()=>`
<at-tabs>
    <at-tab-trigger slot="tab-list" tab_id="overview" tab_title="Overview" is_active="true"></at-tab-trigger>
    <at-tab-trigger slot="tab-list" tab_id="details" tab_title="Details"></at-tab-trigger>

    <at-tab-content slot="tab-content" tab_id="overview">
        <p>Overview panel.</p>
    </at-tab-content>
    <at-tab-content slot="tab-content" tab_id="details">
        <p>Details panel. has_activated flips to true the first time this tab is opened.</p>
    </at-tab-content>
</at-tabs>
`,a=c.bind({});var i,r,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-tabs
    active_tab="\${args.active_tab ?? ''}"
    layout="\${args.layout ?? 'horizontal'}"
/>
<script>
document.querySelector('at-tabs').tabs = \${JSON.stringify(args.tabs, null, 4)}
<\/script>
\``,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,n,b;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => \`
<at-tabs>
    <at-tab-trigger slot="tab-list" tab_id="overview" tab_title="Overview" is_active="true"></at-tab-trigger>
    <at-tab-trigger slot="tab-list" tab_id="details" tab_title="Details"></at-tab-trigger>

    <at-tab-content slot="tab-content" tab_id="overview">
        <p>Overview panel.</p>
    </at-tab-content>
    <at-tab-content slot="tab-content" tab_id="details">
        <p>Details panel. has_activated flips to true the first time this tab is opened.</p>
    </at-tab-content>
</at-tabs>
\``,...(b=(n=a.parameters)==null?void 0:n.docs)==null?void 0:b.source}}};const p=["Default","DeferredContent"];export{t as Default,a as DeferredContent,p as __namedExportsOrder,d as default};
