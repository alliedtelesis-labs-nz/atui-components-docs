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
    ${args.allow_custom ? 'allow_custom' : ''}
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
export const AllowCustom = Template.bind({});
AllowCustom.args = {
    ...Default.args,
    id: 'multi-select-allow-custom',
    options: [
        { value: '0x004C', label: 'Apple (0x004C)' },
        { value: '0x0059', label: 'Nordic Semiconductor (0x0059)' },
        { value: '0x0087', label: 'Fitbit (0x0087)' },
    ],
    value: ['0x004C', '0x0499'],
    label: 'Companies',
    placeholder: 'Search a company or type a hex ID',
    hint_text: '',
    info_text: 'Pick companies or type a hex ID, e.g. 0x0499',
    error_text: '',
    required: false,
    allow_custom: true,
};
AllowCustom.parameters = {
    docs: {
        description: {
            story: 'With `allow_custom` the dropdown offers the search text as an entry when no option carries it, and the selection then shows that value verbatim. Requires `typeahead`. Use it where the option list is a convenience rather than the full set of legal values.',
        },
    },
};
