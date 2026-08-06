const t=e=>`
<div style="width: 280px;">
    <at-chart-gauge
        value="${e.value}"
        ${e.min!==void 0?`min="${e.min}"`:""}
        ${e.max!==void 0?`max="${e.max}"`:""}
        ${e.status?`status="${e.status}"`:""}
        ${e.center_value?`center_value="${e.center_value}"`:""}
        ${e.center_text?`center_text="${e.center_text}"`:""}
        ${e.unit?`unit="${e.unit}"`:""}
        ${e.tooltip_label?`tooltip_label="${e.tooltip_label}"`:""}
        ${e.color_palette?`color_palette="${e.color_palette}"`:""}
        ${e.height?`height="${e.height}"`:""}
    />
</div>
<script>
${e.thresholds?`document.querySelector('at-chart-gauge').thresholds = ${JSON.stringify(e.thresholds)}`:""}
${e.options?`document.querySelector('at-chart-gauge').options = ${JSON.stringify(e.options,null,4)}`:""}
<\/script>
`,L={title:"Components/Chart Gauge",argTypes:{status:{control:{type:"select"},options:["good","warning","bad","unreachable"]},color_palette:{control:{type:"select"},options:["alert","categorical"]},height:{control:{type:"select"},options:["xs","sm","md","lg","xl","auto"]}}},a={name:"Default",args:{value:72,center_value:"72%",center_text:"Utilisation"},render:t},n={name:"Threshold Zones",args:{value:72,thresholds:[60,85],status:"warning",center_value:"72%",center_text:"Utilisation"},render:t},r={name:"Status — Good",args:{value:35,thresholds:[60,85],status:"good",center_value:"35%",center_text:"CPU"},render:t},s={name:"Status — Warning",args:{value:72,thresholds:[60,85],status:"warning",center_value:"72%",center_text:"CPU"},render:t},o={name:"Status — Bad",args:{value:93,thresholds:[60,85],status:"bad",center_value:"93%",center_text:"CPU"},render:t},l={name:"Custom Range",args:{value:420,min:0,max:600,thresholds:[300,500],status:"warning",center_value:"420",center_text:"Mbps"},render:t},u={name:"Tooltip Label",args:{value:72,thresholds:[60,85],status:"warning",center_value:"72",unit:"%",center_text:"Utilisation",tooltip_label:"CPU Usage"},render:t},c={name:"Value Only (no thresholds)",args:{value:58,status:"good",center_value:"58",center_text:"Score"},render:t};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    value: 72,
    center_value: '72%',
    center_text: 'Utilisation'
  },
  render: Template
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,h,_;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Threshold Zones',
  args: {
    value: 72,
    thresholds: [60, 85],
    status: 'warning',
    center_value: '72%',
    center_text: 'Utilisation'
  },
  render: Template
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var g,v,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Status — Good',
  args: {
    value: 35,
    thresholds: [60, 85],
    status: 'good',
    center_value: '35%',
    center_text: 'CPU'
  },
  render: Template
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,$,U;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Status — Warning',
  args: {
    value: 72,
    thresholds: [60, 85],
    status: 'warning',
    center_value: '72%',
    center_text: 'CPU'
  },
  render: Template
}`,...(U=($=s.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var T,b,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Status — Bad',
  args: {
    value: 93,
    thresholds: [60, 85],
    status: 'bad',
    center_value: '93%',
    center_text: 'CPU'
  },
  render: Template
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var y,w,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var P,W,O;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Tooltip Label',
  args: {
    value: 72,
    thresholds: [60, 85],
    status: 'warning',
    center_value: '72',
    unit: '%',
    center_text: 'Utilisation',
    // Usually the title of the widget the gauge sits in. Hovering the
    // filled arc shows "Warning" (from status) above "CPU Usage: 72%".
    tooltip_label: 'CPU Usage'
  },
  render: Template
}`,...(O=(W=u.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var G,B,D;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Value Only (no thresholds)',
  args: {
    value: 58,
    status: 'good',
    center_value: '58',
    center_text: 'Score'
  },
  render: Template
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const R=["Default","WithThresholds","StatusGood","StatusWarning","StatusBad","CustomRange","WithTooltipLabel","ValueOnly"];export{l as CustomRange,a as Default,o as StatusBad,r as StatusGood,s as StatusWarning,c as ValueOnly,n as WithThresholds,u as WithTooltipLabel,R as __namedExportsOrder,L as default};
