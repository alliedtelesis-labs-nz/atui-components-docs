const Template = (args) => `
<at-toggle-switch
    label="${args.label ?? ''}"
    label_position="${args.label_position ?? ''}"
    show_label=${args.show_label ? true : false}
    ${args.value ? 'value' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
export default {
    title: 'Components/Toggle Switch',
    argTypes: {
        label_position: {
            options: ['after', 'before'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    label_position: 'before',
    label: 'Toggle switch',
    show_label: true,
    value: true,
    disabled: false,
};
