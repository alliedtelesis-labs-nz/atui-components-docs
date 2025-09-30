const Template = (args) => `
<at-tab-selector
    active_tab="${args.active_tab ?? ''}"
    layout="${args.layout ?? 'horizontal'}"
/>
<script>
document.querySelector('at-tab-selector').tabs = ${JSON.stringify(args.tabs, null, 4)}
</script>
`;
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
//# sourceMappingURL=at-tab-selector.stories.js.map
