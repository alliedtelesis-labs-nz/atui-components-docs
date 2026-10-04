const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtHealthDotCell, defineCustomElement as defineHealthDotCell } from './components/at-health-dot-cell.js';
defineTable();
defineTextCell();
defineHealthDotCell();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table').createGrid()
</script>
`;
const nameColumn = {
    field: 'name',
    colId: 'name',
    headerName: 'Device',
    cellRenderer: '***AtTextCell***',
};
export default {
    title: 'Components/Table Components/Cell Components/Health Dot Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            width: 80,
            field: 'health',
            colId: 'health',
            sortable: false,
            headerName: 'Health',
            cellRenderer: '***AtHealthDotCell***',
        },
        nameColumn,
    ],
    table_data: {
        items: [
            { _id: '1', name: 'Core switch', health: 'good' },
            { _id: '2', name: 'Edge router', health: 'warning' },
            { _id: '3', name: 'Access point', health: 'critical' },
        ],
        total: 3,
    },
    page_size: 10,
};
export const Bar = Template.bind({});
Bar.args = {
    ...Default.args,
    col_defs: [
        {
            width: 16,
            minWidth: 16,
            maxWidth: 16,
            field: 'health',
            colId: 'health',
            sortable: false,
            resizable: false,
            headerName: '',
            cellRenderer: '***AtHealthDotCell***',
            cellRendererParams: {
                display: 'bar',
            },
        },
        nameColumn,
    ],
};
