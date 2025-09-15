const s=a=>`
<at-tab
    tab_id="${a.tab_id??""}"
    tab_title="${a.tab_title??""}"
    layout="${a.layout??""}"
    ${a.is_active?"is_active":""}
/>
`,r={title:"Components/Tab",argTypes:{layout:{options:["vertical","horizontal"],control:{type:"radio"}}}},t=s.bind({});t.args={tab_id:"id",tab_title:"Title",layout:"vertical",is_active:!1};var e,i,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => \`
<at-tab
    tab_id="\${args.tab_id ?? ''}"
    tab_title="\${args.tab_title ?? ''}"
    layout="\${args.layout ?? ''}"
    \${args.is_active ? 'is_active' : ''}
/>
\``,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,r as default};
