const Template = (args) => {
    var _a, _b;
    return `
<atui-tab-selector
    active_tab="${(_a = args.active_tab) !== null && _a !== void 0 ? _a : ''}"
    layout="${(_b = args.layout) !== null && _b !== void 0 ? _b : 'horizontal'}"
/>
<script>
document.querySelector('atui-tab-selector').tabs = ${JSON.stringify(args.tabs, null, 4)}
</script>
`;
};
export default {
    title: 'Components/Tab Selector',
    argTypes: {
        layout: {
            options: ['vertical', 'horizontal'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    tabs: [
        { id: 'one', title: 'one' },
        { id: 'two', title: 'two' },
        { id: 'three', title: 'three' },
    ],
    active_tab: 'one',
    layout: 'horizontal',
};
//# sourceMappingURL=atui-tab-selector.stories.js.map
