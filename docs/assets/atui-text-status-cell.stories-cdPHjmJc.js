const s=t=>`
<atui-table page_size=${t.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiTextStatusCell, defineCustomElement as defineTextStatusCell } from './components/atui-text-status-cell.js';
defineTable();
defineTextStatusCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('atui-table').createGrid()
<\/script>
`,n={title:"Components/Table Components/Cell Components/Text Status Cell"},e=s.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Text Cell",cellRenderer:"***AtuiTextStatusCell***",cellRendererParams:{generateTooltip:"***(params) => `tooltip: ${params.value}`***",mapValueToBadge:"***(value) => value***"}}],table_data:{items:[{col_one:"default"},{col_one:"success"},{col_one:"error"},{col_one:"warning"}],total:1},page_size:10};var a,l,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-table page_size=\${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiTextStatusCell, defineCustomElement as defineTextStatusCell } from './components/atui-text-status-cell.js';
defineTable();
defineTextStatusCell();
document.querySelector('atui-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('atui-table').createGrid()
<\/script>
\``,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,n as default};
