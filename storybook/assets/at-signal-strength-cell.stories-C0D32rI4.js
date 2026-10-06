const d=l=>`
<at-table page_size=${l.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtSignalStrengthCell, defineCustomElement as defineSignalStrengthCell } from './components/at-signal-strength-cell.js';
defineTable();
defineTextCell();
defineSignalStrengthCell();
document.querySelector('at-table').table_data = ${JSON.stringify(l.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(l.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,m={field:"name",colId:"name",headerName:"Client",cellRenderer:"***AtTextCell***"},c={items:[{_id:"1",name:"Laptop-Finance-04",rssi:-48},{_id:"2",name:"iPhone-Reception",rssi:-64},{_id:"3",name:"Printer-Level2",rssi:-71},{_id:"4",name:"Sensor-Warehouse",rssi:-82},{_id:"5",name:"Tablet-Car-Park",rssi:-91}],total:5},g={title:"Components/Table Components/Cell Components/Signal Strength Cell"},e=d.bind({});e.args={col_defs:[m,{width:140,field:"rssi",colId:"rssi",headerName:"Signal",cellRenderer:"***AtSignalStrengthCell***"}],table_data:c,page_size:10};const t=d.bind({});t.args={...e.args,col_defs:[m,{width:80,field:"rssi",colId:"rssi",headerName:"Signal",cellRenderer:"***AtSignalStrengthCell***",cellRendererParams:{show_value:!1,variant:"mono"}}]};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtSignalStrengthCell, defineCustomElement as defineSignalStrengthCell } from './components/at-signal-strength-cell.js';
defineTable();
defineTextCell();
defineSignalStrengthCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtSignalStrengthCell, defineCustomElement as defineSignalStrengthCell } from './components/at-signal-strength-cell.js';
defineTable();
defineTextCell();
defineSignalStrengthCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const f=["Default","BarsOnlyMono"];export{t as BarsOnlyMono,e as Default,f as __namedExportsOrder,g as default};
