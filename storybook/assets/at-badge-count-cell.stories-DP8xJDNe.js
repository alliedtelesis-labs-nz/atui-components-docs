const n=l=>`
<at-table page_size=${l.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtBadgeCountCell, defineCustomElement as defineBadgeCountCell } from './components/at-badge-count-cell.js';
defineTable();
defineBadgeCountCell();
document.querySelector('at-table').table_data = ${JSON.stringify(l.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(l.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,g={title:"Components/Table Components/Cell Components/Badge Count Cell"},e=n.bind({});e.args={col_defs:[{width:110,field:"switches",colId:"switches",sortable:!1,headerName:"Switches",cellRenderer:"***AtBadgeCountCell***"}],table_data:{items:[{_id:"1",switches:[{count:12,type:"success",label:"healthy"},{count:1,type:"warning",label:"warning"},{count:4,type:"error",label:"critical"},{count:0,type:"disabled",label:"unreachable"}]},{_id:"2",switches:[{count:9,type:"success",label:"healthy"},{count:0,type:"warning",label:"warning"},{count:0,type:"error",label:"critical"},{count:2,type:"disabled",label:"unreachable"}]}],total:2},page_size:10};const t=n.bind({});t.args={...e.args,col_defs:[{width:160,field:"switches",colId:"switches",sortable:!1,headerName:"Switches",cellRenderer:"***AtBadgeCountCell***",cellRendererParams:{show_zero_counts:!0}}]};const a=n.bind({});a.args={...e.args,col_defs:[{width:110,field:"switches",colId:"switches",sortable:!1,headerName:"Switches",cellRenderer:"***AtBadgeCountCell***",cellRendererParams:{impact:"high"}}]};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtBadgeCountCell, defineCustomElement as defineBadgeCountCell } from './components/at-badge-count-cell.js';
defineTable();
defineBadgeCountCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,d,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtBadgeCountCell, defineCustomElement as defineBadgeCountCell } from './components/at-badge-count-cell.js';
defineTable();
defineBadgeCountCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtBadgeCountCell, defineCustomElement as defineBadgeCountCell } from './components/at-badge-count-cell.js';
defineTable();
defineBadgeCountCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const b=["Default","ShowZeroCounts","HighImpact"];export{e as Default,a as HighImpact,t as ShowZeroCounts,b as __namedExportsOrder,g as default};
