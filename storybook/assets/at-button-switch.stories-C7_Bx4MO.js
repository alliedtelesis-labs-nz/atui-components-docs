const t=e=>`
<at-button-switch
    label="${e.label??""}"
    hint_text="${e.hint_text??""}"
    info_text="${e.info_text??""}"
    ${e.value?"value":""}
    ${e.disabled?"disabled":""}
/>
`,E={title:"Components/Button Switch",argTypes:{label:{control:"text",description:"Label displayed alongside the toggle."},hint_text:{control:"text",description:"Short description or validation hint if required."},info_text:{control:"text",description:"Optional info icon with detailed tooltip description."},disabled:{control:"boolean",description:"Disable interaction with the toggle."},value:{control:"boolean",description:"Set the toggles state."}}},a=t.bind({});a.args={label:"Button Switch",value:!1,disabled:!1};const s=t.bind({});s.args={label:"Enable Notifications",hint_text:"Toggle to receive email notifications",value:!1};const n=t.bind({});n.args={label:"Advanced Mode",info_text:"Enables advanced configuration options for power users",value:!1};const i=t.bind({});i.args={label:"Active Switch",value:!0};const r=t.bind({});r.args={label:"Disabled Switch",disabled:!0,value:!1};const o=t.bind({});o.args={label:"Disabled Active Switch",disabled:!0,value:!0};const l=t.bind({});l.args={label:"Full Featured Switch",hint_text:"This is a hint text for additional context",info_text:"Detailed information about this switch option",value:!1};var d,c,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-button-switch
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-button-switch
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,p,_;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
<at-button-switch
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(_=(p=n.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var $,f,v;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`args => \`
<at-button-switch
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var m,w,S;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-button-switch
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var D,A,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => \`
<at-button-switch
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var O,W,B;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => \`
<at-button-switch
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.value ? 'value' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const y=["Default","WithHintText","WithInfoText","Active","Disabled","DisabledActive","AllOptions"];export{i as Active,l as AllOptions,a as Default,r as Disabled,o as DisabledActive,s as WithHintText,n as WithInfoText,y as __namedExportsOrder,E as default};
