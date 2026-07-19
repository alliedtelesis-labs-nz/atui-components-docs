const r=e=>`
<div style="width: 240px; height: 140px;">
    <at-chart-trend
        ${e.value?`value="${e.value}"`:""}
        ${e.unit?`unit="${e.unit}"`:""}
        ${e.delta!==void 0?`delta="${e.delta}"`:""}
        ${e.delta_direction?`delta_direction="${e.delta_direction}"`:""}
        ${e.mode?`mode="${e.mode}"`:""}
        ${e.status?`status="${e.status}"`:""}
        ${e.color_palette?`color_palette="${e.color_palette}"`:""}
    />
</div>
<script>
${e.data?`document.querySelector('at-chart-trend').data = ${JSON.stringify(e.data)}`:""}
<\/script>
`,$=[42,45,40,48,52,47,55,60,58,62,59,68],I=[68,59,62,58,60,55,47,52,48,40,45,38],y={title:"Components/Chart Trend",argTypes:{value:{control:{type:"text"}},unit:{control:{type:"text"}},delta:{control:{type:"number"}},delta_direction:{control:{type:"inline-radio"},options:["up-is-bad","up-is-good"]},mode:{control:{type:"inline-radio"},options:["line","area"]},status:{control:{type:"select"},options:[void 0,"good","warning","bad","unreachable"]},color_palette:{control:{type:"select"},options:["categorical","sequential","alert","device-status","onboarding-status","custom"]}}},t={name:"Rising — up-is-bad (regression)",args:{value:"68ms",unit:"ms",mode:"area",data:$,delta_direction:"up-is-bad"},render:r},a={name:"Falling — up-is-bad (improvement)",args:{value:"38ms",unit:"ms",mode:"area",data:I,delta_direction:"up-is-bad"},render:r},n={name:"Rising — up-is-good (explicit delta)",args:{value:"1.4 Gbps",unit:" Gbps",delta:.6,mode:"line",data:$,delta_direction:"up-is-good",color_palette:"sequential"},render:r},o={name:"Flat series (delta hidden)",args:{value:"50%",unit:"%",mode:"line",data:[50,50,50,50,50,50]},render:r};var d,i,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Rising — up-is-bad (regression)',
  args: {
    value: '68ms',
    unit: 'ms',
    mode: 'area',
    data: RISING,
    delta_direction: 'up-is-bad'
  },
  render: Template
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Falling — up-is-bad (improvement)',
  args: {
    value: '38ms',
    unit: 'ms',
    mode: 'area',
    data: FALLING,
    delta_direction: 'up-is-bad'
  },
  render: Template
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Rising — up-is-good (explicit delta)',
  args: {
    value: '1.4 Gbps',
    unit: ' Gbps',
    delta: 0.6,
    mode: 'line',
    data: RISING,
    delta_direction: 'up-is-good',
    color_palette: 'sequential'
  },
  render: Template
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var _,b,g;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Flat series (delta hidden)',
  args: {
    value: '50%',
    unit: '%',
    mode: 'line',
    data: [50, 50, 50, 50, 50, 50]
  },
  render: Template
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const G=["Default","Improvement","UpIsGood","NoDelta"];export{t as Default,a as Improvement,o as NoDelta,n as UpIsGood,G as __namedExportsOrder,y as default};
