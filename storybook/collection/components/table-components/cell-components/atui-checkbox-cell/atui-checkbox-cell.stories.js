const Template = (args) => `
<atui-table page_size=${args.page_size}></atui-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/atui-table.js';
import { AtuiCheckboxCell, defineCustomElement as defineCheckboxCell } from './components/atui-checkbox-cell.js';
import { AtuiCheckboxHeader, defineCustomElement as defineCheckboxHeader } from './components/atui-checkbox-header.js';
defineTable();
defineCheckboxCell();
defineCheckboxHeader();
document.querySelector('atui-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('atui-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Checkbox Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            colId: 'col_one',
            field: 'col_one',
            sortable: false,
            headerName: 'Checkbox Cell',
            cellRenderer: '***AtuiCheckboxCell***',
            headerComponent: '***AtuiCheckboxHeader***',
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: false,
            },
            {
                _id: '2',
                col_one: true,
            },
        ],
        total: 1,
    },
    page_size: 10,
};
//# sourceMappingURL=atui-checkbox-cell.stories.js.map
