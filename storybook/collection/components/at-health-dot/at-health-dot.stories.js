const Template = (args) => `
<at-health-dot
    status="${args.status ?? 'good'}"
    size="${args.size ?? 'md'}"
></at-health-dot>`;
export default {
    title: 'Components/HealthDot',
    argTypes: {
        status: {
            options: ['good', 'warn', 'bad'],
            control: { type: 'radio' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
    },
};
export const Good = Template.bind({});
Good.args = {
    status: 'good',
    size: 'md',
};
export const Warn = Template.bind({});
Warn.args = {
    status: 'warn',
    size: 'md',
};
export const Bad = Template.bind({});
Bad.args = {
    status: 'bad',
    size: 'md',
};
export const Small = Template.bind({});
Small.args = {
    status: 'good',
    size: 'sm',
};
export const Large = Template.bind({});
Large.args = {
    status: 'good',
    size: 'lg',
};
