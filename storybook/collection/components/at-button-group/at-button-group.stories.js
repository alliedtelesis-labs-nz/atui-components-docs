const Template = (args) => {
    var _a, _b, _c, _d;
    return `
<at-button-group
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    hint_text="${(_b = args.hint_text) !== null && _b !== void 0 ? _b : ''}"
    error_text="${(_c = args.error_text) !== null && _c !== void 0 ? _c : ''}"
    info_text="${(_d = args.info_text) !== null && _d !== void 0 ? _d : ''}"
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
${args.options
        ? `
<script>
document.querySelector('at-button-group').options = ${JSON.stringify(args.options, null, 4)}
</script>`
        : ''}
`;
};
export default {
    title: 'Components/Button Group',
};
export const Default = Template.bind({});
Default.args = {
    options: [
        { option_id: 'IP', label: 'IP' },
        { option_id: 'ICMP', label: 'ICMP' },
        { option_id: 'TCP', label: 'TCO' },
        { option_id: 'UDP', label: 'UDP' },
    ],
    label: 'Button',
    hint_text: 'Hint',
    info_text: 'Info',
    error_text: 'Error',
    disabled: false,
    invalid: false,
};
//# sourceMappingURL=at-button-group.stories.js.map
