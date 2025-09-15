const n=t=>`
<at-table page_size=${t.page_size}></at-table>
<script type="module">
    import { defineCustomElement as defineTable } from './components/at-table.js';
    import { AtTextIconCell, defineCustomElement as defineTextIconCell } from './components/at-text-icon-cell.js';
    defineTable();
    defineTextIconCell();
    document.querySelector('at-table').table_data = ${JSON.stringify(t.table_data,null,4)}
    document.querySelector('at-table').col_defs = ${JSON.stringify(t.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
    document.querySelector('at-table').createGrid()
<\/script>
`,c={title:"Components/Table Components/Cell Components/Text Icon Cell"},e=n.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one",sortable:!1,headerName:"Text with Icons",cellRenderer:"***AtTextIconCell***",cellRendererParams:{getText:"***(data) => data.col_one.text***",getIcons:'***(data) => data.col_one.icons.map(icon => ({iconName: icon,iconClass: "cursor-pointer text-info-foreground",tooltip: `${icon} action`}))***',icon_position:"after"}},{flex:1,field:"col_two",colId:"col_two",sortable:!1,headerName:"Icons Only",cellRenderer:"***AtTextIconCell***",cellRendererParams:{getIcons:'***(data) => data.col_two.map(icon => ({iconName: icon,iconClass: "cursor-pointer text-info-foreground",tooltip: `${icon} action`,iconClick: (params) => console.log(`${icon} clicked`, params)}))***'}}],table_data:{items:[{_id:"1",col_one:{text:"Sample Item",icons:["edit","delete"]},col_two:["info","settings"]}],total:1},page_size:10};var o,l,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
    import { defineCustomElement as defineTable } from './components/at-table.js';
    import { AtTextIconCell, defineCustomElement as defineTextIconCell } from './components/at-text-icon-cell.js';
    defineTable();
    defineTextIconCell();
    document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
    document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
    document.querySelector('at-table').createGrid()
<\/script>
\``,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,c as default};
