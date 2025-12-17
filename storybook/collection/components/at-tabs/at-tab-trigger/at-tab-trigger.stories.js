const Template = (args) => `
<at-tab-trigger
    tab_id="${args.tab_id ?? ''}"
    tab_title="${args.tab_title ?? ''}"
    layout="${args.layout ?? ''}"
    ${args.is_active ? 'is_active' : ''}
/>
`;
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
    fill_parent_width: false,
};
//# sourceMappingURL=at-tab-trigger.stories.js.map
