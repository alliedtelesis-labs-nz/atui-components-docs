const a=e=>`
<at-button
    label="${e.label??""}"
    size="${e.size??"lg"}"
    type="${e.type??"primary"}"
    spinner_minimum_display_period_ms=${e.spinner_minimum_display_period_ms??1e3}
    ${e.submit?"submit":""}
    ${e.border?"border":""}
    ${e.rounded?"rounded":""}
    ${e.disabled?"disabled":""}
    ${e.in_progress?"in_progress":""}
>
    <at-icon slot="icon" name="${e.icon??""}" />
    <at-icon slot="icon_after" name="${e.icon_after??""}" />
</at-button>
`,u={title:"Components/Button",argTypes:{size:{options:["lg","md","sm"],control:{type:"radio"}},type:{options:["primary","primaryOutline","primaryText","secondary","secondaryOutline","secondaryText","destructive","destructiveOutline","destructiveText"],control:{type:"select"}}}},s=a.bind({});s.args={label:"Button",icon:"home",disabled:!1,icon_after:"",in_progress:!1,size:"lg",spinner_minimum_display_period_ms:1e3,submit:!1,type:"primary"};const r=a.bind({});r.args={label:"Button",icon:"home",disabled:!0,icon_after:"",in_progress:!1,size:"lg",spinner_minimum_display_period_ms:1e3,submit:!1,type:"primary"};const i=a.bind({});i.args={label:"Button",icon:"home",disabled:!1,icon_after:"",in_progress:!0,size:"lg",spinner_minimum_display_period_ms:1e3,submit:!1,type:"primary"};var o,t,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=\${args.spinner_minimum_display_period_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="\${args.icon_after ?? ''}" />
</at-button>
\``,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=\${args.spinner_minimum_display_period_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="\${args.icon_after ?? ''}" />
</at-button>
\``,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,_,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=\${args.spinner_minimum_display_period_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="\${args.icon_after ?? ''}" />
</at-button>
\``,...(c=(_=i.parameters)==null?void 0:_.docs)==null?void 0:c.source}}};const b=["Default","Disabled","Spinner"];export{s as Default,r as Disabled,i as Spinner,b as __namedExportsOrder,u as default};
