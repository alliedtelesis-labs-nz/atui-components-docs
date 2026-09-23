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
const DeferredTemplate = () => `
<at-tabs>
    <at-tab-trigger slot="tab-list" tab_id="overview" tab_title="Overview" is_active="true"></at-tab-trigger>
    <at-tab-trigger slot="tab-list" tab_id="details" tab_title="Details"></at-tab-trigger>

    <at-tab-content slot="tab-content" tab_id="overview">
        <p>Overview panel.</p>
    </at-tab-content>
    <at-tab-content slot="tab-content" tab_id="details">
        <p>Details panel. has_activated flips to true the first time this tab is opened.</p>
    </at-tab-content>
</at-tabs>
`;
export const DeferredContent = DeferredTemplate.bind({});
