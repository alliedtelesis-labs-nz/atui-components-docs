const s=o=>`
<atui-loading 
    size="${o.size??"md"}"
    type="${o.type??"default"}"
    variant="${o.variant??"spinner"}"
    text="${o.text??"Loading"}"
/>`,W={title:"Components/Loading",argTypes:{variant:{options:["spinner","dots","typing","wave","thinking"],control:{type:"radio"}},type:{options:["default","secondary","error"],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}},text:{control:{type:"text"}}}},t=s.bind({});t.args={variant:"spinner",size:"md",type:"default"};const e=s.bind({});e.args={variant:"dots",size:"md",type:"default"};const i=s.bind({});i.args={variant:"typing",size:"md",type:"default",text:"Typing"};const a=s.bind({});a.args={variant:"wave",size:"md",type:"default"};const n=s.bind({});n.args={variant:"thinking",size:"md",type:"default"};const d=()=>`
<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
    <div style="text-align: center;">
        <div>Small</div>
        <atui-loading variant="spinner" size="sm" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Medium</div>
        <atui-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Large</div>
        <atui-loading variant="spinner" size="lg" type="default" />
    </div>
</div>
`,r=()=>`
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; padding: 20px;">
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Spinner</div>
        <atui-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Dots</div>
        <atui-loading variant="dots" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Typing</div>
        <atui-loading variant="typing" size="md" type="default" text="Loading" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Wave</div>
        <atui-loading variant="wave" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Thinking</div>
        <atui-loading variant="thinking" size="md" type="default" />
    </div>
</div>
`;var p,g,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
<atui-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
    text="\${args.text ?? 'Loading'}"
/>\``,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var v,m,y;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`args => \`
<atui-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
    text="\${args.text ?? 'Loading'}"
/>\``,...(y=(m=e.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var u,c,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<atui-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
    text="\${args.text ?? 'Loading'}"
/>\``,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var f,z,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => \`
<atui-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
    text="\${args.text ?? 'Loading'}"
/>\``,...(b=(z=a.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var $,S,h;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`args => \`
<atui-loading 
    size="\${args.size ?? 'md'}"
    type="\${args.type ?? 'default'}"
    variant="\${args.variant ?? 'spinner'}"
    text="\${args.text ?? 'Loading'}"
/>\``,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var w,L,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`
<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
    <div style="text-align: center;">
        <div>Small</div>
        <atui-loading variant="spinner" size="sm" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Medium</div>
        <atui-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center;">
        <div>Large</div>
        <atui-loading variant="spinner" size="lg" type="default" />
    </div>
</div>
\``,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var k,_,D;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; padding: 20px;">
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Spinner</div>
        <atui-loading variant="spinner" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Dots</div>
        <atui-loading variant="dots" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Typing</div>
        <atui-loading variant="typing" size="md" type="default" text="Loading" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Wave</div>
        <atui-loading variant="wave" size="md" type="default" />
    </div>
    <div style="text-align: center; padding: 10px;">
        <div style="margin-bottom: 10px; font-weight: bold;">Thinking</div>
        <atui-loading variant="thinking" size="md" type="default" />
    </div>
</div>
\``,...(D=(_=r.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const A=["Spinner","Dots","Typing","Wave","Thinking","Sizes","AllVariants"],M=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:r,Dots:e,Sizes:d,Spinner:t,Thinking:n,Typing:i,Wave:a,__namedExportsOrder:A,default:W},Symbol.toStringTag,{value:"Module"}));export{r as A,M as L,t as S};
