const Template = (args) => {
    var _a, _b;
    return `
<atui-radio 
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}" 
    subtitle="${(_b = args.subtitle) !== null && _b !== void 0 ? _b : ''}"
    ${args.checked ? 'checked' : ''}
    ${args.disabled ? 'disabled' : ''}
/>`;
};
export default {
    title: 'Components/Radio',
};
export const Primary = Template.bind({});
Primary.args = { label: 'Title', subtitle: '', checked: true, disabled: false };
export const Subtitle = Template.bind({});
Subtitle.args = {
    label: 'Title',
    subtitle: 'Subtitle',
    checked: false,
    disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = { label: 'Title', subtitle: '', checked: true, disabled: true };
//# sourceMappingURL=atui-radio.stories.js.map
