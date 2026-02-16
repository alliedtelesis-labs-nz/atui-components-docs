const Template = (args) => `<at-checkbox 
    label="${args.label ?? ''}" 
    hint_text="${args.hint_text ?? ''}"
    value="${args.value ?? ''}"
    ${args.checked ? 'checked' : ''}
    ${args.disabled ? 'disabled' : ''}
/>`;
export default {
    title: 'Components/Checkbox',
};
export const Primary = Template.bind({});
Primary.args = {
    label: 'Title',
    hint_text: 'Hint text',
    value: 'one',
    checked: true,
    disabled: false,
};
export const HintText = Template.bind({});
HintText.args = {
    label: 'Title',
    hint_text: 'Hint text',
    value: 'two',
    checked: true,
    disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Title',
    hint_text: 'Hint text',
    value: 'three',
    checked: true,
    disabled: true,
};
