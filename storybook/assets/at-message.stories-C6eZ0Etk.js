const n=e=>`
<at-message
    message_title="${e.message_title??""}"
    icon="${e.icon??""}"
    content="${e.content??""}"
    theme="${e.theme??""}"
    type="${e.type??""}"
/>
`,r={title:"Components/Message",argTypes:{type:{options:["default","error","info","success","warning"],control:{type:"select"}},theme:{options:["default","light"],control:{type:"radio"}}}},t=n.bind({});t.args={message_title:"Message title",content:"Message content",icon:"home",type:"default",theme:"default"};var s,a,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<at-message
    message_title="\${args.message_title ?? ''}"
    icon="\${args.icon ?? ''}"
    content="\${args.content ?? ''}"
    theme="\${args.theme ?? ''}"
    type="\${args.type ?? ''}"
/>
\``,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,r as default};
