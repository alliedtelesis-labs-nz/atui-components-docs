const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtProgressBarCell, defineCustomElement as defineProgressBarCell } from './components/at-progress-bar-cell.js';
defineTable();
defineProgressBarCell();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Progress Bar Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'usage',
            colId: 'usage',
            sortable: false,
            headerName: 'Usage',
            cellRenderer: '***AtProgressBarCell***',
            cellRendererParams: {
                used: '***(data) => data.usage.used***',
                total: '***(data) => data.usage.total***',
                generateTooltip: '***(params) => `${params.data.usage.used} of ${params.data.usage.total} devices consuming this licence`***',
            },
        },
    ],
    table_data: {
        items: [
            { _id: '1', usage: { used: 10, total: 25 } },
            { _id: '2', usage: { used: 18, total: 20 } },
            { _id: '3', usage: { used: 2, total: 10 } },
            { _id: '4', usage: { used: 0, total: 50 } },
        ],
        total: 4,
    },
    page_size: 10,
};
/**
 * The licensing Usage column: a bar per redeemed licence, paired with a
 * separate `Used / Avail` text column. Tier-B is at 100% and Tier-D is over
 * its limit, so both colour as at-risk.
 */
export const LicenceUsage = Template.bind({});
LicenceUsage.args = {
    col_defs: [
        {
            flex: 1,
            field: 'licence',
            colId: 'licence',
            sortable: false,
            headerName: 'License (invoice)',
            valueGetter: "***(params) => params.data['licence']***",
        },
        {
            width: 80,
            field: 'tier',
            colId: 'tier',
            sortable: false,
            headerName: 'Tier',
            valueGetter: "***(params) => params.data['tier']***",
        },
        {
            flex: 1,
            field: 'usage',
            colId: 'usage',
            sortable: false,
            headerName: 'Usage',
            cellRenderer: '***AtProgressBarCell***',
            cellRendererParams: {
                used: '***(data) => data.usage.used***',
                total: '***(data) => data.usage.total***',
            },
        },
        {
            width: 120,
            field: 'used_avail',
            colId: 'used_avail',
            sortable: false,
            headerName: 'Used / Avail',
            valueGetter: '***(params) => `${params.data.usage.used} / ${params.data.usage.total}`***',
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                licence: 'INV-20871',
                tier: 'A',
                usage: { used: 20, total: 25 },
            },
            {
                _id: '2',
                licence: 'INV-20872',
                tier: 'B',
                usage: { used: 15, total: 15 },
            },
            {
                _id: '3',
                licence: 'INV-20873',
                tier: 'C',
                usage: { used: 2, total: 10 },
            },
            {
                _id: '4',
                licence: 'INV-20874',
                tier: 'D',
                usage: { used: 22, total: 20 },
            },
        ],
        total: 4,
    },
    page_size: 10,
};
/**
 * `thresholds` moves the warning/error breakpoints, and `label` replaces the
 * default percentage with custom text.
 */
export const CustomThresholdsAndLabel = Template.bind({});
CustomThresholdsAndLabel.args = {
    col_defs: [
        {
            flex: 1,
            field: 'usage',
            colId: 'usage',
            sortable: false,
            headerName: 'Usage',
            cellRenderer: '***AtProgressBarCell***',
            cellRendererParams: {
                used: '***(data) => data.usage.used***',
                total: '***(data) => data.usage.total***',
                thresholds: { warning: 60, error: 80 },
                size: 'lg',
                label: '***(data) => `${data.usage.used} of ${data.usage.total}`***',
            },
        },
    ],
    table_data: {
        items: [
            { _id: '1', usage: { used: 5, total: 25 } },
            { _id: '2', usage: { used: 16, total: 25 } },
            { _id: '3', usage: { used: 22, total: 25 } },
        ],
        total: 3,
    },
    page_size: 10,
};
/**
 * `hideLabel` drops the trailing percentage where an adjacent column already
 * carries the numbers.
 */
export const BarOnly = Template.bind({});
BarOnly.args = {
    col_defs: [
        {
            flex: 1,
            field: 'usage',
            colId: 'usage',
            sortable: false,
            headerName: 'Usage',
            cellRenderer: '***AtProgressBarCell***',
            cellRendererParams: {
                used: '***(data) => data.usage.used***',
                total: '***(data) => data.usage.total***',
                hideLabel: true,
            },
        },
    ],
    table_data: {
        items: [
            { _id: '1', usage: { used: 10, total: 25 } },
            { _id: '2', usage: { used: 18, total: 20 } },
        ],
        total: 2,
    },
    page_size: 10,
};
