const Template = (args) => `
<at-status-bar
    size="${args.size ?? 'sm'}"
    segment_gap="${args.segment_gap ?? 0}"
    show_tooltip="${args.show_tooltip ?? true}"
    show_internal_value="${args.show_internal_value ?? false}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = ${JSON.stringify(args.status_bar, null, 4)}
</script>
`;
export default {
    title: 'Components/Status Bar',
    argTypes: {
        status_bar: { control: 'object' },
        size: {
            options: ['sm', 'lg'],
            control: { type: 'radio' },
        },
        segment_gap: { control: { type: 'number', min: 0, step: 1 } },
        show_tooltip: { control: 'boolean' },
        show_internal_value: { control: 'boolean' },
    },
};
const baseArgs = {
    size: 'sm',
    segment_gap: 0,
    show_tooltip: true,
    show_internal_value: false,
};
export const Default = Template.bind({});
Default.args = {
    ...baseArgs,
    status_bar: [
        { label: 'one', percentage: 50, backgroundColor: 'green' },
        { label: 'two', percentage: 30, backgroundColor: 'blue' },
        { label: 'three', percentage: 20, backgroundColor: 'red' },
    ],
};
export const PartialBreakdown = Template.bind({});
PartialBreakdown.args = {
    ...baseArgs,
    size: 'lg',
    status_bar: [
        { label: 'upgraded', percentage: 35, backgroundColor: 'green' },
        { label: 'failed', percentage: 15, backgroundColor: 'red' },
    ],
};
export const InternalValue = Template.bind({});
InternalValue.args = {
    ...baseArgs,
    show_internal_value: true,
    status_bar: [
        {
            label: 'Network 1',
            percentage: 60,
            backgroundColor: 'var(--chart-sequential-9)',
        },
        {
            label: 'Network 2',
            percentage: 30,
            backgroundColor: 'var(--chart-sequential-6)',
        },
        {
            label: 'Network 3',
            percentage: 10,
            backgroundColor: 'var(--chart-sequential-2)',
        },
    ],
};
