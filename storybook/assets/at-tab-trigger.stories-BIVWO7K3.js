const s=a=>`
<at-tab-trigger
    tab_id="${a.tab_id??""}"
    tab_title="${a.tab_title??""}"
    layout="${a.layout??""}"
    ${a.is_active?"is_active":""}
/>
`,o={title:"Components/Tab",argTypes:{layout:{options:["vertical","horizontal"],control:{type:"radio"}}}},t=s.bind({});t.args={tab_id:"id",tab_title:"Title",layout:"vertical",is_active:!1,fill_parent_width:!1};var e,i,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => \`
<at-tab-trigger
    tab_id="\${args.tab_id ?? ''}"
    tab_title="\${args.tab_title ?? ''}"
    layout="\${args.layout ?? ''}"
    \${args.is_active ? 'is_active' : ''}
/>
\``,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,o as default};
