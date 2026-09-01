const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtBadgeCountCell, defineCustomElement as defineBadgeCountCell } from './components/at-badge-count-cell.js';
defineTable();
defineBadgeCountCell();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Badge Count Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            width: 110,
            field: 'switches',
            colId: 'switches',
            sortable: false,
            headerName: 'Switches',
            cellRenderer: '***AtBadgeCountCell***',
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                switches: [
                    { count: 12, type: 'success', label: 'healthy' },
                    { count: 1, type: 'warning', label: 'warning' },
                    { count: 4, type: 'error', label: 'critical' },
                    { count: 0, type: 'disabled', label: 'unreachable' },
                ],
            },
            {
                _id: '2',
                switches: [
                    { count: 9, type: 'success', label: 'healthy' },
                    { count: 0, type: 'warning', label: 'warning' },
                    { count: 0, type: 'error', label: 'critical' },
                    { count: 2, type: 'disabled', label: 'unreachable' },
                ],
            },
        ],
        total: 2,
    },
    page_size: 10,
};
export const ShowZeroCounts = Template.bind({});
ShowZeroCounts.args = {
    ...Default.args,
    col_defs: [
        {
            width: 160,
            field: 'switches',
            colId: 'switches',
            sortable: false,
            headerName: 'Switches',
            cellRenderer: '***AtBadgeCountCell***',
            cellRendererParams: {
                show_zero_counts: true,
            },
        },
    ],
};
export const HighImpact = Template.bind({});
HighImpact.args = {
    ...Default.args,
    col_defs: [
        {
            width: 110,
            field: 'switches',
            colId: 'switches',
            sortable: false,
            headerName: 'Switches',
            cellRenderer: '***AtBadgeCountCell***',
            cellRendererParams: {
                impact: 'high',
            },
        },
    ],
};
