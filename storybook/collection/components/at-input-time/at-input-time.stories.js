const Template = (args) => `
<at-input-time
    label="${args.label ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    value="${args.value ?? ''}"
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
export default {
    title: 'Components/Time Input',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    info_text: 'Info text',
    error_text: 'Error text',
    hint_text: 'Hint text',
    value: '',
    required: true,
    readonly: false,
    disabled: false,
    invalid: false,
};
