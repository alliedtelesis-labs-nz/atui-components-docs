const o=t=>`
<atui-table page_size=${t.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiEditTextCell, defineCustomElement as defineEditTextCell } from './components/atui-edit-text-cell.js';
defineTable();
defineEditTextCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('atui-table').createGrid()
<\/script>
`,n={title:"Components/Table Components/Cell Components/Edit Text Cell"},e=o.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Edit Text Cell",valueGetter:"***(params) => params.data['col_one']***",cellRenderer:"***AtuiEditTextCell***",cellRendererParams:{onValueChange:"***(params) => console.log(params.value)***",writePermission:!0}}],table_data:{items:[{_id:"1",col_one:"You can change this!"}],total:1},page_size:10};var a,l,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-table page_size=\${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiEditTextCell, defineCustomElement as defineEditTextCell } from './components/atui-edit-text-cell.js';
defineTable();
defineEditTextCell();
document.querySelector('atui-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('atui-table').createGrid()
<\/script>
\``,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,n as default};
