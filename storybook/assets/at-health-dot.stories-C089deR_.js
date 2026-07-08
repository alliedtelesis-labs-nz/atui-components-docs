const r=d=>`
<at-health-dot
    status="${d.status??"good"}"
    size="${d.size??"md"}"
></at-health-dot>`,w={title:"Components/HealthDot",argTypes:{status:{options:["good","warn","bad"],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}}}},s=r.bind({});s.args={status:"good",size:"md"};const a=r.bind({});a.args={status:"warn",size:"md"};const t=r.bind({});t.args={status:"bad",size:"md"};const e=r.bind({});e.args={status:"good",size:"sm"};const o=r.bind({});o.args={status:"good",size:"lg"};var n,c,g;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<at-health-dot
    status="\${args.status ?? 'good'}"
    size="\${args.size ?? 'md'}"
></at-health-dot>\``,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var i,m,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-health-dot
    status="\${args.status ?? 'good'}"
    size="\${args.size ?? 'md'}"
></at-health-dot>\``,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,p,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-health-dot
    status="\${args.status ?? 'good'}"
    size="\${args.size ?? 'md'}"
></at-health-dot>\``,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var z,$,b;e.parameters={...e.parameters,docs:{...(z=e.parameters)==null?void 0:z.docs,source:{originalSource:`args => \`
<at-health-dot
    status="\${args.status ?? 'good'}"
    size="\${args.size ?? 'md'}"
></at-health-dot>\``,...(b=($=e.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var S,y,_;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => \`
<at-health-dot
    status="\${args.status ?? 'good'}"
    size="\${args.size ?? 'md'}"
></at-health-dot>\``,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const x=["Good","Warn","Bad","Small","Large"];export{t as Bad,s as Good,o as Large,e as Small,a as Warn,x as __namedExportsOrder,w as default};
