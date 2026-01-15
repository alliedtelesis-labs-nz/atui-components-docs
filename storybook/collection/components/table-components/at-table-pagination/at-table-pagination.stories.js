const Template = (args) => `
<at-table use_custom_pagination></at-table>
<at-table-pagination></at-table-pagination>
<script>
const tableData = ${JSON.stringify(args.table_data)}
let pageSize = 2;
let pageNum = 1;
let agGrid;
const updateTable = () => {
    agGrid.setGridOption(
        "rowData",
        tableData.items.slice(
            (pageNum - 1) * pageSize,
            (pageNum - 1) * pageSize + pageSize
        )
    );
    document.querySelector('at-table-pagination').current_page = pageNum;
    document.querySelector('at-table-pagination').num_pages = Math.ceil(tableData.items.length / pageSize);
};
document.querySelector('at-table-pagination').page_size_options = [2, 3, 4];
document.querySelector('at-table-pagination').addEventListener('changePage', (event) => {
    pageNum = event.detail;
    updateTable();
});
document.querySelector('at-table-pagination').addEventListener('changePageSize', (event) => {
    pageSize = event.detail;
    pageNum = Math.min(
        pageNum,
        Math.ceil(tableData.items.length / pageSize)
      );
    updateTable();
});
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4)}
document.querySelector('at-table').createGrid().then((api) => {
    agGrid = api;
    updateTable();
})
</script>
`;
export default {
    title: 'Components/Table Components/Table Pagination',
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
                col_one: 'Mar 1, 2018 - Mar 31, 2018',
                col_two: 'value 1',
            },
            {
                _id: '2',
                col_one: 'Feb 1, 2018 - Feb 28, 2018',
                col_two: 'value 2',
            },
            {
                _id: '1',
                col_one: 'Jan 1, 2018 - Jan 31, 2018',
                col_two: 'value 3',
            },
            {
                _id: '0',
                col_one: 'Dec 1, 2017 - Dec 31, 2017',
                col_two: 'value 4',
            },
            {
                _id: '4',
                col_one: 'Dec 1, 2025 - Dec 31, 2025',
                col_two: 'value 5',
            },
            {
                _id: '5',
                col_one: 'Dec 1, 2025 - Dec 31, 2025',
                col_two: 'value 6',
            },
            {
                _id: '6',
                col_one: 'Dec 1, 2025 - Dec 31, 2025',
                col_two: 'value 7',
            },
            {
                _id: '7',
                col_one: 'Dec 1, 2023 - Dec 31, 2023',
                col_two: 'value 8',
            },
            {
                _id: '8',
                col_one: 'Dec 1, 2024 - Dec 31, 2024',
                col_two: 'value 9',
            },
            {
                _id: '9',
                col_one: 'Dec 1, 2025 - Dec 31, 2025',
                col_two: 'value 10',
            },
        ],
        total: 10,
    },
};
