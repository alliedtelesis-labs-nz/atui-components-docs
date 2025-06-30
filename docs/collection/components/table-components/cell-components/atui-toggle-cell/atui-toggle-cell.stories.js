const Template = (args) => `
<atui-table page_size=${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiToggleCell, defineCustomElement as defineToggleCell } from './components/atui-toggle-cell.js';
defineTable();
defineToggleCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('atui-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Toggle Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
            sortable: false,
            headerName: 'Toggle Cell',
            cellRenderer: '***AtuiToggleCell***',
            valueGetter: "***(params) => params.data['col_one']***",
            cellRendererParams: {
                getLabel: '***() => `label string`***',
                onTrigger: '***(params) => console.log(params.value)***',
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: 'true',
            },
        ],
        total: 1,
    },
    page_size: 10,
};
//# sourceMappingURL=atui-toggle-cell.stories.js.map
