const s=e=>`
<atui-header  
    size="${e.size}"
    icon="${e.icon}"
    header_title="${e.header_title}"
    subtitle="${e.subtitle}"
    padding=${e.padding}
    ${e.border?"border":""}
/>
`,d={title:"Components/Header",argTypes:{size:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}}}},t=s.bind({});t.args={header_title:"Title",subtitle:"Subtitle",icon:"home",size:"h1",border:!0,padding:!0};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<atui-header  
    size="\${args.size}"
    icon="\${args.icon}"
    header_title="\${args.header_title}"
    subtitle="\${args.subtitle}"
    padding=\${args.padding}
    \${args.border ? 'border' : ''}
/>
\``,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const o=["Default"];export{t as Default,o as __namedExportsOrder,d as default};
