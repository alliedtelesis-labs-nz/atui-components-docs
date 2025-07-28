const Template = (args) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return `
<atui-input 
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    error_text="${(_b = args.error_text) !== null && _b !== void 0 ? _b : ''}"
    info_text="${(_c = args.info_text) !== null && _c !== void 0 ? _c : ''}"
    hint_text="${(_d = args.hint_text) !== null && _d !== void 0 ? _d : ''}"
    type="${(_e = args.type) !== null && _e !== void 0 ? _e : ''}"
    value="${(_f = args.value) !== null && _f !== void 0 ? _f : ''}"
    placeholder="${(_g = args.placeholder) !== null && _g !== void 0 ? _g : ''}"
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
};
export default {
    title: 'Components/Input',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    info_text: 'Info text',
    error_text: 'Error text',
    hint_text: 'Hint text',
    type: 'text',
    value: '',
    placeholder: 'Placeholder',
    required: true,
    readonly: false,
    disabled: false,
    clearable: true,
    invalid: false,
};
//# sourceMappingURL=atui-input.stories.js.map
