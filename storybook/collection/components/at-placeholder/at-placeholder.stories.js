const Template = (args) => `
<at-placeholder
    placeholder_title="${args.message_title ?? ''}"
    content="${args.content ?? ''}"
    size="${args.size ?? ''}"
    type="${args.type ?? 'none'}"
    ${args.show_loading_spinner ? 'show_loading_spinner' : ''}
>
    <at-icon slot="icon" name="${args.icon ?? ''}" />
</at-placeholder>
`;
export default {
    title: 'Components/Placeholder',
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
        type: {
            options: [
                'none',
                'chart-no-data',
                'no-data',
                'no-results',
                'no-access',
            ],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    message_title: 'Placeholder title',
    content: 'Placeholder content',
    icon: 'home',
    size: 'md',
    show_loading_spinner: false,
    type: 'none',
};
export const NoData = Template.bind({});
NoData.args = {
    message_title: 'No data',
    content: 'There is nothing to show here yet.',
    size: 'md',
    type: 'no-data',
};
export const NoResults = Template.bind({});
NoResults.args = {
    message_title: 'No results found',
    content: 'Try adjusting your search or filters.',
    size: 'md',
    type: 'no-results',
};
export const NoAccess = Template.bind({});
NoAccess.args = {
    message_title: 'You cannot view these devices',
    content: 'Ask an administrator for access to this site.',
    size: 'md',
    type: 'no-access',
};
export const ChartNoData = Template.bind({});
ChartNoData.args = {
    message_title: 'No chart data',
    content: 'No measurements were recorded for this period.',
    size: 'md',
    type: 'chart-no-data',
};
