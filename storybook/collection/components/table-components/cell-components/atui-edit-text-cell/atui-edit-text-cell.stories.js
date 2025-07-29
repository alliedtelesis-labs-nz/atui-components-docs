const Template = (args) => `
<atui-table page_size=${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiEditTextCell, defineCustomElement as defineEditTextCell } from './components/atui-edit-text-cell.js';
defineTable();
defineEditTextCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('atui-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Edit Text Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
            sortable: false,
            headerName: 'Edit Text Cell',
            valueGetter: "***(params) => params.data['col_one']***",
            cellRenderer: '***AtuiEditTextCell***',
            cellRendererParams: {
                onValueChange: '***(params) => console.log(params.value)***',
                writePermission: true,
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: 'You can change this!',
            },
        ],
        total: 1,
    },
    page_size: 10,
};
//# sourceMappingURL=atui-edit-text-cell.stories.js.map
