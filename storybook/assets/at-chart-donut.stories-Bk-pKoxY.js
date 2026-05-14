const t=e=>`
<at-chart-donut
    height="${e.height}"
    ${e.color_palette?`color_palette="${e.color_palette}"`:""}
    ${e.center_value?`center_value="${e.center_value}"`:""}
    ${e.center_text?`center_text="${e.center_text}"`:""}
    ${e.legend_position?`legend_position="${e.legend_position}"`:""}
    ${e.cutout!==void 0?`cutout="${e.cutout}"`:""}
/>
<script>
${e.data?`document.querySelector('at-chart-donut').data = ${JSON.stringify(e.data,null,4)}`:""}
${e.options?`document.querySelector('at-chart-donut').options = ${JSON.stringify(e.options,null,4)}`:""}
${e.tooltip_options?`document.querySelector('at-chart-donut').tooltip_options = ${JSON.stringify(e.tooltip_options,null,4)}`:""}
${e.legend_options?`document.querySelector('at-chart-donut').legend_options = ${JSON.stringify(e.legend_options,null,4)}`:""}
${e.plugins?`document.querySelector('at-chart-donut').plugins = ${JSON.stringify(e.plugins,null,4)}`:""}
<\/script>
`,L={title:"Components/Chart Donut",argTypes:{color_palette:{control:{type:"select"},options:["categorical","sequential","alert","device-status","onboarding-status","custom"]},legend_position:{control:{type:"select"},options:["top","bottom","left","right"]}}},a={name:"Categorical Palette",args:{height:"md",color_palette:"categorical",data:{labels:["Auckland","Wellington","Christchurch","Hamilton","Tauranga"],datasets:[{label:"Sites",data:[320,180,140,90,70],hoverOffset:4}]}},render:t},n={name:"Sequential Palette",args:{height:"md",color_palette:"sequential",data:{labels:["0–20%","20–40%","40–60%","60–80%","80–100%"],datasets:[{label:"Utilisation",data:[10,25,40,60,80],hoverOffset:4}]}},render:t},o={name:"Alert Palette",args:{height:"md",color_palette:"alert",data:{labels:["Critical","Warning","Normal","Disabled"],datasets:[{label:"Events",data:[12,34,200,8],hoverOffset:4}]}},render:t},r={name:"Device Status Palette",args:{height:"md",color_palette:"device-status",center_value:"450",center_text:"Devices",data:{labels:["Up","Warning","Down","Unreachable","Info"],datasets:[{label:"Device Status",data:[380,42,12,8,8],hoverOffset:4}]}},render:t},s={name:"Onboarding Status Palette",args:{height:"md",color_palette:"onboarding-status",center_value:"450",center_text:"Devices",data:{labels:["Online","In Progress","Pending","Failed","No Bootstrap"],datasets:[{label:"Onboarding",data:[320,60,40,18,12],hoverOffset:4}]}},render:t},l={name:"Custom Colors (CUSTOM palette)",args:{height:"md",color_palette:"custom",data:{labels:["One","Two","Three"],datasets:[{label:"My Dataset",data:[300,50,100],hoverOffset:4,backgroundColor:["#7E57C2","#26A69A","#42A5F5"],hoverBackgroundColor:["#7E57C2","#26A69A","#42A5F5"],hoverBorderColor:["#7E57C2","#26A69A","#42A5F5"]}]}},render:t},i={name:"Center Text",args:{height:"md",color_palette:"device-status",center_value:"450",center_text:"Devices",data:{labels:["Up","Warning","Down","Unreachable","Info"],datasets:[{label:"Device Status",data:[380,42,12,8,8],hoverOffset:4}]}},render:t},c={name:"Custom Legend Options",args:{height:"md",color_palette:"categorical",legend_position:"bottom",legend_options:{labels:{boxWidth:12,boxHeight:12,padding:16}},data:{labels:["Auckland","Wellington","Christchurch","Hamilton","Tauranga"],datasets:[{label:"Sites",data:[320,180,140,90,70],hoverOffset:4}]}},render:t},d={name:"Custom Tooltip Options",args:{height:"md",color_palette:"categorical",tooltip_options:{displayColors:!1,callbacks:{}},data:{labels:["Auckland","Wellington","Christchurch","Hamilton","Tauranga"],datasets:[{label:"Sites",data:[320,180,140,90,70],hoverOffset:4}]}},render:t},u={name:"Thin Ring (cutout)",args:{height:"md",color_palette:"sequential",cutout:88,center_value:"74%",center_text:"Utilisation",data:{labels:["Used","Free"],datasets:[{label:"Disk",data:[74,26],hoverOffset:4}]}},render:t};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Categorical Palette',
  args: {
    height: 'md',
    color_palette: 'categorical',
    data: {
      labels: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga'],
      datasets: [{
        label: 'Sites',
        data: [320, 180, 140, 90, 70],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,b,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Sequential Palette',
  args: {
    height: 'md',
    color_palette: 'sequential',
    data: {
      labels: ['0–20%', '20–40%', '40–60%', '60–80%', '80–100%'],
      datasets: [{
        label: 'Utilisation',
        data: [10, 25, 40, 60, 80],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var v,f,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Alert Palette',
  args: {
    height: 'md',
    color_palette: 'alert',
    data: {
      labels: ['Critical', 'Warning', 'Normal', 'Disabled'],
      datasets: [{
        label: 'Events',
        data: [12, 34, 200, 8],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var O,S,T;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Device Status Palette',
  args: {
    height: 'md',
    color_palette: 'device-status',
    center_value: '450',
    center_text: 'Devices',
    data: {
      labels: ['Up', 'Warning', 'Down', 'Unreachable', 'Info'],
      datasets: [{
        label: 'Device Status',
        data: [380, 42, 12, 8, 8],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,D,x;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Onboarding Status Palette',
  args: {
    height: 'md',
    color_palette: 'onboarding-status',
    center_value: '450',
    center_text: 'Devices',
    data: {
      labels: ['Online', 'In Progress', 'Pending', 'Failed', 'No Bootstrap'],
      datasets: [{
        label: 'Onboarding',
        data: [320, 60, 40, 18, 12],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var $,y,U;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Custom Colors (CUSTOM palette)',
  args: {
    height: 'md',
    color_palette: 'custom',
    data: {
      labels: ['One', 'Two', 'Three'],
      datasets: [{
        label: 'My Dataset',
        data: [300, 50, 100],
        hoverOffset: 4,
        backgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
        hoverBackgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
        hoverBorderColor: ['#7E57C2', '#26A69A', '#42A5F5']
      }]
    }
  },
  render: Template
}`,...(U=(y=l.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};var k,q,P;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Center Text',
  args: {
    height: 'md',
    color_palette: 'device-status',
    center_value: '450',
    center_text: 'Devices',
    data: {
      labels: ['Up', 'Warning', 'Down', 'Unreachable', 'Info'],
      datasets: [{
        label: 'Device Status',
        data: [380, 42, 12, 8, 8],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(P=(q=i.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var W,F,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Custom Legend Options',
  args: {
    height: 'md',
    color_palette: 'categorical',
    legend_position: 'bottom',
    legend_options: {
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 16
      }
    },
    data: {
      labels: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga'],
      datasets: [{
        label: 'Sites',
        data: [320, 180, 140, 90, 70],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var N,H,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Custom Tooltip Options',
  args: {
    height: 'md',
    color_palette: 'categorical',
    tooltip_options: {
      displayColors: false,
      callbacks: {}
    },
    data: {
      labels: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga'],
      datasets: [{
        label: 'Sites',
        data: [320, 180, 140, 90, 70],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(w=(H=d.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var B,I,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Thin Ring (cutout)',
  args: {
    height: 'md',
    color_palette: 'sequential',
    cutout: 88,
    center_value: '74%',
    center_text: 'Utilisation',
    data: {
      labels: ['Used', 'Free'],
      datasets: [{
        label: 'Disk',
        data: [74, 26],
        hoverOffset: 4
      }]
    }
  },
  render: Template
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const M=["Categorical","Sequential","Alert","DeviceStatus","OnboardingStatus","CustomColors","CenterText","LegendOptions","TooltipOptions","ThinRing"];export{o as Alert,a as Categorical,i as CenterText,l as CustomColors,r as DeviceStatus,c as LegendOptions,s as OnboardingStatus,n as Sequential,u as ThinRing,d as TooltipOptions,M as __namedExportsOrder,L as default};
