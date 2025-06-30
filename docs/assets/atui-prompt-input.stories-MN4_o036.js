import{x as r}from"./lit-element-nDyHA9i7.js";const C={title:"Components/Prompt/Input",component:"atui-prompt-input",argTypes:{label:{control:"text",description:"Input label text"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},min_rows:{control:"number",description:"Minimum number of rows to display"},max_rows:{control:"number",description:"Maximum number of rows to expand to"},disabled:{control:"boolean",description:"Disabled state"},readonly:{control:"boolean",description:"Read-only state"},required:{control:"boolean",description:"Required field"},invalid:{control:"boolean",description:"Invalid state"},hint_text:{control:"text",description:"Hint text below label"},error_text:{control:"text",description:"Error message text"},info_text:{control:"text",description:"Info tooltip text"},max_length:{control:"number",description:"Maximum character length"},in_progress:{control:"boolean",description:"Controls whether the component is in progress (shows stop button) or ready to send (shows send button)"}}},n={args:{placeholder:"Enter your message..."},render:e=>r`
        <atui-prompt-input
            .placeholder=${e.placeholder}
            .value=${e.value}
            .label=${e.label}
            .hint_text=${e.hint_text}
            .error_text=${e.error_text}
            .info_text=${e.info_text}
            .disabled=${e.disabled}
            .readonly=${e.readonly}
            .required=${e.required}
            .invalid=${e.invalid}
            .max_length=${e.max_length}
            .min_rows=${e.min_rows}
            .max_rows=${e.max_rows}
            .in_progress=${e.in_progress}
        ></atui-prompt-input>
    `},t={args:{label:"Your Message",placeholder:"Type your message here...",hint_text:"Enter a clear and concise message"},render:e=>r`
        <atui-prompt-input
            .placeholder=${e.placeholder}
            .value=${e.value}
            .label=${e.label}
            .hint_text=${e.hint_text}
            .error_text=${e.error_text}
            .info_text=${e.info_text}
            .disabled=${e.disabled}
            .readonly=${e.readonly}
            .required=${e.required}
            .invalid=${e.invalid}
            .max_length=${e.max_length}
            .min_rows=${e.min_rows}
            .max_rows=${e.max_rows}
            .in_progress=${e.in_progress}
        ></atui-prompt-input>
    `},a={args:{label:"Detailed Message",placeholder:"Enter a longer message...",min_rows:4,max_rows:12,hint_text:"Use multiple lines for detailed explanations"},render:e=>r`
        <atui-prompt-input
            .placeholder=${e.placeholder}
            .value=${e.value}
            .label=${e.label}
            .hint_text=${e.hint_text}
            .error_text=${e.error_text}
            .info_text=${e.info_text}
            .variant=${e.variant}
            .disabled=${e.disabled}
            .readonly=${e.readonly}
            .required=${e.required}
            .invalid=${e.invalid}
            .max_length=${e.max_length}
            .in_progress=${e.in_progress}
        ></atui-prompt-input>
    `},o={args:{label:"Message",placeholder:"Enter your message...",max_length:500,hint_text:"Maximum 500 characters"},render:e=>r`
        <atui-prompt-input
            .placeholder=${e.placeholder}
            .value=${e.value}
            .label=${e.label}
            .hint_text=${e.hint_text}
            .error_text=${e.error_text}
            .info_text=${e.info_text}
            .disabled=${e.disabled}
            .readonly=${e.readonly}
            .required=${e.required}
            .invalid=${e.invalid}
            .max_length=${e.max_length}
            .min_rows=${e.min_rows}
            .max_rows=${e.max_rows}
            .in_progress=${e.in_progress}
        ></atui-prompt-input>
    `},i={args:{label:"Message",placeholder:"Enter your message...",error_text:"This field is required",invalid:!0,required:!0},render:e=>r`
        <atui-prompt-input
            .placeholder=${e.placeholder}
            .value=${e.value}
            .label=${e.label}
            .hint_text=${e.hint_text}
            .error_text=${e.error_text}
            .info_text=${e.info_text}
            .disabled=${e.disabled}
            .readonly=${e.readonly}
            .required=${e.required}
            .invalid=${e.invalid}
            .max_length=${e.max_length}
            .min_rows=${e.min_rows}
            .max_rows=${e.max_rows}
            .in_progress=${e.in_progress}
        ></atui-prompt-input>
    `},l={args:{label:"Message",placeholder:"Enter your message...",disabled:!0,value:"This input is disabled"},render:e=>r`
        <atui-prompt-input
            .placeholder=${e.placeholder}
            .value=${e.value}
            .label=${e.label}
            .hint_text=${e.hint_text}
            .error_text=${e.error_text}
            .info_text=${e.info_text}
            .disabled=${e.disabled}
            .readonly=${e.readonly}
            .required=${e.required}
            .invalid=${e.invalid}
            .max_length=${e.max_length}
            .min_rows=${e.min_rows}
            .max_rows=${e.max_rows}
            .in_progress=${e.in_progress}
        ></atui-prompt-input>
    `},s={args:{label:"Message",placeholder:"Generating response...",value:"Tell me about AI",in_progress:!0,hint_text:"Click stop to interrupt generation"},render:e=>r`
        <atui-prompt-input
            .placeholder=${e.placeholder}
            .value=${e.value}
            .label=${e.label}
            .hint_text=${e.hint_text}
            .error_text=${e.error_text}
            .info_text=${e.info_text}
            .disabled=${e.disabled}
            .readonly=${e.readonly}
            .required=${e.required}
            .invalid=${e.invalid}
            .max_length=${e.max_length}
            .min_rows=${e.min_rows}
            .max_rows=${e.max_rows}
            .in_progress=${e.in_progress}
        ></atui-prompt-input>
    `};var d,p,_;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...'
  },
  render: args => html\`
        <atui-prompt-input
            .placeholder=\${args.placeholder}
            .value=\${args.value}
            .label=\${args.label}
            .hint_text=\${args.hint_text}
            .error_text=\${args.error_text}
            .info_text=\${args.info_text}
            .disabled=\${args.disabled}
            .readonly=\${args.readonly}
            .required=\${args.required}
            .invalid=\${args.invalid}
            .max_length=\${args.max_length}
            .min_rows=\${args.min_rows}
            .max_rows=\${args.max_rows}
            .in_progress=\${args.in_progress}
        ></atui-prompt-input>
    \`
}`,...(_=(p=n.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var $,m,u;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Your Message',
    placeholder: 'Type your message here...',
    hint_text: 'Enter a clear and concise message'
  },
  render: args => html\`
        <atui-prompt-input
            .placeholder=\${args.placeholder}
            .value=\${args.value}
            .label=\${args.label}
            .hint_text=\${args.hint_text}
            .error_text=\${args.error_text}
            .info_text=\${args.info_text}
            .disabled=\${args.disabled}
            .readonly=\${args.readonly}
            .required=\${args.required}
            .invalid=\${args.invalid}
            .max_length=\${args.max_length}
            .min_rows=\${args.min_rows}
            .max_rows=\${args.max_rows}
            .in_progress=\${args.in_progress}
        ></atui-prompt-input>
    \`
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,c;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Detailed Message',
    placeholder: 'Enter a longer message...',
    min_rows: 4,
    max_rows: 12,
    hint_text: 'Use multiple lines for detailed explanations'
  },
  render: args => html\`
        <atui-prompt-input
            .placeholder=\${args.placeholder}
            .value=\${args.value}
            .label=\${args.label}
            .hint_text=\${args.hint_text}
            .error_text=\${args.error_text}
            .info_text=\${args.info_text}
            .variant=\${args.variant}
            .disabled=\${args.disabled}
            .readonly=\${args.readonly}
            .required=\${args.required}
            .invalid=\${args.invalid}
            .max_length=\${args.max_length}
            .in_progress=\${args.in_progress}
        ></atui-prompt-input>
    \`
}`,...(c=(h=a.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var g,b,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    max_length: 500,
    hint_text: 'Maximum 500 characters'
  },
  render: args => html\`
        <atui-prompt-input
            .placeholder=\${args.placeholder}
            .value=\${args.value}
            .label=\${args.label}
            .hint_text=\${args.hint_text}
            .error_text=\${args.error_text}
            .info_text=\${args.info_text}
            .disabled=\${args.disabled}
            .readonly=\${args.readonly}
            .required=\${args.required}
            .invalid=\${args.invalid}
            .max_length=\${args.max_length}
            .min_rows=\${args.min_rows}
            .max_rows=\${args.max_rows}
            .in_progress=\${args.in_progress}
        ></atui-prompt-input>
    \`
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,y,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    error_text: 'This field is required',
    invalid: true,
    required: true
  },
  render: args => html\`
        <atui-prompt-input
            .placeholder=\${args.placeholder}
            .value=\${args.value}
            .label=\${args.label}
            .hint_text=\${args.hint_text}
            .error_text=\${args.error_text}
            .info_text=\${args.info_text}
            .disabled=\${args.disabled}
            .readonly=\${args.readonly}
            .required=\${args.required}
            .invalid=\${args.invalid}
            .max_length=\${args.max_length}
            .min_rows=\${args.min_rows}
            .max_rows=\${args.max_rows}
            .in_progress=\${args.in_progress}
        ></atui-prompt-input>
    \`
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var q,M,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    disabled: true,
    value: 'This input is disabled'
  },
  render: args => html\`
        <atui-prompt-input
            .placeholder=\${args.placeholder}
            .value=\${args.value}
            .label=\${args.label}
            .hint_text=\${args.hint_text}
            .error_text=\${args.error_text}
            .info_text=\${args.info_text}
            .disabled=\${args.disabled}
            .readonly=\${args.readonly}
            .required=\${args.required}
            .invalid=\${args.invalid}
            .max_length=\${args.max_length}
            .min_rows=\${args.min_rows}
            .max_rows=\${args.max_rows}
            .in_progress=\${args.in_progress}
        ></atui-prompt-input>
    \`
}`,...(E=(M=l.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var T,I,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Generating response...',
    value: 'Tell me about AI',
    in_progress: true,
    hint_text: 'Click stop to interrupt generation'
  },
  render: args => html\`
        <atui-prompt-input
            .placeholder=\${args.placeholder}
            .value=\${args.value}
            .label=\${args.label}
            .hint_text=\${args.hint_text}
            .error_text=\${args.error_text}
            .info_text=\${args.info_text}
            .disabled=\${args.disabled}
            .readonly=\${args.readonly}
            .required=\${args.required}
            .invalid=\${args.invalid}
            .max_length=\${args.max_length}
            .min_rows=\${args.min_rows}
            .max_rows=\${args.max_rows}
            .in_progress=\${args.in_progress}
        ></atui-prompt-input>
    \`
}`,...(D=(I=s.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const L=["Default","WithLabel","LargeTextarea","WithCharacterLimit","WithError","Disabled","InProgress"];export{n as Default,l as Disabled,s as InProgress,a as LargeTextarea,o as WithCharacterLimit,i as WithError,t as WithLabel,L as __namedExportsOrder,C as default};
