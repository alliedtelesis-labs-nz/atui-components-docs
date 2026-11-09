const Template = (args) => `
<at-button-group
    label="${args.label ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.multiple ? 'multiple' : ''}
/>
${args.options
    ? `
<script>
document.querySelector('at-button-group').options = ${JSON.stringify(args.options, null, 4)}
</script>`
    : ''}
`;
export default {
    title: 'Components/Button Group',
};
export const Default = Template.bind({});
Default.args = {
    options: [
        { option_id: 'IP', label: 'IP' },
        { option_id: 'ICMP', label: 'ICMP' },
        { option_id: 'TCP', label: 'TCP' },
        { option_id: 'UDP', label: 'UDP' },
    ],
    label: 'Button',
    hint_text: 'Hint',
    info_text: 'Info',
    error_text: 'Error',
    disabled: false,
    invalid: false,
};
export const Multiple = Template.bind({});
Multiple.args = {
    options: [
        { value: 'mon', label: 'Mon' },
        { value: 'tue', label: 'Tue' },
        { value: 'wed', label: 'Wed' },
        { value: 'thu', label: 'Thu' },
        { value: 'fri', label: 'Fri' },
        { value: 'sat', label: 'Sat' },
        { value: 'sun', label: 'Sun' },
    ],
    label: 'Days',
    hint_text: 'Pick every day the window runs',
    multiple: true,
};
