const n=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { defineCustomElement as defineRadioCell } from './components/at-radio-cell.js';
defineTable();
defineRadioCell();
document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').createGrid()
<\/script>
`,r={title:"Components/Table Components/Cell Components/Radio Cell"},e=n.bind({});e.args={col_defs:[{flex:1,colId:"col_one",field:"col_one",sortable:!1,headerName:"Radio Cell",cellRenderer:"AtRadioCell",cellRendererParams:{checked:"***(data) => data.col_one***",setValue:"***function () {}***"}}],table_data:{items:[{_id:"1",col_one:!0},{_id:"2",col_one:!1}],total:2},page_size:10};var a,l,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { defineCustomElement as defineRadioCell } from './components/at-radio-cell.js';
defineTable();
defineRadioCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,r as default};
