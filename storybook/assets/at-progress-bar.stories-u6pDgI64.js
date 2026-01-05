const n={title:"Components/Progress Bar",component:"at-progress-bar",argTypes:{size:{options:["sm","lg"],control:"select"},mode:{options:["determinate","indeterminate"],control:"select"},type:{options:["info","success","warning","error"],control:"select"},percentage:{control:{type:"number",min:0,max:100}}}},a=r=>`
    <at-progress-bar
        percentage="${r.percentage}"
        size="${r.size}"
        mode="${r.mode}"
        type="${r.type}"
    ></at-progress-bar>
`,e=a.bind({});e.args={percentage:50,size:"sm",mode:"determinate",type:"info"};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
    <at-progress-bar
        percentage="\${args.percentage}"
        size="\${args.size}"
        mode="\${args.mode}"
        type="\${args.type}"
    ></at-progress-bar>
\``,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,n as default};
