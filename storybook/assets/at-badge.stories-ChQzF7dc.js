const e=a=>`
<at-badge 
    ${a.count?`count="${a.count}"`:""}
    label="${a.label??""}"
    ${a.rounded?"rounded":""}
    impact="${a.impact??"low"}"
    type="${a.type??"default"}"
    size="${a.size??"sm"}"
>
    <at-icon slot="icon" name="${a.icon??""}"></at-icon>
</at-badge>`,_={title:"Components/Badge",argTypes:{size:{options:["sm","lg"],control:{type:"radio"}},impact:{options:["low","high"],control:{type:"radio"}},type:{options:["default","disabled","error","info","success","warning"],control:{type:"select"}}}},o=e.bind({});o.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"default",size:"sm"};const s=e.bind({});s.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"info"};const r=e.bind({});r.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"success"};const t=e.bind({});t.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"warning"};const c=e.bind({});c.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"error"};const n=e.bind({});n.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"disabled"};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
    size="\${args.size ?? 'sm'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,u,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
    size="\${args.size ?? 'sm'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,$,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
    size="\${args.size ?? 'sm'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(b=($=r.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var y,f,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
    size="\${args.size ?? 'sm'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var z,h,B;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
    size="\${args.size ?? 'sm'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(B=(h=c.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var S,D,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
    size="\${args.size ?? 'sm'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const x=["Default","Info","Success","Warning","Error","Disabled"];export{o as Default,n as Disabled,c as Error,s as Info,r as Success,t as Warning,x as __namedExportsOrder,_ as default};
