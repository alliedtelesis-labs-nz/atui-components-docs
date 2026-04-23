const Template = (args) => `
<at-button
    label="${args.label ?? ''}"
    size="${args.size ?? 'lg'}"
    type="${args.type ?? 'primary'}"
    spinner_minimum_display_period_ms=${args.spinner_minimum_display_period_ms ?? 1000}
    ${args.submit ? 'submit' : ''}
    ${args.border ? 'border' : ''}
    ${args.rounded ? 'rounded' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="${args.icon_after ?? ''}" />
</at-button>
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
    icon_after: '',
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
    icon_after: '',
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
    icon_after: '',
    in_progress: true,
    size: 'lg',
    spinner_minimum_display_period_ms: 1000,
    submit: false,
    type: 'primary',
};
