const l=p=>`
<at-loading 
    size="${p.size??"md"}"
    type="${p.type??"default"}"
    variant="${p.variant??"spinner"}"
>${p.label??"Loading"}</at-loading>`,R={title:"Components/Loading",argTypes:{variant:{options:["spinner","dots","typing","wave","thinking"],control:{type:"radio"}},type:{options:["default","secondary","error","current"],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}},label:{control:{type:"text"},description:"Slotted label content"}}},e=l.bind({});e.args={variant:"spinner",size:"md",type:"default"};const a=l.bind({});a.args={variant:"dots",size:"md",type:"default"};const t=l.bind({});t.args={variant:"typing",size:"md",type:"default",label:"Typing"};const i=l.bind({});i.args={variant:"wave",size:"md",type:"default"};const n=l.bind({});n.args={variant:"thinking",size:"md",type:"default"};const r=()=>`
<div class="text-error-accent">
    <at-loading variant="spinner" size="md" type="current">Inherits the text colour</at-loading>
</div>
`,d=()=>`
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
`,s=()=>`
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
`,o=()=>`
<at-loading variant="spinner" size="md" type="default">
    <span style="display: inline-flex; align-items: center; gap: 8px;">
        Fetching devices <at-badge type="info" label="3 of 12"></at-badge>
    </span>
</at-loading>
`;var g,v,c;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(c=(v=e.parameters)==null?void 0:v.docs)==null?void 0:c.source}}};var m,y,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var z,h,$;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...($=(h=i.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var S,w,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => \`
<at-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
>\${args.label ?? 'Loading'}</at-loading>\``,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var T,k,_;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`() => \`
<div class="text-error-accent">
    <at-loading variant="spinner" size="md" type="current">Inherits the text colour</at-loading>
</div>
\``,...(_=(k=r.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var C,D,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`
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
\``,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var A,M,O;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`
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
\``,...(O=(M=s.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,F,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`
<at-loading variant="spinner" size="md" type="default">
    <span style="display: inline-flex; align-items: center; gap: 8px;">
        Fetching devices <at-badge type="info" label="3 of 12"></at-badge>
    </span>
</at-loading>
\``,...(I=(F=o.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const V=["Spinner","Dots","Typing","Wave","Thinking","CurrentColour","Sizes","AllVariants","RichLabel"],E=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:s,CurrentColour:r,Dots:a,RichLabel:o,Sizes:d,Spinner:e,Thinking:n,Typing:t,Wave:i,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{s as A,E as L,e as S};
