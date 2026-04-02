const Template = (args) => {
    var _a, _b, _c, _d, _e, _f;
    return `
<at-list-selector-item
    item_id="${(_a = args.item_id) !== null && _a !== void 0 ? _a : ''}"
    item_title="${(_b = args.item_title) !== null && _b !== void 0 ? _b : ''}"
    item_prefix="${(_c = args.item_prefix) !== null && _c !== void 0 ? _c : ''}"
    subtitle="${(_d = args.subtitle) !== null && _d !== void 0 ? _d : ''}"
    icon="${(_e = args.icon) !== null && _e !== void 0 ? _e : ''}"
    tooltip="${(_f = args.tooltip) !== null && _f !== void 0 ? _f : ''}"
    has_border=${args.has_border ? true : false}
    ${args.is_selected ? 'is_selected' : ''}
/>`;
};
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
