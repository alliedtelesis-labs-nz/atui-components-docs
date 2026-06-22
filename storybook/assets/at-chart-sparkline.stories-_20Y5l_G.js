const a=e=>`
<div style="width: 200px;">
    <at-chart-sparkline
        ${e.mode?`mode="${e.mode}"`:""}
        ${e.status?`status="${e.status}"`:""}
        ${e.height?`height="${e.height}"`:""}
        ${e.color_palette?`color_palette="${e.color_palette}"`:""}
    />
</div>
<script>
${e.data?`document.querySelector('at-chart-sparkline').data = ${JSON.stringify(e.data)}`:""}
<\/script>
`,c=[4,6,5,8,7,11,9,13,12,16],x=[12,3,18,7,22,5,16,9,25,2],D={title:"Components/Chart Sparkline",argTypes:{mode:{control:{type:"inline-radio"},options:["line","area"]},status:{control:{type:"select"},options:["good","warning","bad","unreachable"]},height:{control:{type:"select"},options:["xs","sm","md","lg","xl","auto"]},color_palette:{control:{type:"select"},options:["categorical","sequential","alert","device-status","onboarding-status","custom"]}}},t={name:"Line (glow)",args:{mode:"line",data:c},render:a},r={name:"Area (gradient fill)",args:{mode:"area",data:c},render:a},n={name:"Status — Good",args:{mode:"line",status:"good",data:c},render:a},s={name:"Status — Warning",args:{mode:"line",status:"warning",data:x},render:a},o={name:"Status — Bad",args:{mode:"area",status:"bad",data:x},render:a},d={name:"Status — Unreachable",args:{mode:"line",status:"unreachable",data:c},render:a};var l,i,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Line (glow)',
  args: {
    mode: 'line',
    data: TREND
  },
  render: Template
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Area (gradient fill)',
  args: {
    mode: 'area',
    data: TREND
  },
  render: Template
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,h,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Status — Good',
  args: {
    mode: 'line',
    status: 'good',
    data: TREND
  },
  render: Template
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var b,L,$;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Status — Warning',
  args: {
    mode: 'line',
    status: 'warning',
    data: VOLATILE
  },
  render: Template
}`,...($=(L=s.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var E,y,A;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Status — Bad',
  args: {
    mode: 'area',
    status: 'bad',
    data: VOLATILE
  },
  render: Template
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var _,w,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Status — Unreachable',
  args: {
    mode: 'line',
    status: 'unreachable',
    data: TREND
  },
  render: Template
}`,...(N=(w=d.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const O=["Line","AreaFill","StatusGood","StatusWarning","StatusBad","StatusUnreachable"];export{r as AreaFill,t as Line,o as StatusBad,n as StatusGood,d as StatusUnreachable,s as StatusWarning,O as __namedExportsOrder,D as default};
