const n=e=>`
<at-list-item
    item_title="${e.item_title??""}"
    item_prefix="${e.item_prefix??""}"
    subtitle="${e.subtitle??""}"
    icon="${e.icon??""}"
    content="${e.content??""}"
    border=${!!e.border}
    size=${e.size??"sm"}
/>`,o={title:"Components/List Item",argTypes:{size:{options:["lg","md","sm"],control:{type:"select"}}}},t=n.bind({});t.args={size:"sm",item_id:"id",item_title:"title",subtitle:"subtitle",item_prefix:"prefix",icon:"home",content:"content",border:!1};var i,s,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-list-item
    item_title="\${args.item_title ?? ''}"
    item_prefix="\${args.item_prefix ?? ''}"
    subtitle="\${args.subtitle ?? ''}"
    icon="\${args.icon ?? ''}"
    content="\${args.content ?? ''}"
    border=\${args.border ? true : false}
    size=\${args.size ?? 'sm'}
/>\``,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,o as default};
