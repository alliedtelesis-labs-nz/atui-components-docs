const t=r=>`
<atui-radio 
    label="${r.label??""}" 
    subtitle="${r.subtitle??""}"
    ${r.checked?"checked":""}
    ${r.disabled?"disabled":""}
/>`,m={title:"Components/Radio"},e=t.bind({});e.args={label:"Title",subtitle:"",checked:!0,disabled:!1};const a=t.bind({});a.args={label:"Title",subtitle:"Subtitle",checked:!1,disabled:!1};const s=t.bind({});s.args={label:"Title",subtitle:"",checked:!0,disabled:!0};var l,d,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<atui-radio 
    label="\${args.label ?? ''}" 
    subtitle="\${args.subtitle ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,b,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
<atui-radio 
    label="\${args.label ?? ''}" 
    subtitle="\${args.subtitle ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(o=(b=a.parameters)==null?void 0:b.docs)==null?void 0:o.source}}};var n,u,g;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<atui-radio 
    label="\${args.label ?? ''}" 
    subtitle="\${args.subtitle ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const p=["Primary","Subtitle","Disabled"];export{s as Disabled,e as Primary,a as Subtitle,p as __namedExportsOrder,m as default};
