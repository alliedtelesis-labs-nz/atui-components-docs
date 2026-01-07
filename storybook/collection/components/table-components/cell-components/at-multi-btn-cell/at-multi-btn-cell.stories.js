const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtMultiBtnCell, defineCustomElement as defineMultiBtnCell } from './components/at-multi-btn-cell.js';
defineTable();
defineMultiBtnCell();
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table')
    .createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Multi Button Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
            sortable: false,
            cellRenderer: '***AtMultiBtnCell***',
            headerName: 'Multi Button Cell',
            valueGetter: "***(params) => params.data['col_one']***",
            cellRendererParams: {
                buttons: "***(params) => params.data['col_one']***",
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: [
                    {
                        value: 'one',
                        disabled: false,
                        click: '***(params) => console.log("clicked btn one")***',
                    },
                    {
                        value: 'two',
                        disabled: false,
                        click: '***(params) => console.log("clicked btn two")***',
                    },
                    {
                        value: 'three',
                        disabled: false,
                        click: '***(params) => console.log("clicked btn three")***',
                    },
                ],
            },
        ],
        total: 1,
    },
    page_size: 10,
};
