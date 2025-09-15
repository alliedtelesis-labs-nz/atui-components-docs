const n=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtMultiBtnCell, defineCustomElement as defineMultiBtnCell } from './components/at-multi-btn-cell.js';
defineTable();
defineMultiBtnCell();
document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table')
    .createGrid()
<\/script>
`,s={title:"Components/Table Components/Cell Components/Multi Button Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,cellRenderer:"***AtMultiBtnCell***",headerName:"Multi Button Cell",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{buttons:"***(params) => params.data['col_one']***"}}],table_data:{items:[{_id:"1",col_one:[{value:"one",disabled:!1,click:'***(params) => console.log("clicked btn one")***'},{value:"two",disabled:!1,click:'***(params) => console.log("clicked btn two")***'},{value:"three",disabled:!1,click:'***(params) => console.log("clicked btn three")***'}]}],total:1},page_size:10};var l,a,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtMultiBtnCell, defineCustomElement as defineMultiBtnCell } from './components/at-multi-btn-cell.js';
defineTable();
defineMultiBtnCell();
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
<\/script>
\``,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,s as default};
