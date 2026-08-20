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
const ColumnHeaderTemplate = () => `
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
    <at-form-label label="Licence tier"></at-form-label>
    <at-form-label label="Action"></at-form-label>
    <at-select aria_label="Licence tier" placeholder="Any tier"></at-select>
    <at-select aria_label="Action" placeholder="Any action"></at-select>
</div>
<script>
const tiers = [
    { key: 'Standard', value: 'standard' },
    { key: 'Advanced', value: 'advanced' },
];
const actions = [
    { key: 'Allocated', value: 'allocated' },
    { key: 'Released', value: 'released' },
];
document.querySelectorAll('at-select')[0].options = tiers;
document.querySelectorAll('at-select')[1].options = actions;
</script>
`;
export const SharedColumnHeader = ColumnHeaderTemplate.bind({});
SharedColumnHeader.storyName = 'Shared Column Header';
SharedColumnHeader.parameters = {
    docs: {
        description: {
            story: 'In a filter row or table-style row the visible label lives in a shared column header, so `label` is left unset and `aria_label` supplies the accessible name instead.',
        },
    },
};
