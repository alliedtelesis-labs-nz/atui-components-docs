const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtTitleSubtitleDateCell, defineCustomElement as defineComponent } from './components/at-title-subtitle-date-cell.js';
defineTable();
defineComponent();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Title Subtitle Date Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
            sortable: false,
            headerName: 'Title Subtitle Date Cell',
            valueGetter: "***(params) => params.data['col_one']***",
            cellRenderer: '***AtTitleSubtitleDateCell***',
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: new Date(),
            },
        ],
        total: 1,
    },
    page_size: 10,
};
//# sourceMappingURL=at-title-subtitle-date-cell.stories.js.map
