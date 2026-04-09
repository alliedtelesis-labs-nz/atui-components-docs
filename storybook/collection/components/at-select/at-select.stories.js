const Template = (args) => `
<at-select
    label="${args.label ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    value="${args.value ?? ''}"
    ${args.grouped ? 'grouped' : ''}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.clearable_search ? 'clearable_search' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.typeahead ? 'typeahead' : ''}

/>
<script>
document.querySelector('at-select').options = ${JSON.stringify(args.options ?? [], null, 4)};
document.querySelector('at-select').option_groups = ${JSON.stringify(args.option_groups ?? [], null, 4)};
</script>
    `;
export default {
    title: 'Components/Select',
};
export const Primary = Template.bind({});
Primary.args = {
    options: [
        { key: 'one', value: 'one', disabled: false },
        { key: 'two', value: 'two', disabled: false },
        { key: 'three', value: 'three', disabled: false },
        { key: 'four', value: 'four', disabled: false },
    ],
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
    clearable_search: false,
    clearable: true,
    disabled: false,
    readonly: false,
    typeahead: true,
};
export const Grouped = Template.bind({});
Grouped.args = {
    option_groups: [
        {
            title: 'group 1',
            subgroup: [
                { key: 'one', value: 'one' },
                { key: 'two', value: 'two' },
            ],
        },
        {
            title: 'group 2',
            subgroup: [
                { key: 'three', value: 'three' },
                { key: 'four', value: 'four' },
            ],
        },
    ],
    label: 'Input Label',
    hint_text: 'Hint Text',
    info_text: 'Info Text',
    error_text: 'Error text',
    placeholder: 'Placeholder',
    value: '',
    invalid: false,
    required: true,
    clearable: true,
    disabled: false,
    readonly: false,
    typeahead: true,
};
