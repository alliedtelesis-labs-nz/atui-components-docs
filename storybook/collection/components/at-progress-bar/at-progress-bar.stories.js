export default {
    title: 'Components/Progress Bar',
    component: 'at-progress-bar',
    argTypes: {
        size: { options: ['sm', 'lg'], control: 'select' },
        mode: { options: ['determinate', 'indeterminate'], control: 'select' },
        type: {
            options: ['info', 'success', 'warning', 'error'],
            control: 'select',
        },
        percentage: { control: { type: 'number', min: 0, max: 100 } },
    },
};
const Template = (args) => `
    <at-progress-bar
        percentage="${args.percentage}"
        size="${args.size}"
        mode="${args.mode}"
        type="${args.type}"
    ></at-progress-bar>
`;
export const Default = Template.bind({});
Default.args = {
    percentage: 50,
    size: 'sm',
    mode: 'determinate',
    type: 'info',
};
//# sourceMappingURL=at-progress-bar.stories.js.map
