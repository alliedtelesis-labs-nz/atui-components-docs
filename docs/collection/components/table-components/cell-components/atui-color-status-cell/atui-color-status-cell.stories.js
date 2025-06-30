const Template = (args) => `
<atui-table page_size=${args.page_size} ></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiColorStatusCell, defineCustomElement as defineColorStatusCell } from './components/atui-color-status-cell.js';
defineTable();
defineColorStatusCell();
document.querySelector('atui-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('atui-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Color Status Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
            sortable: false,
            headerName: 'Color Status Cell',
            cellRenderer: '***AtuiColorStatusCell***',
            cellRendererParams: {
                color: 'rgb(2, 156, 253, 0.7)',
                dataPresent: true,
                containerStyles: {
                    height: '30px',
                    width: '30px',
                },
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: 'need to have any item for rows to show',
            },
        ],
        total: 1,
    },
    page_size: 10,
};
//# sourceMappingURL=atui-color-status-cell.stories.js.map
