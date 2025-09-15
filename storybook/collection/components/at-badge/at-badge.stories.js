const Template = (args) => {
    var _a, _b, _c, _d;
    return `
<at-badge 
    ${args.count ? `count="${args.count}"` : ''}
    icon="${(_a = args.icon) !== null && _a !== void 0 ? _a : ''}"
    label="${(_b = args.label) !== null && _b !== void 0 ? _b : ''}"
    ${args.rounded ? 'rounded' : ''}
    impact="${(_c = args.impact) !== null && _c !== void 0 ? _c : 'low'}"
    type="${(_d = args.type) !== null && _d !== void 0 ? _d : 'default'}"
/>`;
};
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
//# sourceMappingURL=at-badge.stories.js.map
