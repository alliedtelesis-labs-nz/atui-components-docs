const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTextCell, defineCustomElement as defineTextCell } from './components/at-text-cell.js';
import { AtSignalStrengthCell, defineCustomElement as defineSignalStrengthCell } from './components/at-signal-strength-cell.js';
defineTable();
defineTextCell();
defineSignalStrengthCell();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table').createGrid()
</script>
`;
const nameColumn = {
    field: 'name',
    colId: 'name',
    headerName: 'Client',
    cellRenderer: '***AtTextCell***',
};
const tableData = {
    items: [
        { _id: '1', name: 'Laptop-Finance-04', rssi: -48 },
        { _id: '2', name: 'iPhone-Reception', rssi: -64 },
        { _id: '3', name: 'Printer-Level2', rssi: -71 },
        { _id: '4', name: 'Sensor-Warehouse', rssi: -82 },
        { _id: '5', name: 'Tablet-Car-Park', rssi: -91 },
    ],
    total: 5,
};
export default {
    title: 'Components/Table Components/Cell Components/Signal Strength Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        nameColumn,
        {
            width: 140,
            field: 'rssi',
            colId: 'rssi',
            headerName: 'Signal',
            cellRenderer: '***AtSignalStrengthCell***',
        },
    ],
    table_data: tableData,
    page_size: 10,
};
export const BarsOnlyMono = Template.bind({});
BarsOnlyMono.args = {
    ...Default.args,
    col_defs: [
        nameColumn,
        {
            width: 80,
            field: 'rssi',
            colId: 'rssi',
            headerName: 'Signal',
            cellRenderer: '***AtSignalStrengthCell***',
            cellRendererParams: { show_value: false, variant: 'mono' },
        },
    ],
};
