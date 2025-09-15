const r=e=>`
<at-search
    label="${e.label??""}"
    model="${e.model??""}"
    hint_text="${e.hint_text??""}"
    info_text="${e.info_text??""}"
    placeholder="${e.placeholder??""}"
/>
`,s={title:"Components/Search"},t=r.bind({});t.args={label:"Search label",model:"",hint_text:"Hint text",info_text:"Info text",placeholder:"Placeholder"};var a,l,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-search
    label="\${args.label ?? ''}"
    model="\${args.model ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
/>
\``,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,s as default};
