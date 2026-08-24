const o=l=>`
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
`,b={title:"Components/Table Components/Cell Components/Multi Button Cell"},a=o.bind({});a.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,cellRenderer:"***AtMultiBtnCell***",headerName:"Multi Button Cell",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{buttons:"***(params) => params.data['col_one']***"}}],table_data:{items:[{_id:"1",col_one:[{value:"one",disabled:!1,click:'***(params) => console.log("clicked btn one")***'},{value:"two",disabled:!1,click:'***(params) => console.log("clicked btn two")***'},{value:"three",disabled:!1,click:'***(params) => console.log("clicked btn three")***'}]}],total:1},page_size:10};const e=o.bind({});e.storyName="Button Types";e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,cellRenderer:"***AtMultiBtnCell***",headerName:"Multi Button Cell",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{buttons:"***(params) => params.data['col_one']***"}}],table_data:{items:[{_id:"1",col_one:[{value:"Retry",disabled:!1,click:'***(params) => console.log("retry")***'},{value:"Approve",type:"primaryText",disabled:!1,click:'***(params) => console.log("approve")***'},{value:"Delete",type:"destructiveText",disabled:!1,click:'***(params) => console.log("delete")***'}]}],total:1},page_size:10};e.parameters={docs:{description:{story:"Each button carries an optional `type`; a button that omits it stays `secondaryText`, so a row can single out the consequential action without restyling the rest."}}};const t=o.bind({});t.storyName="Icon Buttons";t.args={col_defs:[{width:100,field:"col_one",colId:"col_one",sortable:!1,resizable:!1,cellRenderer:"***AtMultiBtnCell***",headerName:"Actions",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{buttons:"***(params) => params.data['col_one']***"}}],table_data:{items:[{_id:"1",col_one:[{value:"Edit",icon:"edit",tooltip:"Edit this row",disabled:!1,click:'***(params) => console.log("edit")***'},{value:"Delete",icon:"delete",type:"destructiveText",tooltip:"Delete this row",disabled:!1,click:'***(params) => console.log("delete")***'}]}],total:1},page_size:10};t.parameters={docs:{description:{story:"Setting `icon` renders the button as an icon only, which keeps an actions column down to the width of its buttons. `value` becomes the accessible name, so give every icon button a `tooltip` as well to state the action on hover."}}};var s,r,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
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
\``,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
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
\``,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
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
\``,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const f=["Default","ButtonTypes","IconButtons"];export{e as ButtonTypes,a as Default,t as IconButtons,f as __namedExportsOrder,b as default};
