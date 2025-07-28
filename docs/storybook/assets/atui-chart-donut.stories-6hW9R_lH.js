const c=e=>`
<atui-chart-donut
    canvas_id="${e.canvas_id}"
/>
<script>
${e.data?`document.querySelector('atui-chart-donut').data = ${JSON.stringify(e.data,null,4)}`:""}
${e.options?`document.querySelector('atui-chart-donut').options = ${JSON.stringify(e.options,null,4)}`:""}
${e.tooltip_options?`document.querySelector('atui-chart-donut').tooltip_options = ${JSON.stringify(e.tooltip_options,null,4)}`:""}
${e.plugins?`document.querySelector('atui-chart-donut').plugins = ${JSON.stringify(e.plugins,null,4)}`:""}
<\/script>
`,d={title:"Components/Chart Donut"},t={args:{canvas_id:"1",data:{labels:["One","Two","Three"],datasets:[{label:"My First Dataset",data:[300,50,100],hoverOffset:4,backgroundColor:["#7E57C2","#26A69A","#42A5F5"],hoverBackgroundColor:["#7E57C2","#26A69A","#42A5F5"],hoverBorderColor:["#7E57C2","#26A69A","#42A5F5"]}]},options:{responsive:!0,maintainAspectRatio:!1},plugins:[]},render:c},n={args:{canvas_id:"1",data:{labels:["One","Two","Three"],datasets:[{label:"My First Dataset",data:[300,50,100],hoverOffset:4,backgroundColor:["#7E57C2","#26A69A","#42A5F5"],hoverBackgroundColor:["#7E57C2","#26A69A","#42A5F5"],hoverBorderColor:["#7E57C2","#26A69A","#42A5F5"]}]},center_value:"450",center_text:"Devices",options:{responsive:!0,maintainAspectRatio:!1},plugins:[]},render:c};var o,a,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    canvas_id: '1',
    data: {
      labels: ['One', 'Two', 'Three'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        hoverOffset: 4,
        backgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
        hoverBackgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
        hoverBorderColor: ['#7E57C2', '#26A69A', '#42A5F5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    plugins: []
  },
  render: Template
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,i,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    canvas_id: '1',
    data: {
      labels: ['One', 'Two', 'Three'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        hoverOffset: 4,
        backgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
        hoverBackgroundColor: ['#7E57C2', '#26A69A', '#42A5F5'],
        hoverBorderColor: ['#7E57C2', '#26A69A', '#42A5F5']
      }]
    },
    center_value: '450',
    center_text: 'Devices',
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    plugins: []
  },
  render: Template
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const u=["Donut","CenterText"];export{n as CenterText,t as Donut,u as __namedExportsOrder,d as default};
