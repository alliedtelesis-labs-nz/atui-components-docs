const o=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTitleSubtitleCell, defineCustomElement as defineComponent } from './components/at-title-subtitle-cell.js';
defineTable();
defineComponent();
document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
`,i={title:"Components/Table Components/Cell Components/Title Subtitle Cell"},e=o.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Title Subtitle Cell",valueGetter:"***(params) => params.data['col_one']***",cellRenderer:"***AtTitleSubtitleCell***"}],table_data:{items:[{_id:"1",col_one:{title:"Title String",subtitle:"Subtitle String"}}],total:1},page_size:10};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTitleSubtitleCell, defineCustomElement as defineComponent } from './components/at-title-subtitle-cell.js';
defineTable();
defineComponent();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,i as default};
