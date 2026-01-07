const Template = (args) => `
<at-badge 
    ${args.count ? `count="${args.count}"` : ''}
    icon="${args.icon ?? ''}"
    label="${args.label ?? ''}"
    ${args.rounded ? 'rounded' : ''}
    impact="${args.impact ?? 'low'}"
    type="${args.type ?? 'default'}"
/>`;
export default {
    title: 'Components/Badge',
    argTypes: {
        impact: {
            options: ['low', 'high'],
            control: { type: 'radio' },
        },
        type: {
            options: [
                'default',
                'disabled',
                'error',
                'info',
                'success',
                'warning',
            ],
            control: { type: 'select' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    icon: 'home',
    label: 'Badge',
    count: 1,
    rounded: false,
    impact: 'low',
    type: 'default',
};
export const Info = Template.bind({});
Info.args = {
    icon: 'home',
    label: 'Badge',
    count: 1,
    rounded: false,
    impact: 'low',
    type: 'info',
};
export const Success = Template.bind({});
Success.args = {
    icon: 'home',
    label: 'Badge',
    count: 1,
    rounded: false,
    impact: 'low',
    type: 'success',
};
export const Warning = Template.bind({});
Warning.args = {
    icon: 'home',
    label: 'Badge',
    count: 1,
    rounded: false,
    impact: 'low',
    type: 'warning',
};
export const Error = Template.bind({});
Error.args = {
    icon: 'home',
    label: 'Badge',
    count: 1,
    rounded: false,
    impact: 'low',
    type: 'error',
};
export const Disabled = Template.bind({});
Disabled.args = {
    icon: 'home',
    label: 'Badge',
    count: 1,
    rounded: false,
    impact: 'low',
    type: 'disabled',
};
