const Template = (args) => `
<at-button
    label="${args.label ?? ''}"
    icon="${args.icon ?? ''}"
    icon_right="${args.icon_right ?? ''}"
    size="${args.size ?? 'lg'}"
    type="${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=${args.spinner_minimum_display_period_ms ?? 1000}
    ${args.submit ? 'submit' : ''}
    ${args.border ? 'border' : ''}
    ${args.rounded ? 'rounded' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.in_progress ? 'in_progress' : ''}
/>
`;
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
