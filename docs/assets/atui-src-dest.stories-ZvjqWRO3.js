const l=t=>`
<atui-src-dest
    src_title="${t.src_title??""}"
    src_subtitle="${t.src_subtitle??""}"
    src_text="${t.src_text??""}"
    dest_title="${t.dest_title??""}"
    dest_subtitle="${t.dest_subtitle??""}"
    dest_text="${t.dest_text??""}"
    align="${t.align??"left"}"
/>
`,c={title:"Components/Src Dest",argTypes:{align:{options:["center","left"],control:{type:"radio"}}}},e=l.bind({});e.args={src_title:"Source Title",src_subtitle:"Source Subtitle",src_text:"Source Text",dest_title:"Destination Title",dest_subtitle:"Destination Title",dest_text:"Destination Title",align:"left"};var s,i,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<atui-src-dest
    src_title="\${args.src_title ?? ''}"
    src_subtitle="\${args.src_subtitle ?? ''}"
    src_text="\${args.src_text ?? ''}"
    dest_title="\${args.dest_title ?? ''}"
    dest_subtitle="\${args.dest_subtitle ?? ''}"
    dest_text="\${args.dest_text ?? ''}"
    align="\${args.align ?? 'left'}"
/>
\``,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,c as default};
