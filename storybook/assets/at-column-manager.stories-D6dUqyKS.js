const l=()=>`
<at-table-actions>
    <at-column-manager slot="column-manager"></at-column-manager>
</at-table-actions>
<at-table></at-table>
<script>
const col_defs = [
    {
        flex: 1,
        field: "col_one",
        colId: "col_one",
        headerName: "Column one",
    },
    {
        flex: 1,
        field: "col_two",
        colId: "col_two",
        headerName: "Column two",
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
const table = document.querySelector('at-table');
const manager = document.querySelector('at-column-manager');

table.table_data = table_data
table.col_defs = col_defs
manager.col_defs = col_defs

// Dragging a column header off the grid hides it without going through the
// manager, so the manager is fed the grid's own hidden set to stay in step.
table.addEventListener('atColumnVisibilityChange', (event) => {
    const hidden = new Set(event.detail);
    manager.col_defs = col_defs.map((colDef) => ({
        ...colDef,
        hide: hidden.has(colDef.field),
    }));
});

table
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
`,n={title:"Components/Table Components/Column Manager"},e=l.bind({});var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => \`
<at-table-actions>
    <at-column-manager slot="column-manager"></at-column-manager>
</at-table-actions>
<at-table></at-table>
<script>
const col_defs = [
    {
        flex: 1,
        field: "col_one",
        colId: "col_one",
        headerName: "Column one",
    },
    {
        flex: 1,
        field: "col_two",
        colId: "col_two",
        headerName: "Column two",
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
const table = document.querySelector('at-table');
const manager = document.querySelector('at-column-manager');

table.table_data = table_data
table.col_defs = col_defs
manager.col_defs = col_defs

// Dragging a column header off the grid hides it without going through the
// manager, so the manager is fed the grid's own hidden set to stay in step.
table.addEventListener('atColumnVisibilityChange', (event) => {
    const hidden = new Set(event.detail);
    manager.col_defs = col_defs.map((colDef) => ({
        ...colDef,
        hide: hidden.has(colDef.field),
    }));
});

table
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
<\/script>
\``,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,n as default};
