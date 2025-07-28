const Template = (args) => {
    var _a, _b, _c, _d, _e;
    return `
<atui-multi-select
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    error_text="${(_b = args.error_text) !== null && _b !== void 0 ? _b : ''}"
    info_text="${(_c = args.info_text) !== null && _c !== void 0 ? _c : ''}"
    hint_text="${(_d = args.hint_text) !== null && _d !== void 0 ? _d : ''}"
    placeholder="${(_e = args.placeholder) !== null && _e !== void 0 ? _e : ''}"
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
document.querySelector('atui-multi-select').options = ${JSON.stringify(args.options, null, 4)}
</script>`
        : ''}
`;
};
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
//# sourceMappingURL=atui-multi-select.stories.js.map
