const Template = (args) => `
<at-input 
    label="${args.label ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    type="${args.type ?? ''}"
    value="${args.value ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
export default {
    title: 'Components/Input',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    info_text: 'Info text',
    error_text: 'Error text',
    hint_text: 'Hint text',
    type: 'text',
    value: '',
    placeholder: 'Placeholder',
    required: true,
    readonly: false,
    disabled: false,
    clearable: true,
    invalid: false,
};
