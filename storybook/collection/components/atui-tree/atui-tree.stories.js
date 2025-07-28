const Template = (args) => `
<atui-tree/>
<script>
document.querySelector('atui-tree').item_list = ${JSON.stringify(args.item_list, null, 4)}
</script>
`;
export default {
    title: 'Components/Tree',
};
export const Default = Template.bind({});
Default.args = {
    item_list: [
        {
            id: 'one',
            displayName: 'one',
            children: [
                { id: 'one.1', displayName: 'one.1' },
                { id: 'one.2', displayName: 'one.2' },
            ],
            tooltip: 'hello world',
        },
        { id: 'two', displayName: 'two' },
        { id: 'three', displayName: 'three' },
    ],
};
//# sourceMappingURL=atui-tree.stories.js.map
