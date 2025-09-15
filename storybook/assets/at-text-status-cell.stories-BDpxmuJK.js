const s=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextStatusCell, defineCustomElement as defineTextStatusCell } from './components/at-text-status-cell.js';
defineTable();
defineTextStatusCell();
document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,n={title:"Components/Table Components/Cell Components/Text Status Cell"},e=s.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Text Cell",cellRenderer:"***AtTextStatusCell***",cellRendererParams:{generateTooltip:"***(params) => `tooltip: ${params.value}`***",mapValueToBadge:"***(value) => value***"}}],table_data:{items:[{col_one:"default"},{col_one:"success"},{col_one:"error"},{col_one:"warning"}],total:1},page_size:10};var a,l,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextStatusCell, defineCustomElement as defineTextStatusCell } from './components/at-text-status-cell.js';
defineTable();
defineTextStatusCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,n as default};
