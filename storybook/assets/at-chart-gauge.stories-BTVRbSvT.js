const t=e=>`
<div style="width: 280px;">
    <at-chart-gauge
        value="${e.value}"
        ${e.min!==void 0?`min="${e.min}"`:""}
        ${e.max!==void 0?`max="${e.max}"`:""}
        ${e.status?`status="${e.status}"`:""}
        ${e.center_value?`center_value="${e.center_value}"`:""}
        ${e.center_text?`center_text="${e.center_text}"`:""}
        ${e.color_palette?`color_palette="${e.color_palette}"`:""}
        ${e.height?`height="${e.height}"`:""}
    />
</div>
<script>
${e.thresholds?`document.querySelector('at-chart-gauge').thresholds = ${JSON.stringify(e.thresholds)}`:""}
${e.options?`document.querySelector('at-chart-gauge').options = ${JSON.stringify(e.options,null,4)}`:""}
<\/script>
`,P={title:"Components/Chart Gauge",argTypes:{status:{control:{type:"select"},options:["good","warning","bad","unreachable"]},color_palette:{control:{type:"select"},options:["alert","categorical"]},height:{control:{type:"select"},options:["xs","sm","md","lg","xl","auto"]}}},a={name:"Default",args:{value:72,center_value:"72%",center_text:"Utilisation"},render:t},n={name:"Threshold Zones",args:{value:72,thresholds:[60,85],status:"warning",center_value:"72%",center_text:"Utilisation"},render:t},r={name:"Status — Good",args:{value:35,thresholds:[60,85],status:"good",center_value:"35%",center_text:"CPU"},render:t},s={name:"Status — Warning",args:{value:72,thresholds:[60,85],status:"warning",center_value:"72%",center_text:"CPU"},render:t},o={name:"Status — Bad",args:{value:93,thresholds:[60,85],status:"bad",center_value:"93%",center_text:"CPU"},render:t},c={name:"Custom Range",args:{value:420,min:0,max:600,thresholds:[300,500],status:"warning",center_value:"420",center_text:"Mbps"},render:t},l={name:"Value Only (no thresholds)",args:{value:58,status:"good",center_value:"58",center_text:"Score"},render:t};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    value: 72,
    center_value: '72%',
    center_text: 'Utilisation'
  },
  render: Template
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var i,p,h;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Threshold Zones',
  args: {
    value: 72,
    thresholds: [60, 85],
    status: 'warning',
    center_value: '72%',
    center_text: 'Utilisation'
  },
  render: Template
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var _,g,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Status — Good',
  args: {
    value: 35,
    thresholds: [60, 85],
    status: 'good',
    center_value: '35%',
    center_text: 'CPU'
  },
  render: Template
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,S,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Status — Warning',
  args: {
    value: 72,
    thresholds: [60, 85],
    status: 'warning',
    center_value: '72%',
    center_text: 'CPU'
  },
  render: Template
}`,...($=(S=s.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var y,C,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Status — Bad',
  args: {
    value: 93,
    thresholds: [60, 85],
    status: 'bad',
    center_value: '93%',
    center_text: 'CPU'
  },
  render: Template
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var U,w,f;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Custom Range',
  args: {
    value: 420,
    min: 0,
    max: 600,
    thresholds: [300, 500],
    status: 'warning',
    center_value: '420',
    center_text: 'Mbps'
  },
  render: Template
}`,...(f=(w=c.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var O,b,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Value Only (no thresholds)',
  args: {
    value: 58,
    status: 'good',
    center_value: '58',
    center_text: 'Score'
  },
  render: Template
}`,...(G=(b=l.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};const W=["Default","WithThresholds","StatusGood","StatusWarning","StatusBad","CustomRange","ValueOnly"];export{c as CustomRange,a as Default,o as StatusBad,r as StatusGood,s as StatusWarning,l as ValueOnly,n as WithThresholds,W as __namedExportsOrder,P as default};
