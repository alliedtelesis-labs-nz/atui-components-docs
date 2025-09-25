const e=r=>`
<at-prompt-input
    label="${r.label??""}"
    placeholder="${r.placeholder??""}"
    value="${r.value??""}"
    hint_text="${r.hint_text??""}"
    error_text="${r.error_text??""}"
    info_text="${r.info_text??""}"
    min_rows="${r.min_rows??1}"
    max_rows="${r.max_rows??4}"
    max_length="${r.max_length??2e3}"
    ${r.disabled?"disabled":""}
    ${r.readonly?"readonly":""}
    ${r.required?"required":""}
    ${r.invalid?"invalid":""}
    ${r.in_progress?"in_progress":""}
></at-prompt-input>
`,D={title:"Components/Prompt/Input",argTypes:{label:{control:"text",description:"Input label text"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},min_rows:{control:"number",description:"Minimum number of rows to display"},max_rows:{control:"number",description:"Maximum number of rows to expand to"},disabled:{control:"boolean",description:"Disabled state"},readonly:{control:"boolean",description:"Read-only state"},required:{control:"boolean",description:"Required field"},invalid:{control:"boolean",description:"Invalid state"},hint_text:{control:"text",description:"Hint text below label"},error_text:{control:"text",description:"Error message text"},info_text:{control:"text",description:"Info tooltip text"},max_length:{control:"number",description:"Maximum character length"},in_progress:{control:"boolean",description:"Shows stop button instead of send button"}}},a=e.bind({});a.args={placeholder:"Enter your message..."};const t=e.bind({});t.args={label:"Your Message",placeholder:"Type your message here...",hint_text:"Enter a clear and concise message"};const s=e.bind({});s.args={label:"Detailed Message",placeholder:"Enter a longer message...",min_rows:4,max_rows:12,hint_text:"Use multiple lines for detailed explanations"};const o=e.bind({});o.args={label:"Message",placeholder:"Enter your message...",max_length:500,hint_text:"Maximum 500 characters"};const i=e.bind({});i.args={label:"Message",placeholder:"Enter your message...",error_text:"This field is required",invalid:!0,required:!0};const l=e.bind({});l.args={label:"Message",placeholder:"Enter your message...",disabled:!0,value:"This input is disabled"};const n=e.bind({});n.args={label:"Message",placeholder:"Generating response...",value:"Tell me about AI",in_progress:!0,hint_text:"Click stop to interrupt generation"};var d,g,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-prompt-input
    label="\${args.label ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    min_rows="\${args.min_rows ?? 1}"
    max_rows="\${args.max_rows ?? 4}"
    max_length="\${args.max_length ?? 2000}"
    \${args.disabled ? 'disabled' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
\``,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var _,m,c;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => \`
<at-prompt-input
    label="\${args.label ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    min_rows="\${args.min_rows ?? 1}"
    max_rows="\${args.max_rows ?? 4}"
    max_length="\${args.max_length ?? 2000}"
    \${args.disabled ? 'disabled' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
\``,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var x,$,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
<at-prompt-input
    label="\${args.label ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    min_rows="\${args.min_rows ?? 1}"
    max_rows="\${args.max_rows ?? 4}"
    max_length="\${args.max_length ?? 2000}"
    \${args.disabled ? 'disabled' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
\``,...(u=($=s.parameters)==null?void 0:$.docs)==null?void 0:u.source}}};var h,b,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
<at-prompt-input
    label="\${args.label ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    min_rows="\${args.min_rows ?? 1}"
    max_rows="\${args.max_rows ?? 4}"
    max_length="\${args.max_length ?? 2000}"
    \${args.disabled ? 'disabled' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
\``,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => \`
<at-prompt-input
    label="\${args.label ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    min_rows="\${args.min_rows ?? 1}"
    max_rows="\${args.max_rows ?? 4}"
    max_length="\${args.max_length ?? 2000}"
    \${args.disabled ? 'disabled' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
\``,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var q,E,M;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => \`
<at-prompt-input
    label="\${args.label ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    min_rows="\${args.min_rows ?? 1}"
    max_rows="\${args.max_rows ?? 4}"
    max_length="\${args.max_length ?? 2000}"
    \${args.disabled ? 'disabled' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
\``,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var I,S,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`args => \`
<at-prompt-input
    label="\${args.label ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    min_rows="\${args.min_rows ?? 1}"
    max_rows="\${args.max_rows ?? 4}"
    max_length="\${args.max_length ?? 2000}"
    \${args.disabled ? 'disabled' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.in_progress ? 'in_progress' : ''}
></at-prompt-input>
\``,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const L=["Default","WithLabel","LargeTextarea","WithCharacterLimit","WithError","Disabled","InProgress"];export{a as Default,l as Disabled,n as InProgress,s as LargeTextarea,o as WithCharacterLimit,i as WithError,t as WithLabel,L as __namedExportsOrder,D as default};
