const Template = (args) => `
<atui-table page_size=${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiTextIconCell, defineCustomElement as defineTextIconCell } from './components/atui-text-icon-cell.js';
defineTable();
defineTextIconCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('atui-table')
    .createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Text Icon Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_two',
            colId: 'col_two',
            sortable: false,
            cellRenderer: '***AtuiTextIconCell***',
            headerName: 'Text with Icon Cell',
            valueGetter: "***(params) => { return { text: { textValue: params.data['col_one'] }, icons: [{ iconName: 'search', iconClass: 'text-success-foreground' }, { iconName: 'warning', iconClass: 'text-destructive-foreground' }]}}***",
            cellRendererParams: {
                generateTooltip: '***(params) => "text with icon tooltip" ***',
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: 'Text',
            },
        ],
        total: 1,
    },
    page_size: 10,
};
//# sourceMappingURL=atui-text-icon-cell.stories.js.map
