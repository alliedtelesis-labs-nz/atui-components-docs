const Template = (args) => `
<atui-table page_size=${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiTextBadgeCell, defineCustomElement as defineTextBadgeCell } from './components/atui-text-badge-cell.js';
defineTable();
defineTextBadgeCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('atui-table')
    .createGrid()
    .then((api) => document.querySelector('atui-table-actions').ag_grid = api)
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Text Badge Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
            sortable: false,
            headerName: 'Text with Badge Cell',
            valueGetter: "***(params) => params.data['col_one'].text***",
            cellRenderer: '***AtuiTextBadgeCell***',
            cellRendererParams: {
                badgeText: '***(params) => params.data["col_one"].badgeText***',
                badgeType: 'info',
                generateTooltip: '***(params) => `tooltip: ${params.value}`***',
                generateBadgeTooltip: '***(params) => `tooltip: ${params.data["col_one"].badgeText}`***',
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: {
                    text: 'Text',
                    badgeText: 'badgeText',
                },
            },
        ],
        total: 1,
    },
    page_size: 10,
};
//# sourceMappingURL=atui-text-badge-cell.stories.js.map
