const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtCheckboxCell, defineCustomElement as defineCheckboxCell } from './components/at-checkbox-cell.js';
import { AtCheckboxHeader, defineCustomElement as defineCheckboxHeader } from './components/at-checkbox-header.js';
defineTable();
defineCheckboxCell();
defineCheckboxHeader();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Checkbox Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            colId: 'col_one',
            field: 'col_one',
            sortable: false,
            headerName: 'Checkbox Cell',
            cellRenderer: '***AtCheckboxCell***',
            headerComponent: '***AtCheckboxHeader***',
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: false,
            },
            {
                _id: '2',
                col_one: true,
            },
        ],
        total: 1,
    },
    page_size: 10,
};
