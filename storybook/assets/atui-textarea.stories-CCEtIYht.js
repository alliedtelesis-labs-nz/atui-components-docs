const l=e=>`
<atui-textarea 
    label="${e.label??""}"
    error_text="${e.error_text??""}"
    info_text="${e.info_text??""}"
    hint_text="${e.hint_text??""}"
    value="${e.value??""}"
    placeholder="${e.placeholder??""}"
    autocomplete="${e.autocomplete??"on"}"
    max_rows=${e.max_rows??10}
    min_rows=${e.min_rows??1}
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
/>
`,n={title:"Components/Textarea"},t=l.bind({});t.args={label:"Label",info_text:"Info text",error_text:"Error text",hint_text:"Hint text",value:"",placeholder:"Placeholder",autocomplete:"on",min_rows:1,max_rows:10,required:!0,readonly:!1,disabled:!1,invalid:!1};var a,r,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-textarea 
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    value="\${args.value ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    autocomplete="\${args.autocomplete ?? 'on'}"
    max_rows=\${args.max_rows ?? 10}
    min_rows=\${args.min_rows ?? 1}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,n as default};
