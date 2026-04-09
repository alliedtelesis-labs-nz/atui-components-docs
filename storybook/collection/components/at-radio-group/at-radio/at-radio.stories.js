const Template = (args) => `
<at-radio 
    label="${args.label ?? ''}" 
    subtitle="${args.subtitle ?? ''}"
    ${args.checked ? 'checked' : ''}
    ${args.disabled ? 'disabled' : ''}
/>`;
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
