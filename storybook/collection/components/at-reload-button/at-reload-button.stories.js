const Template = (args) => `
<at-table-actions>
    <at-reload-button slot="reload-button" has_updates="${!!args?.has_updates}"></at-reload-button>
</at-table-actions>
<at-table></at-table>
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
document.querySelector('at-table').table_data = table_data
document.querySelector('at-table').col_defs = col_defs
document.querySelector('at-table')
    .createGrid()
    .then((api) => document.querySelector('at-table-actions').ag_grid = api)
</script>
`;
export default {
    title: 'Components/Reload Button',
};
export const Default = Template.bind({});
Default.args = { has_updates: false };
export const WithUpdatesAvailable = Template.bind({});
WithUpdatesAvailable.args = { has_updates: true };
