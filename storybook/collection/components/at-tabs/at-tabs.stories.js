const Template = (args) => `
<at-tabs
    active_tab="${args.active_tab ?? ''}"
    layout="${args.layout ?? 'horizontal'}"
/>
<script>
document.querySelector('at-tabs').tabs = ${JSON.stringify(args.tabs, null, 4)}
</script>
`;
export default {
    title: 'Components/Tabs',
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
