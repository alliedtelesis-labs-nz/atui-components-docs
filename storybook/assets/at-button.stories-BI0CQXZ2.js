const n=r=>`
<at-button
    label="${r.label??""}"
    icon="${r.icon??""}"
    icon_right="${r.icon_right??""}"
    size="${r.size??"lg"}"
    type="${r.type??"primary"}"
    spinner_minimum_display_period_ms=${r.spinner_minimum_display_period_ms??1e3}
    ${r.submit?"submit":""}
    ${r.border?"border":""}
    ${r.rounded?"rounded":""}
    ${r.disabled?"disabled":""}
    ${r.in_progress?"in_progress":""}
/>
`,u={title:"Components/Button",argTypes:{size:{options:["lg","md","sm"],control:{type:"radio"}},type:{options:["primary","primaryOutline","primaryText","secondary","secondaryOutline","secondaryText","destructive","destructiveOutline","destructiveText"],control:{type:"select"}}}},e=n.bind({});e.args={label:"Button",icon:"home",disabled:!1,icon_right:"",in_progress:!1,size:"lg",spinner_minimum_display_period_ms:1e3,submit:!1,type:"primary"};const s=n.bind({});s.args={label:"Button",icon:"home",disabled:!0,icon_right:"",in_progress:!1,size:"lg",spinner_minimum_display_period_ms:1e3,submit:!1,type:"primary"};const i=n.bind({});i.args={label:"Button",icon:"home",disabled:!1,icon_right:"",in_progress:!0,size:"lg",spinner_minimum_display_period_ms:1e3,submit:!1,type:"primary"};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    icon="\${args.icon ?? ''}"
    icon_right="\${args.icon_right ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=\${args.spinner_minimum_display_period_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
/>
\``,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    icon="\${args.icon ?? ''}"
    icon_right="\${args.icon_right ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=\${args.spinner_minimum_display_period_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
/>
\``,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,_,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    icon="\${args.icon ?? ''}"
    icon_right="\${args.icon_right ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=\${args.spinner_minimum_display_period_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
/>
\``,...(g=(_=i.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const c=["Default","Disabled","Spinner"];export{e as Default,s as Disabled,i as Spinner,c as __namedExportsOrder,u as default};
