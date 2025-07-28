const c=a=>`
<atui-search-table page_size=${a.page_size??10} />
<script>
document.querySelector('atui-search-table').table_data = ${JSON.stringify(a.table_data,null,4)}
document.querySelector('atui-search-table').col_defs = ${JSON.stringify(a.col_defs,null,4)}
<\/script>
`,s={title:"Components/Search Table"},e=c.bind({});e.args={col_defs:[{flex:1,field:"col_one",colId:"col_one"},{flex:1,field:"col_two",colId:"col_two"}],table_data:{items:[{_id:"3",col_one:"hello world",col_two:"value 1"},{_id:"2",col_one:"Feb 1,  2018 - Feb 28,  2018",col_two:"value 2"},{_id:"1",col_one:"Jan 1,  2018 - Jan 31,  2018",col_two:"value 3"},{_id:"0",col_one:"Dec 1,  2017 - Dec 31,  2017",col_two:"value 4"}],total:4},page_size:10};var t,l,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<atui-search-table page_size=\${args.page_size ?? 10} />
<script>
document.querySelector('atui-search-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-search-table').col_defs = \${JSON.stringify(args.col_defs, null, 4)}
<\/script>
\``,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,s as default};
