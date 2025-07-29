const s=o=>`
<atui-tooltip
    position="${o.position??"right"}"
    layout="${o.layout}"
>
    <atui-badge slot="tooltip-trigger" label="Hover over me"></atui-badge>
    <span slot="tooltip-content">Tooltip text</span>
</atui-tooltip>
`,r={title:"Components/Tooltip",argTypes:{position:{options:["bottom","left","top","right"],control:{type:"radio"}},layout:{options:["fixed","absolute"],control:{type:"radio"}}}},t=s.bind({});t.args={position:"right",layout:"fixed"};var i,a,e;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<atui-tooltip
    position="\${args.position ?? 'right'}"
    layout="\${args.layout}"
>
    <atui-badge slot="tooltip-trigger" label="Hover over me"></atui-badge>
    <span slot="tooltip-content">Tooltip text</span>
</atui-tooltip>
\``,...(e=(a=t.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,r as default};
