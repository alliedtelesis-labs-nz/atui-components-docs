const Template = (args) => `
<at-button-switch
    label="${args.label ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    ${args.value ? 'value' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
export default {
    title: 'Components/Button Switch',
    argTypes: {
        label: {
            control: 'text',
            description: 'Label displayed alongside the toggle.',
        },
        hint_text: {
            control: 'text',
            description: 'Short description or validation hint if required.',
        },
        info_text: {
            control: 'text',
            description: 'Optional info icon with detailed tooltip description.',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable interaction with the toggle.',
        },
        value: {
            control: 'boolean',
            description: 'Set the toggles state.',
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    label: 'Button Switch',
    value: false,
    disabled: false,
};
export const WithHintText = Template.bind({});
WithHintText.args = {
    label: 'Enable Notifications',
    hint_text: 'Toggle to receive email notifications',
    value: false,
};
export const WithInfoText = Template.bind({});
WithInfoText.args = {
    label: 'Advanced Mode',
    info_text: 'Enables advanced configuration options for power users',
    value: false,
};
export const Active = Template.bind({});
Active.args = {
    label: 'Active Switch',
    value: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Switch',
    disabled: true,
    value: false,
};
export const DisabledActive = Template.bind({});
DisabledActive.args = {
    label: 'Disabled Active Switch',
    disabled: true,
    value: true,
};
export const AllOptions = Template.bind({});
AllOptions.args = {
    label: 'Full Featured Switch',
    hint_text: 'This is a hint text for additional context',
    info_text: 'Detailed information about this switch option',
    value: false,
};
