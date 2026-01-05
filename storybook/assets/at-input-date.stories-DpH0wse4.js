const d=e=>`
<at-input-date
    label="${e.label??""}"
    hint_text="${e.hint_text??""}"
    info_text="${e.info_text??""}"
    error_text="${e.error_text??""}"
    value="${e.value??""}"
    min_date="${e.min_date??""}"
    max_date="${e.max_date??""}"
    ${e.required?"required":""}
    ${e.invalid?"invalid":""}
    ${e.readonly?"readonly":""}
    ${e.disabled?"disabled":""}
/>
`,n={title:"Components/Date Input",argTypes:{value:{control:"date"},min_date:{control:"date"},max_date:{control:"date"},required:{control:"boolean"},invalid:{control:"boolean"},readonly:{control:"boolean"},disabled:{control:"boolean"}}},t=d.bind({});t.args={label:"Date",hint_text:"Select a date",info_text:"",error_text:"",value:new Date,min_date:new Date("2000-01-01"),max_date:new Date("2099-12-31"),required:!1,invalid:!1,readonly:!1,disabled:!1};var a,r,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-input-date
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    value="\${args.value ?? ''}"
    min_date="\${args.min_date ?? ''}"
    max_date="\${args.max_date ?? ''}"
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const o=["Default"];export{t as Default,o as __namedExportsOrder,n as default};
