const r=e=>`<at-checkbox 
    label="${e.label??""}" 
    hint_text="${e.hint_text??""}"
    value="${e.value??""}"
    ${e.checked?"checked":""}
    ${e.disabled?"disabled":""}
/>`,x={title:"Components/Checkbox"},a=r.bind({});a.args={label:"Title",hint_text:"Hint text",value:"one",checked:!0,disabled:!1};const t=r.bind({});t.args={label:"Title",hint_text:"Hint text",value:"two",checked:!0,disabled:!1};const s=r.bind({});s.args={label:"Title",hint_text:"Hint text",value:"three",checked:!0,disabled:!0};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`<at-checkbox 
    label="\${args.label ?? ''}" 
    hint_text="\${args.hint_text ?? ''}"
    value="\${args.value ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`<at-checkbox 
    label="\${args.label ?? ''}" 
    hint_text="\${args.hint_text ?? ''}"
    value="\${args.value ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var b,h,u;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => \`<at-checkbox 
    label="\${args.label ?? ''}" 
    hint_text="\${args.hint_text ?? ''}"
    value="\${args.value ?? ''}"
    \${args.checked ? 'checked' : ''}
    \${args.disabled ? 'disabled' : ''}
/>\``,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const g=["Primary","HintText","Disabled"];export{s as Disabled,t as HintText,a as Primary,g as __namedExportsOrder,x as default};
