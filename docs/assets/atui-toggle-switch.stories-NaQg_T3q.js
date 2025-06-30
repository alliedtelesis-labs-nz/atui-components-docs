const t=e=>`
<atui-toggle-switch
    label="${e.label??""}"
    label_position="${e.label_position??""}"
    show_label=${!!e.show_label}
    ${e.value?"value":""}
    ${e.disabled?"disabled":""}
/>
`,i={title:"Components/Toggle Switch",argTypes:{label_position:{options:["after","before"],control:{type:"radio"}}}},l=t.bind({});l.args={label_position:"before",label:"Toggle switch",show_label:!0,value:!0,disabled:!1};var a,o,s;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-toggle-switch
    label="\${args.label ?? ''}"
    label_position="\${args.label_position ?? ''}"
    show_label=\${args.show_label ? true : false}
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(s=(o=l.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const r=["Default"];export{l as Default,r as __namedExportsOrder,i as default};
