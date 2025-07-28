const Template = (args) => `
<atui-chip-list
    show_clear_all=${args.show_clear_all ? 'true' : 'false'}
    ${args.disabled ? 'disabled' : ''}
/>
${args.chips
    ? `
<script>
document.querySelector('atui-chip-list').chips = ${JSON.stringify(args.chips, null, 4)}
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
//# sourceMappingURL=atui-chip-list.stories.js.map
