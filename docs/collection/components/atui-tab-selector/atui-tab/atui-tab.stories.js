const Template = (args) => {
    var _a, _b, _c;
    return `
<atui-tab
    tab_id="${(_a = args.tab_id) !== null && _a !== void 0 ? _a : ''}"
    tab_title="${(_b = args.tab_title) !== null && _b !== void 0 ? _b : ''}"
    layout="${(_c = args.layout) !== null && _c !== void 0 ? _c : ''}"
    ${args.is_active ? 'is_active' : ''}
/>
`;
};
export default {
    title: 'Components/Tab',
    argTypes: {
        layout: {
            options: ['vertical', 'horizontal'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    tab_id: 'id',
    tab_title: 'Title',
    layout: 'vertical',
    is_active: false,
};
//# sourceMappingURL=atui-tab.stories.js.map
