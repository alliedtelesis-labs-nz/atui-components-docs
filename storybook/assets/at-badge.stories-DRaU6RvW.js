const e=a=>`
<at-badge 
    ${a.count?`count="${a.count}"`:""}
    label="${a.label??""}"
    ${a.rounded?"rounded":""}
    impact="${a.impact??"low"}"
    type="${a.type??"default"}"
>
    <at-icon slot="icon" name="${a.icon??""}"></at-icon>
</at-badge>`,x={title:"Components/Badge",argTypes:{impact:{options:["low","high"],control:{type:"radio"}},type:{options:["default","disabled","error","info","success","warning"],control:{type:"select"}}}},o=e.bind({});o.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"default"};const r=e.bind({});r.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"info"};const t=e.bind({});t.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"success"};const s=e.bind({});s.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"warning"};const c=e.bind({});c.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"error"};const n=e.bind({});n.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"disabled"};var d,l,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var g,u,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,$,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(b=($=t.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var y,f,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,B,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,E,_;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
>
    <at-icon slot="icon" name="\${args.icon ?? ''}"></at-icon>
</at-badge>\``,...(_=(E=n.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const I=["Default","Info","Success","Warning","Error","Disabled"];export{o as Default,n as Disabled,c as Error,r as Info,t as Success,s as Warning,I as __namedExportsOrder,x as default};
