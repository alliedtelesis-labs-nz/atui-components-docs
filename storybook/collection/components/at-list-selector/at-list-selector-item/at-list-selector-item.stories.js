const Template = (args) => `
<at-list-selector-item
    item_id="${args.item_id ?? ''}"
    item_title="${args.item_title ?? ''}"
    item_prefix="${args.item_prefix ?? ''}"
    subtitle="${args.subtitle ?? ''}"
    icon="${args.icon ?? ''}"
    tooltip="${args.tooltip ?? ''}"
    has_border=${args.has_border ? true : false}
    ${args.is_selected ? 'is_selected' : ''}
/>`;
export default {
    title: 'Components/List Selector Item',
};
export const Default = Template.bind({});
Default.args = {
    item_id: 'id',
    item_title: 'title',
    subtitle: 'subtitle',
    item_prefix: 'prefix',
    icon: 'home',
    tooltip: 'tooltip',
    has_border: true,
    is_selected: false,
};
//# sourceMappingURL=at-list-selector-item.stories.js.map
