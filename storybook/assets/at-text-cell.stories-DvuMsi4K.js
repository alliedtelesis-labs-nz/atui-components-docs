const n=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
defineTable();
defineTextCell();
document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,r={title:"Components/Table Components/Cell Components/Text Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Text Cell",cellRenderer:"***AtTextCell***",cellRendererParams:{generateTooltip:"***(params) => `tooltip: ${params.value}`***"}}],table_data:{items:[{_id:"1",col_one:"Text value"}],total:1},page_size:10};var l,a,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
defineTable();
defineTextCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,r as default};
