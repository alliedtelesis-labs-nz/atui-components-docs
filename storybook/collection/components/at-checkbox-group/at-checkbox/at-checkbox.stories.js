const Template = (args) => {
    var _a, _b, _c;
    return `<at-checkbox 
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}" 
    subtitle="${(_b = args.subtitle) !== null && _b !== void 0 ? _b : ''}"
    checkbox_id="${(_c = args.checkbox_id) !== null && _c !== void 0 ? _c : ''}"
    ${args.checked ? 'checked' : ''}
    ${args.disabled ? 'disabled' : ''}
/>`;
};
export default {
    title: 'Components/Checkbox',
};
export const Primary = Template.bind({});
Primary.args = {
    label: 'Title',
    subtitle: '',
    checkbox_id: 'checkbox',
    checked: true,
    disabled: false,
};
export const Subtitle = Template.bind({});
Subtitle.args = {
    label: 'Title',
    subtitle: 'Subtitle',
    checkbox_id: 'checkbox',
    checked: true,
    disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Title',
    subtitle: '',
    checkbox_id: 'checkbox',
    checked: true,
    disabled: true,
};
//# sourceMappingURL=at-checkbox.stories.js.map
