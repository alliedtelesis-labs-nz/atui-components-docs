const Template = (args) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return `
<at-input-range
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    error_text="${(_b = args.error_text) !== null && _b !== void 0 ? _b : ''}"
    info_text="${(_c = args.info_text) !== null && _c !== void 0 ? _c : ''}"
    hint_text="${(_d = args.hint_text) !== null && _d !== void 0 ? _d : ''}"
    warning_text="${(_e = args.warning_text) !== null && _e !== void 0 ? _e : ''}"
    suffix="${(_f = args.suffix) !== null && _f !== void 0 ? _f : ''}"
    value=${(_g = args.value) !== null && _g !== void 0 ? _g : ''}
    max_display_value=${(_h = args.max_display_value) !== null && _h !== void 0 ? _h : 100}
    max_selectable_value=${(_j = args.max_selectable_value) !== null && _j !== void 0 ? _j : 100}
    min_selectable_value=${(_k = args.min_selectable_value) !== null && _k !== void 0 ? _k : 0}
    tick_interval=${(_l = args.tick_interval) !== null && _l !== void 0 ? _l : 0}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
};
export default {
    title: 'Components/Range Input',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    info_text: 'Info text',
    error_text: 'Error text',
    hint_text: 'Hint text',
    warning_text: 'Warning text',
    suffix: '%',
    value: 50,
    max_display_value: 100,
    max_selectable_value: 100,
    min_selectable_value: 0,
    tick_interval: 0,
    required: true,
    readonly: false,
    disabled: false,
    invalid: false,
};
//# sourceMappingURL=at-input-range.stories.js.map
