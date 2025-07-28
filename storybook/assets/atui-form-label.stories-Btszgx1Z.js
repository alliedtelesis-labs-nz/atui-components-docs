const l=r=>`
<atui-form-label 
    for="${r.for??""}"
    label="${r.label??""}"
    info_text="${r.info_text??""}"
    ${r.required?"required":""}
/>
`,n={title:"Components/Form Label"},e=l.bind({});e.args={for:"",label:"Label",info_text:"Info text",required:!0};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<atui-form-label 
    for="\${args.for ?? ''}"
    label="\${args.label ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.required ? 'required' : ''}
/>
\``,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,n as default};
