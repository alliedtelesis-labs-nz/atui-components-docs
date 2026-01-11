const Template = (args) => `
<at-textarea 
    label="${args.label ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    value="${args.value ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    autocomplete="${args.autocomplete ?? 'on'}"
    max_rows=${args.max_rows ?? 10}
    min_rows=${args.min_rows ?? 1}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
export default {
    title: 'Components/Textarea',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    info_text: 'Info text',
    error_text: 'Error text',
    hint_text: 'Hint text',
    value: '',
    placeholder: 'Placeholder',
    autocomplete: 'on',
    min_rows: 1,
    max_rows: 10,
    required: true,
    readonly: false,
    disabled: false,
    invalid: false,
};
//# sourceMappingURL=at-textarea.stories.js.map
