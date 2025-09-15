const n=l=>`
<at-table page_size=${l.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtToggleCell, defineCustomElement as defineToggleCell } from './components/at-toggle-cell.js';
defineTable();
defineToggleCell();
document.querySelector('at-table').table_data = ${JSON.stringify(l.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(l.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,r={title:"Components/Table Components/Cell Components/Toggle Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Toggle Cell",cellRenderer:"***AtToggleCell***",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{getLabel:"***() => `label string`***",onTrigger:"***(params) => console.log(params.value)***"}}],table_data:{items:[{_id:"1",col_one:"true"}],total:1},page_size:10};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtToggleCell, defineCustomElement as defineToggleCell } from './components/at-toggle-cell.js';
defineTable();
defineToggleCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,r as default};
