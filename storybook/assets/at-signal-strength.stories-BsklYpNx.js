const c=s=>`
<at-signal-strength
    rssi="${s.rssi}"
    variant="${s.variant??"status"}"
    size="${s.size??"md"}"
    ${s.show_value?"show_value":""}
>${s.slot??""}</at-signal-strength>`,V=[{rssi:-52,label:"Excellent"},{rssi:-64,label:"Good"},{rssi:-72,label:"Fair"},{rssi:-80,label:"Poor"},{rssi:-90,label:"No signal"}],A=s=>`
<div class="flex flex-col gap-8">
    ${V.map(({rssi:E,label:M})=>`
    <at-signal-strength
        rssi="${E}"
        variant="${s.variant??"status"}"
        size="${s.size??"md"}"
        show_value
    ><span class="text-secondary">${M}</span></at-signal-strength>`).join("")}
</div>`,j={title:"Components/SignalStrength",argTypes:{rssi:{control:{type:"range",min:-100,max:-30,step:1}},variant:{options:["status","mono"],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}},show_value:{control:"boolean"},slot:{control:"text"}}},e={render:c,args:{rssi:-62,variant:"status",size:"md",show_value:!1,slot:""}},a={render:A,args:{variant:"status",size:"md"}},r={render:A,args:{variant:"mono",size:"md"}},t={render:()=>`
<div class="flex items-end gap-16">
    <at-signal-strength rssi="-64" size="sm"></at-signal-strength>
    <at-signal-strength rssi="-64" size="md"></at-signal-strength>
    <at-signal-strength rssi="-64" size="lg"></at-signal-strength>
</div>`},n={render:c,args:{...e.args,show_value:!0}},o={render:c,args:{...e.args,show_value:!0,slot:'<span class="text-secondary">Good</span>'}},l={render:()=>`
<at-signal-strength rssi="-72" show_value></at-signal-strength>
<script type="module">
document.querySelector('at-signal-strength').thresholds = [-90, -80, -70, -60];
<\/script>`},i={render:()=>`
<at-signal-strength><span class="text-secondary">No signal</span></at-signal-strength>`};var g,d,m;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    rssi: -62,
    variant: 'status',
    size: 'md',
    show_value: false,
    slot: ''
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: LevelsTemplate,
  args: {
    variant: 'status',
    size: 'md'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,S,z;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: LevelsTemplate,
  args: {
    variant: 'mono',
    size: 'md'
  }
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var _,x,y;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => \`
<div class="flex items-end gap-16">
    <at-signal-strength rssi="-64" size="sm"></at-signal-strength>
    <at-signal-strength rssi="-64" size="md"></at-signal-strength>
    <at-signal-strength rssi="-64" size="lg"></at-signal-strength>
</div>\`
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,f,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    show_value: true
  }
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var $,b,L;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    show_value: true,
    slot: '<span class="text-secondary">Good</span>'
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var N,D,W;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => \`
<at-signal-strength rssi="-72" show_value></at-signal-strength>
<script type="module">
document.querySelector('at-signal-strength').thresholds = [-90, -80, -70, -60];
<\/script>\`
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var C,G,q;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => \`
<at-signal-strength><span class="text-secondary">No signal</span></at-signal-strength>\`
}`,...(q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};const F=["Default","AllLevels","Mono","Sizes","WithValue","WithSlot","CustomThresholds","NoSignal"];export{a as AllLevels,l as CustomThresholds,e as Default,r as Mono,i as NoSignal,t as Sizes,o as WithSlot,n as WithValue,F as __namedExportsOrder,j as default};
