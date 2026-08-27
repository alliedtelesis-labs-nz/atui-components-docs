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
export const NoTypeahead = Template.bind({});
NoTypeahead.storyName = 'No Typeahead';
NoTypeahead.args = {
    ...Primary.args,
    label: 'Input Label (no typeahead)',
    hint_text: 'Enter, Space or Down Arrow opens the list',
    typeahead: false,
};
export const GroupedNoTypeahead = Template.bind({});
GroupedNoTypeahead.storyName = 'Grouped, No Typeahead';
GroupedNoTypeahead.args = {
    ...Grouped.args,
    label: 'Input Label (grouped, no typeahead)',
    hint_text: 'Grouped options without a search field',
    typeahead: false,
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
const ComboboxTemplate = () => `
<at-select
    id="combobox-story"
    label="Company"
    info_text="Pick a company or type a hex ID, e.g. 0x0499"
    placeholder="Search a company or type a hex ID"
    typeahead
    clearable
    allow_custom
></at-select>
<script>
document.getElementById('combobox-story').options = [
    { value: '0x004C', label: 'Apple (0x004C)' },
    { value: '0x0059', label: 'Nordic Semiconductor (0x0059)' },
    { value: '0x0087', label: 'Fitbit (0x0087)' },
    { value: '0x02D0', label: 'Kontakt.io (0x02D0)' },
    { value: '0x02E5', label: 'Espressif (0x02E5)' },
];
</script>
`;
export const Combobox = ComboboxTemplate.bind({});
Combobox.storyName = 'Combobox';
Combobox.parameters = {
    docs: {
        description: {
            story: 'With `allow_custom` the dropdown offers the search text as an entry when no option carries it, and the input then shows that value verbatim. Use it where the option list is a convenience rather than the full set of legal values.',
        },
    },
};
const LargeListTemplate = () => `
<at-select
    id="large-list-story"
    label="Company"
    placeholder="Search a company or type a hex ID"
    typeahead
    clearable
    allow_custom
></at-select>
<script>
document.getElementById('large-list-story').options = Array.from(
    { length: 2000 },
    (_, i) => {
        const hex = '0x' + i.toString(16).toUpperCase().padStart(4, '0');
        return { value: hex, label: 'Company ' + i + ' (' + hex + ')' };
    },
);
document.getElementById('large-list-story').max_rendered_options = 50;
document.getElementById('large-list-story').search_debounce_ms = 150;
</script>
`;
export const LargeList = LargeListTemplate.bind({});
LargeList.storyName = 'Large List';
LargeList.parameters = {
    docs: {
        description: {
            story: 'Two thousand options with `max_rendered_options` at 50 and `search_debounce_ms` at 150. Only the capped matches are rendered; the remainder is summarised in a trailing row so the count is never hidden. Listen for `atuiSearchChange` to replace `options` from a lazily loaded or server-backed source.',
        },
    },
};
