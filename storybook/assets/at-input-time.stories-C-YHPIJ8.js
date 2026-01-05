const i=e=>`
<at-input-time
    label="${e.label??""}"
    error_text="${e.error_text??""}"
    info_text="${e.info_text??""}"
    hint_text="${e.hint_text??""}"
    value="${e.value??""}"
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
/>
`,l={title:"Components/Time Input"},t=i.bind({});t.args={label:"Label",info_text:"Info text",error_text:"Error text",hint_text:"Hint text",value:"",required:!0,readonly:!1,disabled:!1,invalid:!1};var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-input-time
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    value="\${args.value ?? ''}"
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const o=["Default"];export{t as Default,o as __namedExportsOrder,l as default};
