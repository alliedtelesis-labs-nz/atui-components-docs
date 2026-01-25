const Template = (args) => `
<at-chip-list
    show_clear_all=${args.show_clear_all ? 'true' : 'false'}
    ${args.disabled ? 'disabled' : ''}
/>
${args.chips
    ? `
<script>
document.querySelector('at-chip-list').chips = ${JSON.stringify(args.chips, null, 4)}
</script>`
    : ''}
`;
export default {
    title: 'Components/Chip List',
};
export const Default = Template.bind({});
Default.args = {
    chips: ['one', 'two', 'three'],
    show_clear_all: true,
    disabled: false,
};
