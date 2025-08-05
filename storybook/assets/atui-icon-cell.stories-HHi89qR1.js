const n=t=>`
<atui-table page_size=${t.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiIconCell, defineCustomElement as defineIconCell } from './components/atui-icon-cell.js';
defineTable();
defineIconCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('atui-table')
    .createGrid()
<\/script>
`,i={title:"Components/Table Components/Cell Components/Icon Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_two",colId:"col_two",sortable:!1,cellRenderer:"***AtuiIconCell***",headerName:"Icon Cell",valueGetter:"***(params) => params.data['col_one']***",cellRendererParams:{generateTooltip:"***(tooltipText) => `${tooltipText}`***"}}],table_data:{items:[{_id:"1",col_one:[{iconName:"home",iconClass:"text-info-foreground cursor-pointer",tooltipText:"home icon"},{iconName:"warning",iconClass:"text-warning-foreground cursor-pointer",tooltipText:"warning icon"}]}],total:1},page_size:10};var o,l,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<atui-table page_size=\${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiIconCell, defineCustomElement as defineIconCell } from './components/atui-icon-cell.js';
defineTable();
defineIconCell();
document.querySelector('atui-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('atui-table')
    .createGrid()
<\/script>
\``,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,i as default};
