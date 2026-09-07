const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { defineCustomElement as defineRadioCell } from './components/at-radio-cell.js';
defineTable();
defineRadioCell();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Radio Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            colId: 'col_one',
            field: 'col_one',
            sortable: false,
            headerName: 'Radio Cell',
            cellRenderer: 'AtRadioCell',
            cellRendererParams: {
                checked: '***(data) => data.col_one***',
                setValue: '***function () {}***',
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: true,
            },
            {
                _id: '2',
                col_one: false,
            },
        ],
        total: 2,
    },
    page_size: 10,
};
