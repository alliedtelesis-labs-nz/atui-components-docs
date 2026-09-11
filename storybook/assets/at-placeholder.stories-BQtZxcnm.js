const n=e=>`
<at-placeholder
    placeholder_title="${e.message_title??""}"
    content="${e.content??""}"
    size="${e.size??""}"
    type="${e.type??"none"}"
    ${e.show_loading_spinner?"show_loading_spinner":""}
>
    <at-icon slot="icon" name="${e.icon??""}" />
</at-placeholder>
`,f={title:"Components/Placeholder",argTypes:{size:{options:["xs","sm","md","lg"],control:{type:"radio"}},type:{options:["none","chart-no-data","no-data","no-results","no-access"],control:{type:"radio"}}}},s=n.bind({});s.args={message_title:"Placeholder title",content:"Placeholder content",icon:"home",size:"md",show_loading_spinner:!1,type:"none"};const a=n.bind({});a.args={message_title:"No data",content:"There is nothing to show here yet.",size:"md",type:"no-data"};const t=n.bind({});t.args={message_title:"No results found",content:"Try adjusting your search or filters.",size:"md",type:"no-results"};const o=n.bind({});o.args={message_title:"You cannot view these devices",content:"Ask an administrator for access to this site.",size:"md",type:"no-access"};const r=n.bind({});r.args={message_title:"No chart data",content:"No measurements were recorded for this period.",size:"md",type:"chart-no-data"};var c,i,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
<at-placeholder
    placeholder_title="\${args.message_title ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? ''}"
    type="\${args.type ?? 'none'}"
    \${args.show_loading_spinner ? 'show_loading_spinner' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
</at-placeholder>
\``,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-placeholder
    placeholder_title="\${args.message_title ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? ''}"
    type="\${args.type ?? 'none'}"
    \${args.show_loading_spinner ? 'show_loading_spinner' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
</at-placeholder>
\``,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,h,_;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-placeholder
    placeholder_title="\${args.message_title ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? ''}"
    type="\${args.type ?? 'none'}"
    \${args.show_loading_spinner ? 'show_loading_spinner' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
</at-placeholder>
\``,...(_=(h=t.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var $,u,y;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`args => \`
<at-placeholder
    placeholder_title="\${args.message_title ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? ''}"
    type="\${args.type ?? 'none'}"
    \${args.show_loading_spinner ? 'show_loading_spinner' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
</at-placeholder>
\``,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var z,w,N;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`args => \`
<at-placeholder
    placeholder_title="\${args.message_title ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? ''}"
    type="\${args.type ?? 'none'}"
    \${args.show_loading_spinner ? 'show_loading_spinner' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
</at-placeholder>
\``,...(N=(w=r.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const D=["Default","NoData","NoResults","NoAccess","ChartNoData"];export{r as ChartNoData,s as Default,o as NoAccess,a as NoData,t as NoResults,D as __namedExportsOrder,f as default};
