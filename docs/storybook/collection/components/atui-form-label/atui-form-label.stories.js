const Template = (args) => {
    var _a, _b, _c;
    return `
<atui-form-label 
    for="${(_a = args.for) !== null && _a !== void 0 ? _a : ''}"
    label="${(_b = args.label) !== null && _b !== void 0 ? _b : ''}"
    info_text="${(_c = args.info_text) !== null && _c !== void 0 ? _c : ''}"
    ${args.required ? 'required' : ''}
/>
`;
};
export default {
    title: 'Components/Form Label',
};
export const Default = Template.bind({});
Default.args = {
    for: '',
    label: 'Label',
    info_text: 'Info text',
    required: true,
};
//# sourceMappingURL=atui-form-label.stories.js.map
