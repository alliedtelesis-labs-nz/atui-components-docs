const s=()=>`
<at-table-actions>
    <at-column-manager slot="column-manager"></at-column-manager>
    <at-search slot="search" label="Search table"></at-search>
    <at-table-filters slot="filters"></at-table-filters>
    <at-table-export-menu slot="export-menu"></at-table-export-menu>
</at-table-actions>
<at-table></at-table>
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
document.querySelector('at-table').table_data = table_data
document.querySelector('at-table').col_defs = col_defs
document.querySelector('at-column-manager').col_defs = col_defs
document.querySelector('at-table-filters').col_defs = col_defs
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
`,d=()=>`
<at-table-actions>
    <at-search slot="search" label="Search table"></at-search>
    <at-button slot="leading-actions" label="Add row" type="secondaryOutline"></at-button>
    <at-column-manager slot="column-manager"></at-column-manager>
    <at-button slot="actions" label="Refresh" type="secondaryText"></at-button>
</at-table-actions>
<script>
document.querySelector('at-column-manager').col_defs = [
    { flex: 1, field: "col_one", colId: "col_one", headerName: "col_one" },
    { flex: 1, field: "col_two", colId: "col_two", headerName: "col_two" },
];
<\/script>
`,i={title:"Components/Table Components/Table Actions"},t=s.bind({}),e=d.bind({});e.storyName="Leading Actions";e.parameters={docs:{description:{story:"The `leading-actions` slot sits immediately left of the column manager, for actions that belong with the toolbar controls rather than with the table content - those go in `actions` at the end of the row."}}};var a,o,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => \`
<at-table-actions>
    <at-column-manager slot="column-manager"></at-column-manager>
    <at-search slot="search" label="Search table"></at-search>
    <at-table-filters slot="filters"></at-table-filters>
    <at-table-export-menu slot="export-menu"></at-table-export-menu>
</at-table-actions>
<at-table></at-table>
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
document.querySelector('at-table').table_data = table_data
document.querySelector('at-table').col_defs = col_defs
document.querySelector('at-column-manager').col_defs = col_defs
document.querySelector('at-table-filters').col_defs = col_defs
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,n,r;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
<at-table-actions>
    <at-search slot="search" label="Search table"></at-search>
    <at-button slot="leading-actions" label="Add row" type="secondaryOutline"></at-button>
    <at-column-manager slot="column-manager"></at-column-manager>
    <at-button slot="actions" label="Refresh" type="secondaryText"></at-button>
</at-table-actions>
<script>
document.querySelector('at-column-manager').col_defs = [
    { flex: 1, field: "col_one", colId: "col_one", headerName: "col_one" },
    { flex: 1, field: "col_two", colId: "col_two", headerName: "col_two" },
];
<\/script>
\``,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const u=["Default","LeadingActions"];export{t as Default,e as LeadingActions,u as __namedExportsOrder,i as default};
