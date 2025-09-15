const e=a=>`
<at-badge 
    ${a.count?`count="${a.count}"`:""}
    icon="${a.icon??""}"
    label="${a.label??""}"
    ${a.rounded?"rounded":""}
    impact="${a.impact??"low"}"
    type="${a.type??"default"}"
/>`,x={title:"Components/Badge",argTypes:{impact:{options:["low","high"],control:{type:"radio"}},type:{options:["default","disabled","error","info","success","warning"],control:{type:"select"}}}},r=e.bind({});r.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"default"};const o=e.bind({});o.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"info"};const n=e.bind({});n.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"success"};const s=e.bind({});s.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"warning"};const t=e.bind({});t.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"error"};const c=e.bind({});c.args={icon:"home",label:"Badge",count:1,rounded:!1,impact:"low",type:"disabled"};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    icon="\${args.icon ?? ''}"
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
/>\``,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,i,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    icon="\${args.icon ?? ''}"
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
/>\``,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,$,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    icon="\${args.icon ?? ''}"
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
/>\``,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var y,f,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    icon="\${args.icon ?? ''}"
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
/>\``,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,B,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    icon="\${args.icon ?? ''}"
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
/>\``,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,E,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => \`
<at-badge 
    \${args.count ? \`count="\${args.count}"\` : ''}
    icon="\${args.icon ?? ''}"
    label="\${args.label ?? ''}"
    \${args.rounded ? 'rounded' : ''}
    impact="\${args.impact ?? 'low'}"
    type="\${args.type ?? 'default'}"
/>\``,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const I=["Default","Info","Success","Warning","Error","Disabled"];export{r as Default,c as Disabled,t as Error,o as Info,n as Success,s as Warning,I as __namedExportsOrder,x as default};
