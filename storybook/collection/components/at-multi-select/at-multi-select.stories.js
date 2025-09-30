const Template = (args) => `
<at-multi-select
    label="${args.label ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    ${args.disabled ? 'disabled' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.chip_list ? 'chip_list' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.required ? 'required' : ''}
    ${args.typeahead ? 'typeahead' : ''}
/>
${args.options
    ? `
<script>
document.querySelector('at-multi-select').options = ${JSON.stringify(args.options, null, 4)}
</script>`
    : ''}
`;
export default {
    title: 'Components/Multi Select',
};
export const Default = Template.bind({});
Default.args = {
    options: [{ value: 'one' }, { value: 'two' }, { value: 'three' }],
    label: 'Multi select',
    hint_text: 'Hint text',
    info_text: 'Info text',
    error_text: 'Error text',
    placeholder: 'Placeholder',
    typeahead: true,
    disabled: false,
    readonly: false,
    clearable: true,
    chip_list: false,
    required: true,
    invalid: false,
};
//# sourceMappingURL=at-multi-select.stories.js.map
