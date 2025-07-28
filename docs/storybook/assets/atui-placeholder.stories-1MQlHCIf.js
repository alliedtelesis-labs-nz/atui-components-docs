const a=e=>`
<atui-placeholder
    placeholder_title="${e.message_title??""}"
    icon="${e.icon??""}"
    content="${e.content??""}"
    size="${e.size??""}"
    ${e.show_loading_spinner?"show_loading_spinner":""}
/>
`,i={title:"Components/Placeholder",argTypes:{size:{options:["xs","sm","md","lg"],control:{type:"radio"}}}},o=a.bind({});o.args={message_title:"Placeholder title",content:"Placeholder content",icon:"home",size:"md",show_loading_spinner:!1};var s,t,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<atui-placeholder
    placeholder_title="\${args.message_title ?? ''}"
    icon="\${args.icon ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? ''}"
    \${args.show_loading_spinner ? 'show_loading_spinner' : ''}
/>
\``,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const l=["Default"];export{o as Default,l as __namedExportsOrder,i as default};
