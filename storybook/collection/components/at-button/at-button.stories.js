const Template = (args) => {
    var _a, _b, _c, _d, _e, _f;
    return `
<at-button
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    icon="${(_b = args.icon) !== null && _b !== void 0 ? _b : ''}"
    icon_right="${(_c = args.icon_right) !== null && _c !== void 0 ? _c : ''}"
    size="${(_d = args.size) !== null && _d !== void 0 ? _d : 'lg'}"
    type="${(_e = args.type) !== null && _e !== void 0 ? _e : 'primary'}"
    spinner_minimum_display_period_ms=${(_f = args.spinner_minimum_display_period_ms) !== null && _f !== void 0 ? _f : 1000}
    ${args.submit ? 'submit' : ''}
    ${args.border ? 'border' : ''}
    ${args.rounded ? 'rounded' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.in_progress ? 'in_progress' : ''}
/>
`;
};
export default {
    title: 'Components/Button',
    argTypes: {
        size: {
            options: ['lg', 'md', 'sm'],
            control: { type: 'radio' },
        },
        type: {
            options: [
                'primary',
                'primaryOutline',
                'primaryText',
                'secondary',
                'secondaryOutline',
                'secondaryText',
                'destructive',
                'destructiveOutline',
                'destructiveText',
            ],
            control: { type: 'select' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    label: 'Button',
    icon: 'home',
    disabled: false,
    icon_right: '',
    in_progress: false,
    size: 'lg',
    spinner_minimum_display_period_ms: 1000,
    submit: false,
    type: 'primary',
};
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Button',
    icon: 'home',
    disabled: true,
    icon_right: '',
    in_progress: false,
    size: 'lg',
    spinner_minimum_display_period_ms: 1000,
    submit: false,
    type: 'primary',
};
export const Spinner = Template.bind({});
Spinner.args = {
    label: 'Button',
    icon: 'home',
    disabled: false,
    icon_right: '',
    in_progress: true,
    size: 'lg',
    spinner_minimum_display_period_ms: 1000,
    submit: false,
    type: 'primary',
};
//# sourceMappingURL=at-button.stories.js.map
