const n=e=>`
<at-button
    label="${e.label??""}"
    size="${e.size??"lg"}"
    type="${e.type??"primary"}"
    spinner_delay_ms=${e.spinner_delay_ms??1e3}
    ${e.submit?"submit":""}
    ${e.border?"border":""}
    ${e.rounded?"rounded":""}
    ${e.disabled?"disabled":""}
    ${e.in_progress?"in_progress":""}
>
    <at-icon slot="icon" name="${e.icon??""}" />
    <at-icon slot="icon_after" name="${e.icon_after??""}" />
</at-button>
`,f={title:"Components/Button",argTypes:{size:{options:["lg","md","sm"],control:{type:"radio"}},type:{options:["primary","primaryOutline","primaryText","secondary","secondaryOutline","secondaryText","destructive","destructiveOutline","destructiveText"],control:{type:"select"}}}},r=n.bind({});r.args={label:"Button",icon:"home",disabled:!1,icon_after:"",in_progress:!1,size:"lg",spinner_delay_ms:1e3,submit:!1,type:"primary"};const s=n.bind({});s.args={label:"Button",icon:"home",disabled:!0,icon_after:"",in_progress:!1,size:"lg",spinner_delay_ms:1e3,submit:!1,type:"primary"};const a=n.bind({});a.args={label:"Button",icon:"home",disabled:!1,icon_after:"",in_progress:!0,size:"lg",spinner_delay_ms:1e3,submit:!1,type:"primary"};const y=e=>`
<at-button
    id="in-progress-after-load"
    label="${e.label}"
    spinner_delay_ms=${e.spinner_delay_ms}
></at-button>
<script>
{
    const button = document.querySelector('#in-progress-after-load');
    button.addEventListener('atuiClick', () => {
        button.in_progress = true;
        setTimeout(() => {
            button.in_progress = false;
        }, ${e.work_duration_ms});
    });
}
<\/script>
`,t=y.bind({});t.args={label:"Save",spinner_delay_ms:1e3,work_duration_ms:3e3};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_delay_ms=\${args.spinner_delay_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="\${args.icon_after ?? ''}" />
</at-button>
\``,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_delay_ms=\${args.spinner_delay_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="\${args.icon_after ?? ''}" />
</at-button>
\``,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-button
    label="\${args.label ?? ''}"
    size="\${args.size ?? 'lg'}"
    type="\${args.type ?? 'primary'}"
    spinner_delay_ms=\${args.spinner_delay_ms ?? 1000}
    \${args.submit ? 'submit' : ''}
    \${args.border ? 'border' : ''}
    \${args.rounded ? 'rounded' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="\${args.icon_after ?? ''}" />
</at-button>
\``,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,_,$;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-button
    id="in-progress-after-load"
    label="\${args.label}"
    spinner_delay_ms=\${args.spinner_delay_ms}
></at-button>
<script>
{
    const button = document.querySelector('#in-progress-after-load');
    button.addEventListener('atuiClick', () => {
        button.in_progress = true;
        setTimeout(() => {
            button.in_progress = false;
        }, \${args.work_duration_ms});
    });
}
<\/script>
\``,...($=(_=t.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const z=["Default","Disabled","Spinner","InProgressAfterLoad"];export{r as Default,s as Disabled,t as InProgressAfterLoad,a as Spinner,z as __namedExportsOrder,f as default};
