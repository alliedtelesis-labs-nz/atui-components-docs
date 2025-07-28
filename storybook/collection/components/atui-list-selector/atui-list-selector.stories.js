const Template = (args) => `
<atui-list-selector 
    selected_item_id="${args.selected_item_id}"
/>
<script>
document.querySelector('atui-list-selector').options = ${JSON.stringify(args.options, null, 4)};
</script>`;
export default {
    title: 'Components/List Selector',
};
export const Default = Template.bind({});
Default.args = {
    options: [
        {
            id: 'one',
            title: 'one',
            subtitle: 'subtitle',
            icon: 'home',
            tooltip: 'tooltip',
            prefix: '1',
            badgeText: 'badge',
            badgeTooltip: 'badge tooltip',
            hasInfoButton: true,
        },
        {
            id: 'two',
            title: 'two',
            subtitle: 'subtitle',
            icon: 'home',
            tooltip: 'tooltip',
            prefix: '2',
            badgeText: 'badge',
            badgeTooltip: 'badge tooltip',
            hasInfoButton: false,
        },
    ],
    selected_item_id: 'two',
};
//# sourceMappingURL=atui-list-selector.stories.js.map
