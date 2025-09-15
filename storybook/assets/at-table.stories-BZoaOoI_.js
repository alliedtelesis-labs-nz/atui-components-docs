const i=e=>`
<at-table page_size=${e.page_size}></at-table>
<script>
document.querySelector('at-table').table_data = ${JSON.stringify(e.table_data,null,4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(e.col_defs,null,4)}
document.querySelector('at-table').createGrid()
<\/script>
`,s=e=>`
<at-table page_size=${e.page_size} use_custom_sorting></at-table>
<script>
const tableData =  ${JSON.stringify(e.table_data)}
let agGrid;
document.querySelector('at-table').addEventListener('sortChanged', (event) => {
    agGrid.setGridOption(
        "rowData",
        tableData.items.toSorted((a, b) => {
            if (event.detail.sortDirection === "asc")
                return a[event.detail.colId].localeCompare(b[event.detail.colId]);
            if (event.detail.sortDirection === "desc")
                return b[event.detail.colId].localeCompare(a[event.detail.colId]);
            else return 0;
        })
    );
});
document.querySelector('at-table').table_data = tableData;
document.querySelector('at-table').col_defs = ${JSON.stringify(e.col_defs,null,4)};
document.querySelector('at-table').createGrid().then((api) => agGrid = api)
<\/script>
`,_={title:"Components/Table Components/Table"},t=i.bind({});t.args={col_defs:[{flex:1,field:"col_one",colId:"col_one"},{flex:1,field:"col_two",colId:"col_two"}],table_data:{items:[{_id:"3",col_one:"hello world",col_two:"value 1"},{_id:"2",col_one:"Feb 1,  2018 - Feb 28,  2018",col_two:"value 2"},{_id:"1",col_one:"Jan 1,  2018 - Jan 31,  2018",col_two:"value 3"},{_id:"0",col_one:"Dec 1,  2017 - Dec 31,  2017",col_two:"value 4"}],total:4},page_size:10};const o={args:{col_defs:[{flex:1,field:"col_one",colId:"col_one"},{flex:1,field:"col_two",colId:"col_two"}],table_data:{items:[{_id:"3",col_one:"hello world",col_two:"value 1"},{_id:"2",col_one:"Feb 1,  2018 - Feb 28,  2018",col_two:"value 2"},{_id:"1",col_one:"Jan 1,  2018 - Jan 31,  2018",col_two:"value 3"},{_id:"0",col_one:"Dec 1,  2017 - Dec 31,  2017",col_two:"value 4"}],total:4},page_size:10},render:s};var l,a,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-table page_size=\${args.page_size}></at-table>
<script>
document.querySelector('at-table').table_data = \${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = \${JSON.stringify(args.col_defs, null, 4)}
document.querySelector('at-table').createGrid()
<\/script>
\``,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,r,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    col_defs: [{
      flex: 1,
      field: 'col_one',
      colId: 'col_one'
    }, {
      flex: 1,
      field: 'col_two',
      colId: 'col_two'
    }],
    table_data: {
      items: [{
        _id: '3',
        col_one: 'hello world',
        col_two: 'value 1'
      }, {
        _id: '2',
        col_one: 'Feb 1,  2018 - Feb 28,  2018',
        col_two: 'value 2'
      }, {
        _id: '1',
        col_one: 'Jan 1,  2018 - Jan 31,  2018',
        col_two: 'value 3'
      }, {
        _id: '0',
        col_one: 'Dec 1,  2017 - Dec 31,  2017',
        col_two: 'value 4'
      }],
      total: 4
    },
    page_size: 10
  },
  render: CustomSortingTemplate
}`,...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const u=["Default","CustomSorting"];export{o as CustomSorting,t as Default,u as __namedExportsOrder,_ as default};
