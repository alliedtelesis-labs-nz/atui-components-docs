const n=t=>`
<atui-table page_size=${t.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiImageCell, defineCustomElement as defineImageCell } from './components/atui-image-cell.js';
defineTable();
defineImageCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(t.table_data,null,4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('atui-table')
    .createGrid()
<\/script>
`,i={title:"Components/Table Components/Cell Components/Image Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,cellRenderer:"***AtuiImageCell***",headerName:"Image Cell",cellRendererParams:{generateTooltip:'***(params) => "tooltip: image cell" ***',getImageSource:"***(data) => data['col_one']***"}}],table_data:{items:[{_id:"1",col_one:"./at-logo.svg"}],total:1},page_size:10};var a,l,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-table page_size=\${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiImageCell, defineCustomElement as defineImageCell } from './components/atui-image-cell.js';
defineTable();
defineImageCell();
document.querySelector('atui-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('atui-table')
    .createGrid()
<\/script>
\``,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,i as default};
