const n=t=>`
<atui-table page_size=${t.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiMenuCell, defineCustomElement as defineMenuCell } from './components/atui-menu-cell.js';
defineTable();
defineMenuCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('atui-table').createGrid()
<\/script>
`,i={title:"Components/Table Components/Cell Components/Menu Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Menu Cell",cellRenderer:"***AtuiMenuCell***",cellRendererParams:{actions:[{title:"Action one",onTrigger:"***(params) => alert('action one clicked')***"},{title:"Action two",onTrigger:"***(params) => alert('Action two clicked')***"},{title:"Action three",getDisabled:"***(data) => true***",disabledTooltip:"disabled tooltip"}]}},{flex:1,field:"col_two",colId:"col_two",sortable:!1,headerName:"Popover Scroll Cell",cellRenderer:"***AtuiMenuCell***",cellRendererParams:{icon:"keyboard_arrow_down",actions:["Action one","Action two","Action three","Action four","Action five","Action six"]}}],table_data:{items:[{_id:"1",col_one:"",col_two:"Label"}],total:1},page_size:10};var l,o,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<atui-table page_size=\${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiMenuCell, defineCustomElement as defineMenuCell } from './components/atui-menu-cell.js';
defineTable();
defineMenuCell();
document.querySelector('atui-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('atui-table').createGrid()
<\/script>
\``,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,i as default};
