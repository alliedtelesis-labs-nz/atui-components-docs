const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script>
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4)}
document.querySelector('at-table').createGrid()
</script>
`;
const CustomSortingTemplate = (args) => `
<at-table page_size=${args.page_size} use_custom_sorting></at-table>
<script>
const tableData =  ${JSON.stringify(args.table_data)}
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
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4)};
document.querySelector('at-table').createGrid().then((api) => agGrid = api)
</script>
`;
export default {
    title: 'Components/Table Components/Table',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
        },
        {
            flex: 1,
            field: 'col_two',
            colId: 'col_two',
        },
    ],
    table_data: {
        items: [
            {
                _id: '3',
                col_one: 'hello world',
                col_two: 'value 1',
            },
            {
                _id: '2',
                col_one: 'Feb 1,  2018 - Feb 28,  2018',
                col_two: 'value 2',
            },
            {
                _id: '1',
                col_one: 'Jan 1,  2018 - Jan 31,  2018',
                col_two: 'value 3',
            },
            {
                _id: '0',
                col_one: 'Dec 1,  2017 - Dec 31,  2017',
                col_two: 'value 4',
            },
        ],
        total: 4,
    },
    page_size: 10,
};
export const CustomSorting = {
    args: {
        col_defs: [
            {
                flex: 1,
                field: 'col_one',
                colId: 'col_one',
            },
            {
                flex: 1,
                field: 'col_two',
                colId: 'col_two',
            },
        ],
        table_data: {
            items: [
                {
                    _id: '3',
                    col_one: 'hello world',
                    col_two: 'value 1',
                },
                {
                    _id: '2',
                    col_one: 'Feb 1,  2018 - Feb 28,  2018',
                    col_two: 'value 2',
                },
                {
                    _id: '1',
                    col_one: 'Jan 1,  2018 - Jan 31,  2018',
                    col_two: 'value 3',
                },
                {
                    _id: '0',
                    col_one: 'Dec 1,  2017 - Dec 31,  2017',
                    col_two: 'value 4',
                },
            ],
            total: 4,
        },
        page_size: 10,
    },
    render: CustomSortingTemplate,
};
