const r=e=>`<atui-checkbox 
    label="${e.label??""}" 
    subtitle="${e.subtitle??""}"
    checkbox_id="${e.checkbox_id??""}"
    ${e.checked?"checked":""}
    ${e.disabled?"disabled":""}
/>`,k={title:"Components/Checkbox"},c=r.bind({});c.args={label:"Title",subtitle:"",checkbox_id:"checkbox",checked:!0,disabled:!1};const a=r.bind({});a.args={label:"Title",subtitle:"Subtitle",checkbox_id:"checkbox",checked:!0,disabled:!1};const s=r.bind({});s.args={label:"Title",subtitle:"",checkbox_id:"checkbox",checked:!0,disabled:!0};var t,b,d;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`<atui-checkbox 
    label="\${args.label ?? ''}" 
    subtitle="\${args.subtitle ?? ''}"
    checkbox_id="\${args.checkbox_id ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(d=(b=c.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var l,i,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`<atui-checkbox 
    label="\${args.label ?? ''}" 
    subtitle="\${args.subtitle ?? ''}"
    checkbox_id="\${args.checkbox_id ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,u,h;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`<atui-checkbox 
    label="\${args.label ?? ''}" 
    subtitle="\${args.subtitle ?? ''}"
    checkbox_id="\${args.checkbox_id ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const x=["Primary","Subtitle","Disabled"];export{s as Disabled,c as Primary,a as Subtitle,x as __namedExportsOrder,k as default};
