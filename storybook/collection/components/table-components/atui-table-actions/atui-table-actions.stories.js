const Template = () => `
<atui-table-actions>
    <atui-column-manager slot="column-manager"></atui-column-manager>
    <atui-search slot="search" label="Search table"></atui-search>
    <atui-table-dropdown-filters slot="dropdown-filters"></atui-table-dropdown-filters>
    <atui-table-export-menu slot="export-menu"></atui-table-export-menu>
</atui-table-actions>
<atui-table></atui-table>
<script>
const col_defs = [
    {
        flex: 1,
        field: "col_one",
        colId: "col_one",
    },
    {
        flex: 1,
        field: "col_two",
        colId: "col_two",
    },
];
const table_data = {
    items: [
        {
            _id: "3",
            col_one: "hello world",
            col_two: "value 1",
        },
        {
            _id: "2",
            col_one: "Feb 1,  2018 - Feb 28,  2018",
            col_two: "value 2",
        },
        {
            _id: "1",
            col_one: "Jan 1,  2018 - Jan 31,  2018",
            col_two: "value 3",
        },
        {
            _id: "0",
            col_one: "Dec 1,  2017 - Dec 31,  2017",
            col_two: "value 4",
        },
    ],
    total: 4,
};
document.querySelector('atui-table').table_data = table_data
document.querySelector('atui-table').col_defs = col_defs
document.querySelector('atui-column-manager').col_defs = col_defs
document.querySelector('atui-table-dropdown-filters').col_defs = col_defs
document.querySelector('atui-table')
    .createGrid()
    .then((api) => document.querySelector('atui-table-actions').ag_grid = api)
</script>
`;
export default {
    title: 'Components/Table Components/Table Actions',
};
export const Default = Template.bind({});
//# sourceMappingURL=atui-table-actions.stories.js.map
