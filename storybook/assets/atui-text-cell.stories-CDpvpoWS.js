const n=t=>`
<atui-table page_size=${t.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiTextCell, defineCustomElement as defineTextCell } from './components/atui-text-cell.js';
defineTable();
defineTextCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('atui-table').createGrid()
<\/script>
`,r={title:"Components/Table Components/Cell Components/Text Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Text Cell",cellRenderer:"***AtuiTextCell***",cellRendererParams:{generateTooltip:"***(params) => `tooltip: ${params.value}`***"}}],table_data:{items:[{_id:"1",col_one:"Text value"}],total:1},page_size:10};var l,a,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<atui-table page_size=\${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiTextCell, defineCustomElement as defineTextCell } from './components/atui-text-cell.js';
defineTable();
defineTextCell();
document.querySelector('atui-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('atui-table').createGrid()
<\/script>
\``,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,r as default};
