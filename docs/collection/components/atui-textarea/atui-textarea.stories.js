const Template = (args) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return `
<atui-textarea 
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    error_text="${(_b = args.error_text) !== null && _b !== void 0 ? _b : ''}"
    info_text="${(_c = args.info_text) !== null && _c !== void 0 ? _c : ''}"
    hint_text="${(_d = args.hint_text) !== null && _d !== void 0 ? _d : ''}"
    value="${(_e = args.value) !== null && _e !== void 0 ? _e : ''}"
    placeholder="${(_f = args.placeholder) !== null && _f !== void 0 ? _f : ''}"
    autocomplete="${(_g = args.autocomplete) !== null && _g !== void 0 ? _g : 'on'}"
    max_rows=${(_h = args.max_rows) !== null && _h !== void 0 ? _h : 10}
    min_rows=${(_j = args.min_rows) !== null && _j !== void 0 ? _j : 1}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
};
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
//# sourceMappingURL=atui-textarea.stories.js.map
