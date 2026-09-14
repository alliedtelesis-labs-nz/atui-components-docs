const i=l=>`
<at-table page_size=${l.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
defineTable();
defineTextCell();
document.querySelector('at-table').table_data = ${JSON.stringify(l.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(l.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,d={title:"Components/Table Components/Cell Components/Text Cell"},e=i.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Text Cell",cellRenderer:"***AtTextCell***",cellRendererParams:{generateTooltip:"***(params) => `tooltip: ${params.value}`***"}}],table_data:{items:[{_id:"1",col_one:"Text value"}],total:1},page_size:10};const t=i.bind({});t.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Text Link",cellRenderer:"***AtTextCell***",cellRendererParams:{isLink:!0,click:"***(params) => alert(`Link clicked: ${params.value}`)***"}}],table_data:{items:[{_id:"1",col_one:"Clickable value"}],total:1},page_size:10};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
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
\``,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var r,s,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
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
\``,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const m=["Default","Link"];export{e as Default,t as Link,m as __namedExportsOrder,d as default};
