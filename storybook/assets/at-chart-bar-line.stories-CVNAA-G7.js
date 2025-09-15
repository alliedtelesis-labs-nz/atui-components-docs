const e=a=>`
<at-chart-bar-line
    type="${a.type}"
    canvas_id="${a.canvas_id}"
/>
<script>
${a.data?`document.querySelector('at-chart-bar-line').data = ${JSON.stringify(a.data,null,4)}`:""}
${a.x_axis_format?`document.querySelector('at-chart-bar-line').x_axis_format = ${JSON.stringify(a.x_axis_format,null,4)}`:""}
${a.options?`document.querySelector('at-chart-bar-line').options = ${JSON.stringify(a.options,null,4).replace(/"\(/g,"(").replace(/`"/g,"`")}`:""}
${a.time_range?`document.querySelector('at-chart-bar-line').time_range = ${JSON.stringify(a.time_range,null,4)}`:""}
${a.thresholds?`document.querySelector('at-chart-bar-line').thresholds = ${JSON.stringify(a.thresholds,null,4)}`:""} 
${a.tooltip_options?`document.querySelector('at-chart-bar-line').tooltip_options = ${JSON.stringify(a.tooltip_options,null,4).replace(/"\(/g,"(").replace(/`"/g,"`")}`:""}
${a.point_styles?`document.querySelector('at-chart-bar-line').point_styles = ${JSON.stringify(a.point_styles,null,4)}`:""}
<\/script>
`,X={title:"Components/Chart Bar Line"},n={args:{type:"bar",canvas_id:"1",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],borderWidth:1}]}},render:e},t={args:{type:"line",canvas_id:"1",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],borderWidth:1}]}},render:e},r={args:{type:"line",canvas_id:"1",data:{labels:["2025-01-21T08:52:07.316Z","2025-01-21T11:52:07.316Z","2025-01-21T14:52:07.316Z","2025-01-21T17:52:07.316Z","2025-01-21T20:52:07.316Z","2025-01-21T23:52:07.316Z","2025-01-22T02:52:07.316Z"],datasets:[{label:"First Dataset",data:[11,70,49,82,15,55,87],fill:!1,tension:.1,pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5,borderColor:"#7E57C2",backgroundColor:"#7E57C2"}]}},render:e},o={name:"Custom X Axis Format",args:{type:"line",canvas_id:"1",data:{labels:["2025-01-21T08:52:07.316Z","2025-01-21T11:52:07.316Z","2025-01-21T14:52:07.316Z","2025-01-21T17:52:07.316Z","2025-01-21T20:52:07.316Z","2025-01-21T23:52:07.316Z","2025-01-22T02:52:07.316Z"],datasets:[{label:"First Dataset",data:[11,70,49,82,15,55,87],fill:!1,tension:.1,pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5,borderColor:"#7E57C2",backgroundColor:"#7E57C2"}]},x_axis_format:{type:"time",time:{displayFormats:{day:"d",minute:"MM/DD h a",hour:"MM/DD h a"}},ticks:{font:{size:10},autoSkip:!0,align:"center",maxRotation:0,minRotation:0}}},render:e},s={name:"Custom Time Range",args:{type:"line",canvas_id:"1",data:{labels:["2022-12-31T12:00:00.000Z","2022-12-31T14:00:00.000Z","2022-12-31T17:00:00.000Z","2022-12-31T20:00:00.000Z","2022-12-31T23:00:00.000Z","2023-01-01T02:00:00.000Z","2023-01-01T05:00:00.000Z"],datasets:[{label:"First Dataset",data:[42,17,68,91,29,53,5],fill:!1,tension:.1,pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5,borderColor:"#7E57C2",backgroundColor:"#7E57C2"}]},time_range:{selected:"custom",custom:{from:"2023-01-01T01:00:00",to:"2023-01-01T17:00:00"}}},render:e},i={name:"Custom Y Axis Format",args:{type:"line",canvas_id:"1",options:{maintainAspectRatio:!1,elements:{line:{tension:0,borderWidth:2}},animation:!1,scales:{y:{grid:{borderDash:[4,2],drawOnChartArea:!0,display:!0,drawTicks:!0,color:"#e9ecef",offset:!1},stacked:!1,title:{display:!0,text:"Y label"},beginAtZero:!0,min:0,ticks:{callback:"(label) => `${label} bps`"}},x:{grid:{offset:!1},type:"time",time:{unit:"hour",stepSize:2},ticks:{}}},plugins:{tooltip:{mode:"nearest",intersect:!1,position:"nearest",enabled:!0,external:null,callbacks:{}},legend:{labels:{boxWidth:10,boxHeight:10}}}},data:{labels:["2025-01-21T12:00:00.000Z","2025-01-21T14:00:00.000Z","2025-01-21T17:00:00.000Z","2025-01-21T20:00:00.000Z","2025-01-21T23:00:00.000Z","2025-01-22T02:00:00.000Z","2025-01-22T05:00:00.000Z"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]}},render:e},l={name:"Multiple Datasets",args:{type:"line",canvas_id:"1",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[67,94,31,57,43,90,11],fill:!1,tension:.1,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Third Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,borderColor:"#42A5F5",backgroundColor:"#42A5F5",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]}},render:e},d={name:"Stacked Multiple Datasets",args:{type:"line",canvas_id:"1",x_axis_format:{},options:{scales:{y:{grid:{borderDash:[4,2],drawOnChartArea:!0,display:!0,drawTicks:!0,color:"#e9ecef",offset:!1},stacked:!0},x:{grid:{borderDash:[],drawOnChartArea:!0,display:!0,drawTicks:!0,color:"#e9ecef",offset:!1}}}},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[67,94,31,57,43,90,11],fill:!1,tension:.1,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Third Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,borderColor:"#42A5F5",backgroundColor:"#42A5F5",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]}},render:e},u={name:"Line Chart with Thresholds",args:{type:"line",canvas_id:"1",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,order:3,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,order:4,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]},thresholds:[{label:"Threshold One",color:"rgba(153,  102,  255)",dashLine:!0,data:[25,25,25,45,45,45,45],stepped:!0},{label:"Threshold Two",color:"rgba(255,  159,  64)",dashLine:!1,data:[95,95,95,95,95,95,95]}]},render:e},p={name:"Custom Tooltips",args:{type:"line",canvas_id:"1",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,order:3,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,order:4,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]},tooltip_options:{mode:"nearest",intersect:!1,position:"nearest",displayColors:!1,callbacks:{title:"() => `Chart Title`",label:"(label) => `${label.formattedValue} bps`"}}},render:e},c={name:"Area Chart",args:{type:"line",canvas_id:"1",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[81,14,67,38,19,73,95],fill:"origin",tension:.3}]},point_styles:{pointRadius:0,pointHitRadius:0,pointHoverRadius:0}},render:e};var b,m,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    canvas_id: '1',
    x_axis_format: {},
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderWidth: 1
      }]
    }
  },
  render: Template
}`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,R,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'line',
    canvas_id: '1',
    x_axis_format: {},
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderWidth: 1
      }]
    }
  },
  render: Template
}`,...(C=(R=t.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,h,g;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'line',
    canvas_id: '1',
    data: {
      labels: ['2025-01-21T08:52:07.316Z', '2025-01-21T11:52:07.316Z', '2025-01-21T14:52:07.316Z', '2025-01-21T17:52:07.316Z', '2025-01-21T20:52:07.316Z', '2025-01-21T23:52:07.316Z', '2025-01-22T02:52:07.316Z'],
      datasets: [{
        label: 'First Dataset',
        data: [11, 70, 49, 82, 15, 55, 87],
        fill: false,
        tension: 0.1,
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2'
      }]
    }
  },
  render: Template
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var _,A,S;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Custom X Axis Format',
  args: {
    type: 'line',
    canvas_id: '1',
    data: {
      labels: ['2025-01-21T08:52:07.316Z', '2025-01-21T11:52:07.316Z', '2025-01-21T14:52:07.316Z', '2025-01-21T17:52:07.316Z', '2025-01-21T20:52:07.316Z', '2025-01-21T23:52:07.316Z', '2025-01-22T02:52:07.316Z'],
      datasets: [{
        label: 'First Dataset',
        data: [11, 70, 49, 82, 15, 55, 87],
        fill: false,
        tension: 0.1,
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2'
      }]
    },
    x_axis_format: {
      type: 'time',
      time: {
        displayFormats: {
          day: 'd',
          minute: 'MM/DD h a',
          hour: 'MM/DD h a'
        }
      },
      ticks: {
        font: {
          size: 10
        },
        autoSkip: true,
        align: 'center',
        maxRotation: 0,
        minRotation: 0
      }
    }
  },
  render: Template
}`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var H,x,D;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Custom Time Range',
  args: {
    type: 'line',
    canvas_id: '1',
    data: {
      labels: ['2022-12-31T12:00:00.000Z', '2022-12-31T14:00:00.000Z', '2022-12-31T17:00:00.000Z', '2022-12-31T20:00:00.000Z', '2022-12-31T23:00:00.000Z', '2023-01-01T02:00:00.000Z', '2023-01-01T05:00:00.000Z'],
      datasets: [{
        label: 'First Dataset',
        data: [42, 17, 68, 91, 29, 53, 5],
        fill: false,
        tension: 0.1,
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2'
      }]
    },
    time_range: {
      selected: 'custom',
      custom: {
        from: '2023-01-01T01:00:00',
        to: '2023-01-01T17:00:00'
      }
    }
  },
  render: Template
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var Z,k,v;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Custom Y Axis Format',
  args: {
    type: 'line',
    canvas_id: '1',
    options: {
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0,
          borderWidth: 2
        }
      },
      animation: false,
      scales: {
        y: {
          grid: {
            borderDash: [4, 2],
            drawOnChartArea: true,
            display: true,
            drawTicks: true,
            color: '#e9ecef',
            offset: false
          },
          stacked: false,
          title: {
            display: true,
            text: 'Y label'
          },
          beginAtZero: true,
          min: 0,
          ticks: {
            callback: '(label) => \`\${label} bps\`'
          }
        },
        x: {
          grid: {
            offset: false
          },
          type: 'time',
          time: {
            unit: 'hour',
            stepSize: 2
          },
          ticks: {}
        }
      },
      plugins: {
        tooltip: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          enabled: true,
          external: null,
          callbacks: {}
        },
        legend: {
          labels: {
            boxWidth: 10,
            boxHeight: 10
          }
        }
      }
    },
    data: {
      labels: ['2025-01-21T12:00:00.000Z', '2025-01-21T14:00:00.000Z', '2025-01-21T17:00:00.000Z', '2025-01-21T20:00:00.000Z', '2025-01-21T23:00:00.000Z', '2025-01-22T02:00:00.000Z', '2025-01-22T05:00:00.000Z'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.1,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }]
    }
  },
  render: Template
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var F,J,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Multiple Datasets',
  args: {
    type: 'line',
    canvas_id: '1',
    x_axis_format: {},
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.1,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }, {
        label: 'Second Dataset',
        data: [67, 94, 31, 57, 43, 90, 11],
        fill: false,
        tension: 0.1,
        borderColor: '#26A69A',
        backgroundColor: '#26A69A',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }, {
        label: 'Third Dataset',
        data: [35, 18, 63, 95, 32, 52, 8],
        fill: false,
        tension: 0.1,
        borderColor: '#42A5F5',
        backgroundColor: '#42A5F5',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }]
    }
  },
  render: Template
}`,...(M=(J=l.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var E,$,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Stacked Multiple Datasets',
  args: {
    type: 'line',
    canvas_id: '1',
    x_axis_format: {},
    options: {
      scales: {
        y: {
          grid: {
            borderDash: [4, 2],
            drawOnChartArea: true,
            display: true,
            drawTicks: true,
            color: '#e9ecef',
            offset: false
          },
          stacked: true
        },
        x: {
          grid: {
            borderDash: [],
            drawOnChartArea: true,
            display: true,
            drawTicks: true,
            color: '#e9ecef',
            offset: false
          }
        }
      }
    },
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.1,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }, {
        label: 'Second Dataset',
        data: [67, 94, 31, 57, 43, 90, 11],
        fill: false,
        tension: 0.1,
        borderColor: '#26A69A',
        backgroundColor: '#26A69A',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }, {
        label: 'Third Dataset',
        data: [35, 18, 63, 95, 32, 52, 8],
        fill: false,
        tension: 0.1,
        borderColor: '#42A5F5',
        backgroundColor: '#42A5F5',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }]
    }
  },
  render: Template
}`,...(w=($=d.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var O,L,W;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Line Chart with Thresholds',
  args: {
    type: 'line',
    canvas_id: '1',
    x_axis_format: {},
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.1,
        order: 3,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }, {
        label: 'Second Dataset',
        data: [35, 18, 63, 95, 32, 52, 8],
        fill: false,
        tension: 0.1,
        order: 4,
        borderColor: '#26A69A',
        backgroundColor: '#26A69A',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }]
    },
    thresholds: [{
      label: 'Threshold One',
      color: 'rgba(153,  102,  255)',
      dashLine: true,
      data: [25, 25, 25, 45, 45, 45, 45],
      stepped: true
    }, {
      label: 'Threshold Two',
      color: 'rgba(255,  159,  64)',
      dashLine: false,
      data: [95, 95, 95, 95, 95, 95, 95]
    }]
  },
  render: Template
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var q,N,Y;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Custom Tooltips',
  args: {
    type: 'line',
    canvas_id: '1',
    x_axis_format: {},
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.1,
        order: 3,
        borderColor: '#7E57C2',
        backgroundColor: '#7E57C2',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }, {
        label: 'Second Dataset',
        data: [35, 18, 63, 95, 32, 52, 8],
        fill: false,
        tension: 0.1,
        order: 4,
        borderColor: '#26A69A',
        backgroundColor: '#26A69A',
        pointStyle: 'rectRounded',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 5
      }]
    },
    tooltip_options: {
      mode: 'nearest',
      intersect: false,
      position: 'nearest',
      displayColors: false,
      callbacks: {
        title: '() => \`Chart Title\`',
        label: '(label) => \`\${label.formattedValue} bps\`'
      }
    }
  },
  render: Template
}`,...(Y=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var z,B,V;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Area Chart',
  args: {
    type: 'line',
    canvas_id: '1',
    x_axis_format: {},
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [81, 14, 67, 38, 19, 73, 95],
        fill: 'origin',
        tension: 0.3
      }]
    },
    point_styles: {
      pointRadius: 0,
      pointHitRadius: 0,
      pointHoverRadius: 0
    }
  },
  render: Template
}`,...(V=(B=c.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const j=["Bar","Line","Time","Date","TimeRange","CustomYLabel","MultipleDatasets","StackedMultipleDatasets","Thresholds","Tooltips","Area"];export{c as Area,n as Bar,i as CustomYLabel,o as Date,t as Line,l as MultipleDatasets,d as StackedMultipleDatasets,u as Thresholds,r as Time,s as TimeRange,p as Tooltips,j as __namedExportsOrder,X as default};
