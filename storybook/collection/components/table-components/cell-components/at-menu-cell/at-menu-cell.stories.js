const Template = (args) => `
<at-table page_size=${args.page_size}></at-table>
<script type="module">
import { defineCustomElement as defineTable } from './components/at-table.js';
import { AtMenuCell, defineCustomElement as defineMenuCell } from './components/at-menu-cell.js';
defineTable();
defineMenuCell();
document.querySelector('at-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('at-table').col_defs = ${JSON.stringify(args.col_defs, null, 4).replace(/("?\*\*\*"?)|(\\)/g, '')}
document.querySelector('at-table').createGrid()
</script>
`;
export default {
    title: 'Components/Table Components/Cell Components/Menu Cell',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
            sortable: false,
            headerName: 'Menu Cell',
            cellRenderer: '***AtMenuCell***',
            cellRendererParams: {
                actions: [
                    {
                        title: 'Action one',
                        onTrigger: "***(params) => alert('action one clicked')***",
                    },
                    {
                        title: 'Action two',
                        onTrigger: "***(params) => alert('Action two clicked')***",
                    },
                    {
                        title: 'Action three',
                        getDisabled: '***(data) => true***',
                        disabledTooltip: 'disabled tooltip',
                    },
                ],
            },
        },
        {
            flex: 1,
            field: 'col_two',
            colId: 'col_two',
            sortable: false,
            headerName: 'Popover Scroll Cell',
            cellRenderer: '***AtMenuCell***',
            cellRendererParams: {
                icon: 'keyboard_arrow_down',
                actions: [
                    'Action one',
                    'Action two',
                    'Action three',
                    'Action four',
                    'Action five',
                    'Action six',
                ],
            },
        },
    ],
    table_data: {
        items: [
            {
                _id: '1',
                col_one: '',
                col_two: 'Label',
            },
        ],
        total: 1,
    },
    page_size: 10,
};
