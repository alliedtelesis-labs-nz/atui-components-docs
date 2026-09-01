const Template = (args) => `
<at-multi-select
    id="${args.id ?? 'multi-select'}"
    label="${args.label ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    ${args.disabled ? 'disabled' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.required ? 'required' : ''}
    ${args.typeahead ? 'typeahead' : ''}
    selection_display="${args.selection_display ?? 'chips'}"
/>
${args.options
    ? `
<script>
(() => {
    const el = document.getElementById('${args.id ?? 'multi-select'}');
    el.options = ${JSON.stringify(args.options, null, 4)};
    el.value = ${JSON.stringify(args.value ?? [])};
})();
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
    required: true,
    invalid: false,
};
export const CountTrigger = Template.bind({});
CountTrigger.args = {
    ...Default.args,
    id: 'multi-select-count',
    selection_display: 'count',
    value: ['one', 'three'],
    label: 'Site',
    placeholder: 'Site',
    hint_text: '',
    info_text: '',
    error_text: '',
    required: false,
};
