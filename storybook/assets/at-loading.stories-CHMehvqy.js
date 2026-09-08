const o=l=>`
<at-loading 
    size="${l.size??"md"}"
    type="${l.type??"default"}"
    variant="${l.variant??"spinner"}"
>${l.label??"Loading"}</at-loading>`,j={title:"Components/Loading",argTypes:{variant:{options:["spinner","dots","typing","wave","thinking"],control:{type:"radio"}},type:{options:["default","secondary","error"],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}},label:{control:{type:"text"},description:"Slotted label content"}}},a=o.bind({});a.args={variant:"spinner",size:"md",type:"default"};const e=o.bind({});e.args={variant:"dots",size:"md",type:"default"};const t=o.bind({});t.args={variant:"typing",size:"md",type:"default",label:"Typing"};const i=o.bind({});i.args={variant:"wave",size:"md",type:"default"};const n=o.bind({});n.args={variant:"thinking",size:"md",type:"default"};const d=()=>`
<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
    <div style="text-align: center;">
        <div>Small</div>
        <at-loading variant="spinner" size="sm" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Medium</div>
        <at-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Large</div>
        <at-loading variant="spinner" size="lg" type="default" />
    </div>
</div>
`,r=()=>`
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; padding: 20px;">
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Spinner</div>
        <at-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Dots</div>
        <at-loading variant="dots" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Typing</div>
        <at-loading variant="typing" size="md" type="default">Loading</at-loading>
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Wave</div>
        <at-loading variant="wave" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Thinking</div>
        <at-loading variant="thinking" size="md" type="default" />
    </div>
</div>
`,s=()=>`
<at-loading variant="spinner" size="md" type="default">
    <span style="display: inline-flex; align-items: center; gap: 8px;">
        Fetching devices <at-badge type="info" label="3 of 12"></at-badge>
    </span>
</at-loading>
`;var p,g,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var m,c,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(y=(c=e.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var u,f,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,z,$;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...($=(z=i.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var h,S,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,T,k;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`
<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
    <div style="text-align: center;">
        <div>Small</div>
        <at-loading variant="spinner" size="sm" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Medium</div>
        <at-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Large</div>
        <at-loading variant="spinner" size="lg" type="default" />
    </div>
</div>
\``,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var _,D,W;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => \`
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; padding: 20px;">
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Spinner</div>
        <at-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Dots</div>
        <at-loading variant="dots" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Typing</div>
        <at-loading variant="typing" size="md" type="default">Loading</at-loading>
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Wave</div>
        <at-loading variant="wave" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Thinking</div>
        <at-loading variant="thinking" size="md" type="default" />
    </div>
</div>
\``,...(W=(D=r.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var A,M,O;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`
<at-loading variant="spinner" size="md" type="default">
    <span style="display: inline-flex; align-items: center; gap: 8px;">
        Fetching devices <at-badge type="info" label="3 of 12"></at-badge>
    </span>
</at-loading>
\``,...(O=(M=s.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const F=["Spinner","Dots","Typing","Wave","Thinking","Sizes","AllVariants","RichLabel"],R=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:r,Dots:e,RichLabel:s,Sizes:d,Spinner:a,Thinking:n,Typing:t,Wave:i,__namedExportsOrder:F,default:j},Symbol.toStringTag,{value:"Module"}));export{r as A,R as L,a as S};
