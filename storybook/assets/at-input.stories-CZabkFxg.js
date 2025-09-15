const n=e=>`
<at-input 
    label="${e.label??""}"
    error_text="${e.error_text??""}"
    info_text="${e.info_text??""}"
    hint_text="${e.hint_text??""}"
    type="${e.type??""}"
    value="${e.value??""}"
    placeholder="${e.placeholder??""}"
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.clearable?"clearable":""}
    ${e.disabled?"disabled":""}
/>
`,o={title:"Components/Input"},t=n.bind({});t.args={label:"Label",info_text:"Info text",error_text:"Error text",hint_text:"Hint text",type:"text",value:"",placeholder:"Placeholder",required:!0,readonly:!1,disabled:!1,clearable:!0,invalid:!1};var a,r,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-input 
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    type="\${args.type ?? ''}"
    value="\${args.value ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,o as default};
