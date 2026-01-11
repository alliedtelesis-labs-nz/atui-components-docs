const Template = (args) => `
<at-select
    label="${args.label ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    value="${args.value ?? ''}"
    group_by="${args.group_by ?? ''}"
    ${args.grouped ? 'grouped' : ''}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.typeahead ? 'typeahead' : ''}
/>
<script>
document.querySelector('at-select').options = ${JSON.stringify(args.options, null, 4)};
</script>
    `;
export default {
    title: 'Components/Select',
};
export const Primary = Template.bind({});
Primary.args = {
    options: ['one', 'two', 'three', 'four'],
    label: 'Input Label',
    hint_text: 'Hint Text',
    info_text: 'Info Text',
    error_text: 'Error text',
    placeholder: 'Placeholder',
    value: '',
    group_by: '',
    grouped: false,
    invalid: false,
    required: true,
    clearable: true,
    disabled: false,
    readonly: false,
    typeahead: true,
};
export const Grouped = Template.bind({});
Grouped.args = {
    options: [
        { title: 'group 1', subgroup: ['one', 'two'] },
        { title: 'group 2', subgroup: ['three', 'four'] },
    ],
    label: 'Input Label',
    hint_text: 'Hint Text',
    info_text: 'Info Text',
    error_text: 'Error text',
    placeholder: 'Placeholder',
    value: '',
    group_by: 'subgroup',
    grouped: true,
    invalid: false,
    required: true,
    clearable: true,
    disabled: false,
    readonly: false,
    typeahead: true,
};
//# sourceMappingURL=at-select.stories.js.map
