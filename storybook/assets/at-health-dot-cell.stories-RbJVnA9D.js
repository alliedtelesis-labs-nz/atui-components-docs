const i=l=>`
<at-table page_size=${l.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtHealthDotCell, defineCustomElement as defineHealthDotCell } from './components/at-health-dot-cell.js';
defineTable();
defineTextCell();
defineHealthDotCell();
document.querySelector('at-table').table_data = ${JSON.stringify(l.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(l.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,c={field:"name",colId:"name",headerName:"Device",cellRenderer:"***AtTextCell***"},m={title:"Components/Table Components/Cell Components/Health Dot Cell"},e=i.bind({});e.args={col_defs:[{width:80,field:"health",colId:"health",sortable:!1,headerName:"Health",cellRenderer:"***AtHealthDotCell***"},c],table_data:{items:[{_id:"1",name:"Core switch",health:"good"},{_id:"2",name:"Edge router",health:"warning"},{_id:"3",name:"Access point",health:"critical"}],total:3},page_size:10};const t=i.bind({});t.args={...e.args,col_defs:[{width:16,minWidth:16,maxWidth:16,field:"health",colId:"health",sortable:!1,resizable:!1,headerName:"",cellRenderer:"***AtHealthDotCell***",cellRendererParams:{display:"bar"}},c]};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtHealthDotCell, defineCustomElement as defineHealthDotCell } from './components/at-health-dot-cell.js';
defineTable();
defineTextCell();
defineHealthDotCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var r,s,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtHealthDotCell, defineCustomElement as defineHealthDotCell } from './components/at-health-dot-cell.js';
defineTable();
defineTextCell();
defineHealthDotCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const f=["Default","Bar"];export{t as Bar,e as Default,f as __namedExportsOrder,m as default};
