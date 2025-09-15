const o=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtChipListCell, defineCustomElement as defineChipListCell } from './components/at-chip-list-cell.js';
defineTable();
defineChipListCell();
document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,n={title:"Components/Table Components/Cell Components/Chip List Cell"},e=o.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Chip List Cell",valueGetter:"***(params) => params.data['col_one']***",cellRenderer:"***AtChipListCell***"}],table_data:{items:[{_id:"1",col_one:["one","two","three"]}],total:1},page_size:10};var l,a,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtChipListCell, defineCustomElement as defineChipListCell } from './components/at-chip-list-cell.js';
defineTable();
defineChipListCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,n as default};
