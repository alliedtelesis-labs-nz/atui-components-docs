const i=l=>`
<at-table page_size=${l.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtMultiBtnCell, defineCustomElement as defineMultiBtnCell } from './components/at-multi-btn-cell.js';
defineTable();
defineMultiBtnCell();
document.querySelector('at-table').col_defs = ${JSON.stringify(l.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table').table_data = ${JSON.stringify(l.table_data,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table')
    .createGrid()
<\/script>
`,d={title:"Components/Table Components/Cell Components/Multi Button Cell"},t=i.bind({});t.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,cellRenderer:"***AtMultiBtnCell***",headerName:"Multi Button Cell",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{buttons:"***(params) => params.data['col_one']***"}}],table_data:{items:[{_id:"1",col_one:[{value:"one",disabled:!1,click:'***(params) => console.log("clicked btn one")***'},{value:"two",disabled:!1,click:'***(params) => console.log("clicked btn two")***'},{value:"three",disabled:!1,click:'***(params) => console.log("clicked btn three")***'}]}],total:1},page_size:10};const e=i.bind({});e.storyName="Button Types";e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,cellRenderer:"***AtMultiBtnCell***",headerName:"Multi Button Cell",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{buttons:"***(params) => params.data['col_one']***"}}],table_data:{items:[{_id:"1",col_one:[{value:"Retry",disabled:!1,click:'***(params) => console.log("retry")***'},{value:"Approve",type:"primaryText",disabled:!1,click:'***(params) => console.log("approve")***'},{value:"Delete",type:"destructiveText",disabled:!1,click:'***(params) => console.log("delete")***'}]}],total:1},page_size:10};e.parameters={docs:{description:{story:"Each button carries an optional `type`; a button that omits it stays `secondaryText`, so a row can single out the consequential action without restyling the rest."}}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
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
\``,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
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
\``,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const m=["Default","ButtonTypes"];export{e as ButtonTypes,t as Default,m as __namedExportsOrder,d as default};
