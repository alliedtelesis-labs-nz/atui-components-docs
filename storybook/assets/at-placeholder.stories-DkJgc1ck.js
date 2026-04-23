const n=e=>`
<at-placeholder
    placeholder_title="${e.message_title??""}"
    content="${e.content??""}"
    size="${e.size??""}"
    ${e.show_loading_spinner?"show_loading_spinner":""}
>
    <at-icon slot="icon" name="${e.icon??""}" />
</at-placeholder>
`,l={title:"Components/Placeholder",argTypes:{size:{options:["xs","sm","md","lg"],control:{type:"radio"}}}},o=n.bind({});o.args={message_title:"Placeholder title",content:"Placeholder content",icon:"home",size:"md",show_loading_spinner:!1};var t,s,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<at-placeholder
    placeholder_title="\${args.message_title ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? ''}"
    \${args.show_loading_spinner ? 'show_loading_spinner' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
</at-placeholder>
\``,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const r=["Default"];export{o as Default,r as __namedExportsOrder,l as default};
