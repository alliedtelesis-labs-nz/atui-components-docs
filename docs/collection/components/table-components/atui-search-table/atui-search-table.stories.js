const Template = (args) => {
    var _a;
    return `
<atui-search-table page_size=${(_a = args.page_size) !== null && _a !== void 0 ? _a : 10} />
<script>
document.querySelector('atui-search-table').table_data = ${JSON.stringify(args.table_data, null, 4)}
document.querySelector('atui-search-table').col_defs = ${JSON.stringify(args.col_defs, null, 4)}
</script>
`;
};
export default {
    title: 'Components/Search Table',
};
export const Default = Template.bind({});
Default.args = {
    col_defs: [
        {
            flex: 1,
            field: 'col_one',
            colId: 'col_one',
        },
        {
            flex: 1,
            field: 'col_two',
            colId: 'col_two',
        },
    ],
    table_data: {
        items: [
            {
                _id: '3',
                col_one: 'hello world',
                col_two: 'value 1',
            },
            {
                _id: '2',
                col_one: 'Feb 1,  2018 - Feb 28,  2018',
                col_two: 'value 2',
            },
            {
                _id: '1',
                col_one: 'Jan 1,  2018 - Jan 31,  2018',
                col_two: 'value 3',
            },
            {
                _id: '0',
                col_one: 'Dec 1,  2017 - Dec 31,  2017',
                col_two: 'value 4',
            },
        ],
        total: 4,
    },
    page_size: 10,
};
//# sourceMappingURL=atui-search-table.stories.js.map
