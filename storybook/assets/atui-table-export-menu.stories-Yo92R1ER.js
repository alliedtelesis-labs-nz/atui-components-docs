const l=()=>`
<atui-table-actions>
    <atui-table-export-menu slot="export-menu"></atui-table-export-menu>
</atui-table-actions>
<atui-table></atui-table>
<script>
const col_defs = [
    {
        flex: 1,
        field: "col_one",
        colId: "col_one",
    },
    {
        flex: 1,
        field: "col_two",
        colId: "col_two",
    },
];
const table_data = {
    items: [
        {
            _id: "3",
            col_one: "hello world",
            col_two: "value 1",
        },
        {
            _id: "2",
            col_one: "Feb 1,  2018 - Feb 28,  2018",
            col_two: "value 2",
        },
        {
            _id: "1",
            col_one: "Jan 1,  2018 - Jan 31,  2018",
            col_two: "value 3",
        },
        {
            _id: "0",
            col_one: "Dec 1,  2017 - Dec 31,  2017",
            col_two: "value 4",
        },
    ],
    total: 4,
};
document.querySelector('atui-table').table_data = table_data
document.querySelector('atui-table').col_defs = col_defs
document.querySelector('atui-table')
    .createGrid()
    .then((api) => document.querySelector('atui-table-actions').ag_grid = api)
<\/script>
`,c={title:"Components/Table Components/Table Export Menu"},e=l.bind({});var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => \`
<atui-table-actions>
    <atui-table-export-menu slot="export-menu"></atui-table-export-menu>
</atui-table-actions>
<atui-table></atui-table>
<script>
const col_defs = [
    {
        flex: 1,
        field: "col_one",
        colId: "col_one",
    },
    {
        flex: 1,
        field: "col_two",
        colId: "col_two",
    },
];
const table_data = {
    items: [
        {
            _id: "3",
            col_one: "hello world",
            col_two: "value 1",
        },
        {
            _id: "2",
            col_one: "Feb 1,  2018 - Feb 28,  2018",
            col_two: "value 2",
        },
        {
            _id: "1",
            col_one: "Jan 1,  2018 - Jan 31,  2018",
            col_two: "value 3",
        },
        {
            _id: "0",
            col_one: "Dec 1,  2017 - Dec 31,  2017",
            col_two: "value 4",
        },
    ],
    total: 4,
};
document.querySelector('atui-table').table_data = table_data
document.querySelector('atui-table').col_defs = col_defs
document.querySelector('atui-table')
    .createGrid()
    .then((api) => document.querySelector('atui-table-actions').ag_grid = api)
<\/script>
\``,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,c as default};
