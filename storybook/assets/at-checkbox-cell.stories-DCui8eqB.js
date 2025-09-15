const n=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtCheckboxCell, defineCustomElement as defineCheckboxCell } from './components/at-checkbox-cell.js';
import { AtCheckboxHeader, defineCustomElement as defineCheckboxHeader } from './components/at-checkbox-header.js';
defineTable();
defineCheckboxCell();
defineCheckboxHeader();
document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,c={title:"Components/Table Components/Cell Components/Checkbox Cell"},e=n.bind({});e.args={col_defs:[{flex:1,colId:"col_one",field:"col_one",sortable:!1,headerName:"Checkbox Cell",cellRenderer:"***AtCheckboxCell***",headerComponent:"***AtCheckboxHeader***"}],table_data:{items:[{_id:"1",col_one:!1},{_id:"2",col_one:!0}],total:1},page_size:10};var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtCheckboxCell, defineCustomElement as defineCheckboxCell } from './components/at-checkbox-cell.js';
import { AtCheckboxHeader, defineCustomElement as defineCheckboxHeader } from './components/at-checkbox-header.js';
defineTable();
defineCheckboxCell();
defineCheckboxHeader();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,c as default};
