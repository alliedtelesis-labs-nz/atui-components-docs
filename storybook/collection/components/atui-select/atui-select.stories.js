const Template = (args) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return `
<atui-select
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    hint_text="${(_b = args.hint_text) !== null && _b !== void 0 ? _b : ''}"
    info_text="${(_c = args.info_text) !== null && _c !== void 0 ? _c : ''}"
    error_text="${(_d = args.error_text) !== null && _d !== void 0 ? _d : ''}"
    placeholder="${(_e = args.placeholder) !== null && _e !== void 0 ? _e : ''}"
    value="${(_f = args.value) !== null && _f !== void 0 ? _f : ''}"
    group_by="${(_g = args.group_by) !== null && _g !== void 0 ? _g : ''}"
    ${args.grouped ? 'grouped' : ''}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.typeahead ? 'typeahead' : ''}
/>
<script>
document.querySelector('atui-select').options = ${JSON.stringify(args.options, null, 4)};
</script>
    `;
};
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
//# sourceMappingURL=atui-select.stories.js.map
