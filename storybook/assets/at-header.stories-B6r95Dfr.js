const i=e=>`
<at-header  
    size="${e.size}"
    header_title="${e.header_title}"
    subtitle="${e.subtitle}"
    padding=${e.padding}
    ${e.border?"border":""}
>
    <at-icon slot="icon" name="${e.icon}" />
</at-header>
`,n={title:"Components/Header",argTypes:{size:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}}}},t=i.bind({});t.args={header_title:"Title",subtitle:"Subtitle",icon:"home",size:"h1",border:!0,padding:!0};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-header  
    size="\${args.size}"
    header_title="\${args.header_title}"
    subtitle="\${args.subtitle}"
    padding=\${args.padding}
    \${args.border ? 'border' : ''}
>
    <at-icon slot="icon" name="\${args.icon}" />
</at-header>
\``,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const o=["Default"];export{t as Default,o as __namedExportsOrder,n as default};
