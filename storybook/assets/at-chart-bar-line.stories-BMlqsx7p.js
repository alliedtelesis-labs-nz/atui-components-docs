const f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=e=>`
<at-chart-bar-line
    type="${e.type}"
    ${e.height?`height="${e.height}"`:""}
    ${e.color_palette?`color_palette="${e.color_palette}"`:""}
/>
<script>
${e.data?`document.querySelector('at-chart-bar-line').data = ${JSON.stringify(e.data,null,4)}`:""}
${e.x_axis_format?`document.querySelector('at-chart-bar-line').x_axis_format = ${JSON.stringify(e.x_axis_format,null,4)}`:""}
${e.y_axis_format?`document.querySelector('at-chart-bar-line').y_axis_format = ${JSON.stringify(e.y_axis_format,null,4)}`:""}
${e.options?`document.querySelector('at-chart-bar-line').options = ${JSON.stringify(e.options,null,4).replace(/"\(/g,"(").replace(/`"/g,"`")}`:""}
${e.time_range?`document.querySelector('at-chart-bar-line').time_range = ${JSON.stringify(e.time_range,null,4)}`:""}
${e.thresholds?`document.querySelector('at-chart-bar-line').thresholds = ${JSON.stringify(e.thresholds,null,4)}`:""}
${e.tooltip_options?`document.querySelector('at-chart-bar-line').tooltip_options = ${JSON.stringify(e.tooltip_options,null,4).replace(/"\(/g,"(").replace(/`"/g,"`")}`:""}
${e.legend_options?`document.querySelector('at-chart-bar-line').legend_options = ${JSON.stringify(e.legend_options,null,4)}`:""}
${e.point_styles?`document.querySelector('at-chart-bar-line').point_styles = ${JSON.stringify(e.point_styles,null,4)}`:""}
<\/script>
`,se={title:"Components/Chart Bar Line",argTypes:{color_palette:{control:{type:"select"},options:["categorical","sequential","alert","device-status","onboarding-status","custom"]}}},n={name:"Categorical Palette (bar)",args:{type:"bar",color_palette:"categorical",x_axis_format:{type:"category"},data:{labels:f,datasets:[{label:"Auckland",data:[420,380,510,490,600,570,620,580,540,490,430,460]},{label:"Wellington",data:[310,290,340,360,410,390,440,420,380,350,310,330]},{label:"Christchurch",data:[180,160,210,200,250,230,270,260,230,210,190,200]}]}},render:a},t={name:"Sequential Palette (bar)",args:{type:"bar",color_palette:"sequential",x_axis_format:{type:"category"},data:{labels:f,datasets:f.map((e,oe)=>({label:e,data:[12+oe*8]}))}},render:a},r={name:"Alert Palette (line)",args:{type:"line",color_palette:"alert",x_axis_format:{type:"category"},data:{labels:["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00"],datasets:[{label:"Critical",data:[3,6,12,20,26,30,34,40]},{label:"Warning",data:[1,1,2,4,8,7,6,5]},{label:"Normal",data:[0,0,0,0,0,1,1,1]},{label:"Disabled",data:[2,2,3,2,1,1,2,2]}]}},render:a},o={args:{type:"bar",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],borderWidth:1}]}},render:a},s={args:{type:"line",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],borderWidth:1}]}},render:a},l={args:{type:"line",data:{labels:["2025-01-21T08:52:07.316Z","2025-01-21T11:52:07.316Z","2025-01-21T14:52:07.316Z","2025-01-21T17:52:07.316Z","2025-01-21T20:52:07.316Z","2025-01-21T23:52:07.316Z","2025-01-22T02:52:07.316Z"],datasets:[{label:"First Dataset",data:[11,70,49,82,15,55,87],fill:!1,tension:.1,pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5,borderColor:"#7E57C2",backgroundColor:"#7E57C2"}]}},render:a},i={name:"Custom X Axis Format",args:{type:"line",data:{labels:["2025-01-21T08:52:07.316Z","2025-01-21T11:52:07.316Z","2025-01-21T14:52:07.316Z","2025-01-21T17:52:07.316Z","2025-01-21T20:52:07.316Z","2025-01-21T23:52:07.316Z","2025-01-22T02:52:07.316Z"],datasets:[{label:"First Dataset",data:[11,70,49,82,15,55,87],fill:!1,tension:.1,pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5,borderColor:"#7E57C2",backgroundColor:"#7E57C2"}]},x_axis_format:{type:"time",time:{displayFormats:{day:"d",minute:"MM/DD h a",hour:"MM/DD h a"}},ticks:{font:{size:10},autoSkip:!0,align:"center",maxRotation:0,minRotation:0}}},render:a},d={name:"Custom Time Range",args:{type:"line",data:{labels:["2022-12-31T12:00:00.000Z","2022-12-31T14:00:00.000Z","2022-12-31T17:00:00.000Z","2022-12-31T20:00:00.000Z","2022-12-31T23:00:00.000Z","2023-01-01T02:00:00.000Z","2023-01-01T05:00:00.000Z"],datasets:[{label:"First Dataset",data:[42,17,68,91,29,53,5],fill:!1,tension:.1,pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5,borderColor:"#7E57C2",backgroundColor:"#7E57C2"}]},time_range:{selected:"custom",custom:{from:"2023-01-01T01:00:00",to:"2023-01-01T17:00:00"}}},render:a},u={name:"Custom Y Axis Format",args:{type:"line",options:{maintainAspectRatio:!1,elements:{line:{tension:0,borderWidth:2}},animation:!1,scales:{y:{grid:{borderDash:[4,2],drawOnChartArea:!0,display:!0,drawTicks:!0,color:"#e9ecef",offset:!1},stacked:!1,title:{display:!0,text:"Y label"},beginAtZero:!0,min:0,ticks:{callback:"(label) => `${label} bps`"}},x:{grid:{offset:!1},type:"time",time:{unit:"hour",stepSize:2},ticks:{}}},plugins:{tooltip:{mode:"nearest",intersect:!1,position:"nearest",enabled:!0,external:null,callbacks:{}},legend:{labels:{boxWidth:10,boxHeight:10}}}},data:{labels:["2025-01-21T12:00:00.000Z","2025-01-21T14:00:00.000Z","2025-01-21T17:00:00.000Z","2025-01-21T20:00:00.000Z","2025-01-21T23:00:00.000Z","2025-01-22T02:00:00.000Z","2025-01-22T05:00:00.000Z"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]}},render:a},p={name:"Multiple Datasets",args:{type:"line",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[67,94,31,57,43,90,11],fill:!1,tension:.1,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Third Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,borderColor:"#42A5F5",backgroundColor:"#42A5F5",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]}},render:a},c={name:"Stacked Multiple Datasets",args:{type:"line",x_axis_format:{},options:{scales:{y:{grid:{borderDash:[4,2],drawOnChartArea:!0,display:!0,drawTicks:!0,color:"#e9ecef",offset:!1},stacked:!0},x:{grid:{borderDash:[],drawOnChartArea:!0,display:!0,drawTicks:!0,color:"#e9ecef",offset:!1}}}},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[67,94,31,57,43,90,11],fill:!1,tension:.1,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Third Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,borderColor:"#42A5F5",backgroundColor:"#42A5F5",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]}},render:a},b={name:"Line Chart with Thresholds",args:{type:"line",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,order:3,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,order:4,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]},thresholds:[{label:"Threshold One",color:"rgba(153, 102, 255)",dashLine:!0,data:[25,25,25,45,45,45,45],stepped:!0},{label:"Threshold Two",color:"rgba(255, 159, 64)",dashLine:!1,data:[95,95,95,95,95,95,95]}]},render:a},m={name:"Custom Tooltips",args:{type:"line",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.1,order:3,borderColor:"#7E57C2",backgroundColor:"#7E57C2",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5},{label:"Second Dataset",data:[35,18,63,95,32,52,8],fill:!1,tension:.1,order:4,borderColor:"#26A69A",backgroundColor:"#26A69A",pointStyle:"rectRounded",pointRadius:0,pointHoverRadius:5,pointHitRadius:5}]},tooltip_options:{mode:"nearest",intersect:!1,position:"nearest",displayColors:!1,callbacks:{title:"() => `Chart Title`",label:"(label) => `${label.formattedValue} bps`"}}},render:a},y={name:"Area Chart",args:{type:"line",x_axis_format:{},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[81,14,67,38,19,73,95],fill:"origin",tension:.3}]},point_styles:{pointRadius:0,pointHitRadius:0,pointHoverRadius:0}},render:a};var R,C,g;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Categorical Palette (bar)',
  args: {
    type: 'bar',
    color_palette: 'categorical',
    x_axis_format: {
      type: 'category'
    },
    data: {
      labels: MONTHS,
      datasets: [{
        label: 'Auckland',
        data: [420, 380, 510, 490, 600, 570, 620, 580, 540, 490, 430, 460]
      }, {
        label: 'Wellington',
        data: [310, 290, 340, 360, 410, 390, 440, 420, 380, 350, 310, 330]
      }, {
        label: 'Christchurch',
        data: [180, 160, 210, 200, 250, 230, 270, 260, 230, 210, 190, 200]
      }]
    }
  },
  render: Template
}`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var T,h,_;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Sequential Palette (bar)',
  args: {
    type: 'bar',
    color_palette: 'sequential',
    x_axis_format: {
      type: 'category'
    },
    data: {
      labels: MONTHS,
      datasets: MONTHS.map((m, i) => ({
        label: m,
        data: [12 + i * 8]
      }))
    }
  },
  render: Template
}`,...(_=(h=t.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var S,A,x;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Alert Palette (line)',
  args: {
    type: 'line',
    color_palette: 'alert',
    x_axis_format: {
      type: 'category'
    },
    data: {
      labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
      datasets: [{
        label: 'Critical',
        data: [3, 6, 12, 20, 26, 30, 34, 40]
      }, {
        label: 'Warning',
        data: [1, 1, 2, 4, 8, 7, 6, 5]
      }, {
        label: 'Normal',
        data: [0, 0, 0, 0, 0, 1, 1, 1]
      }, {
        label: 'Disabled',
        data: [2, 2, 3, 2, 1, 1, 2, 2]
      }]
    }
  },
  render: Template
}`,...(x=(A=r.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var H,D,k;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'bar',
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
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var Z,J,F;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'line',
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
}`,...(F=(J=s.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var M,E,v;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'line',
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
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var $,O,q;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Custom X Axis Format',
  args: {
    type: 'line',
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
}`,...(q=(O=i.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var w,N,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Custom Time Range',
  args: {
    type: 'line',
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
}`,...(L=(N=d.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var W,P,Y;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Custom Y Axis Format',
  args: {
    type: 'line',
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
}`,...(Y=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var z,B,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Multiple Datasets',
  args: {
    type: 'line',
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
}`,...(V=(B=p.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var X,j,G;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Stacked Multiple Datasets',
  args: {
    type: 'line',
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
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var I,K,Q;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Line Chart with Thresholds',
  args: {
    type: 'line',
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
      color: 'rgba(153, 102, 255)',
      dashLine: true,
      data: [25, 25, 25, 45, 45, 45, 45],
      stepped: true
    }, {
      label: 'Threshold Two',
      color: 'rgba(255, 159, 64)',
      dashLine: false,
      data: [95, 95, 95, 95, 95, 95, 95]
    }]
  },
  render: Template
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,ee,ae;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Custom Tooltips',
  args: {
    type: 'line',
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
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Area Chart',
  args: {
    type: 'line',
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
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const le=["Categorical","Sequential","AlertPalette","Bar","Line","Time","Date","TimeRange","CustomYLabel","MultipleDatasets","StackedMultipleDatasets","Thresholds","Tooltips","Area"];export{r as AlertPalette,y as Area,o as Bar,n as Categorical,u as CustomYLabel,i as Date,s as Line,p as MultipleDatasets,t as Sequential,c as StackedMultipleDatasets,b as Thresholds,l as Time,d as TimeRange,m as Tooltips,le as __namedExportsOrder,se as default};
