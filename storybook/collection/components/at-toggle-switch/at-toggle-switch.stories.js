const Template = (args) => {
    var _a, _b;
    return `
<at-toggle-switch
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    label_position="${(_b = args.label_position) !== null && _b !== void 0 ? _b : ''}"
    show_label=${args.show_label ? true : false}
    ${args.value ? 'value' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
};
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
//# sourceMappingURL=at-toggle-switch.stories.js.map
