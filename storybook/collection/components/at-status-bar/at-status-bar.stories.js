const Template = (args) => `
<at-status-bar
    size="${args.size ?? 'sm'}"
    ${args.disable_tooltip ? 'disable_tooltip' : ''}
/>
<script>
document.querySelector('at-status-bar').status_bar = ${JSON.stringify(args.status_bar, null, 4)}
</script>
`;
export default {
    title: 'Components/Status Bar',
    argTypes: {
        size: {
            options: ['sm', 'lg'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    status_bar: [
        { tooltip: 'one', percentage: 50, backgroundColor: 'green' },
        { tooltip: 'two', percentage: 30, backgroundColor: 'blue' },
        { tooltip: 'three', percentage: 20, backgroundColor: 'red' },
    ],
    size: 'sm',
    disable_tooltip: false,
};
