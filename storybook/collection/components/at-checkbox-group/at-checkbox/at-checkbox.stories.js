const Template = (args) => `<at-checkbox 
    label="${args.label ?? ''}" 
    subtitle="${args.subtitle ?? ''}"
    checkbox_id="${args.checkbox_id ?? ''}"
    ${args.checked ? 'checked' : ''}
    ${args.disabled ? 'disabled' : ''}
/>`;
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
