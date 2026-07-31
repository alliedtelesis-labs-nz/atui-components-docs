const r=l=>`
<at-table page_size=${l.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtProgressBarCell, defineCustomElement as defineProgressBarCell } from './components/at-progress-bar-cell.js';
defineTable();
defineProgressBarCell();
document.querySelector('at-table').table_data = ${JSON.stringify(l.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(l.col_defs,null,4).replace(/("?\*\*\*"?)|(\\)/g,"")}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
`,N={title:"Components/Table Components/Cell Components/Progress Bar Cell"},s=r.bind({});s.args={col_defs:[{flex:1,field:"usage",colId:"usage",sortable:!1,headerName:"Usage",cellRenderer:"***AtProgressBarCell***",cellRendererParams:{used:"***(data) => data.usage.used***",total:"***(data) => data.usage.total***",generateTooltip:"***(params) => `${params.data.usage.used} of ${params.data.usage.total} devices consuming this licence`***"}}],table_data:{items:[{_id:"1",usage:{used:10,total:25}},{_id:"2",usage:{used:18,total:20}},{_id:"3",usage:{used:2,total:10}},{_id:"4",usage:{used:0,total:50}}],total:4},page_size:10};const e=r.bind({});e.args={col_defs:[{flex:1,field:"licence",colId:"licence",sortable:!1,headerName:"License (invoice)",valueGetter:"***(params) => params.data['licence']***"},{width:80,field:"tier",colId:"tier",sortable:!1,headerName:"Tier",valueGetter:"***(params) => params.data['tier']***"},{flex:1,field:"usage",colId:"usage",sortable:!1,headerName:"Usage",cellRenderer:"***AtProgressBarCell***",cellRendererParams:{used:"***(data) => data.usage.used***",total:"***(data) => data.usage.total***"}},{width:120,field:"used_avail",colId:"used_avail",sortable:!1,headerName:"Used / Avail",valueGetter:"***(params) => `${params.data.usage.used} / ${params.data.usage.total}`***"}],table_data:{items:[{_id:"1",licence:"INV-20871",tier:"A",usage:{used:20,total:25}},{_id:"2",licence:"INV-20872",tier:"B",usage:{used:15,total:15}},{_id:"3",licence:"INV-20873",tier:"C",usage:{used:2,total:10}},{_id:"4",licence:"INV-20874",tier:"D",usage:{used:22,total:20}}],total:4},page_size:10};const a=r.bind({});a.args={col_defs:[{flex:1,field:"usage",colId:"usage",sortable:!1,headerName:"Usage",cellRenderer:"***AtProgressBarCell***",cellRendererParams:{used:"***(data) => data.usage.used***",total:"***(data) => data.usage.total***",thresholds:{warning:60,error:80},size:"lg",label:"***(data) => `${data.usage.used} of ${data.usage.total}`***"}}],table_data:{items:[{_id:"1",usage:{used:5,total:25}},{_id:"2",usage:{used:16,total:25}},{_id:"3",usage:{used:22,total:25}}],total:3},page_size:10};const t=r.bind({});t.args={col_defs:[{flex:1,field:"usage",colId:"usage",sortable:!1,headerName:"Usage",cellRenderer:"***AtProgressBarCell***",cellRendererParams:{used:"***(data) => data.usage.used***",total:"***(data) => data.usage.total***",hideLabel:!0}}],table_data:{items:[{_id:"1",usage:{used:10,total:25}},{_id:"2",usage:{used:18,total:20}}],total:2},page_size:10};var o,n,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtProgressBarCell, defineCustomElement as defineProgressBarCell } from './components/at-progress-bar-cell.js';
defineTable();
defineProgressBarCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,c,u,g,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtProgressBarCell, defineCustomElement as defineProgressBarCell } from './components/at-progress-bar-cell.js';
defineTable();
defineProgressBarCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"The licensing Usage column: a bar per redeemed licence, paired with a\nseparate `Used / Avail` text column. Tier-B is at 100% and Tier-D is over\nits limit, so both colour as at-risk.",...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.description}}};var p,f,b,_,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtProgressBarCell, defineCustomElement as defineProgressBarCell } from './components/at-progress-bar-cell.js';
defineTable();
defineProgressBarCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"`thresholds` moves the warning/error breakpoints, and `label` replaces the\ndefault percentage with custom text.",...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.description}}};var C,h,S,B,P;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtProgressBarCell, defineCustomElement as defineProgressBarCell } from './components/at-progress-bar-cell.js';
defineTable();
defineProgressBarCell();
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4).replace(/("?\\*\\*\\*"?)|(\\\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source},description:{story:"`hideLabel` drops the trailing percentage where an adjacent column already\ncarries the numbers.",...(P=(B=t.parameters)==null?void 0:B.docs)==null?void 0:P.description}}};const $=["Default","LicenceUsage","CustomThresholdsAndLabel","BarOnly"];export{t as BarOnly,a as CustomThresholdsAndLabel,s as Default,e as LicenceUsage,$ as __namedExportsOrder,N as default};
