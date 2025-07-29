const Template = (args) => {
    var _a;
    return `
<atui-tooltip
    position="${(_a = args.position) !== null && _a !== void 0 ? _a : 'right'}"
    layout="${args.layout}"
>
    <atui-badge slot="tooltip-trigger" label="Hover over me"></atui-badge>
    <span slot="tooltip-content">Tooltip text</span>
</atui-tooltip>
`;
};
export default {
    title: 'Components/Tooltip',
    argTypes: {
        position: {
            options: ['bottom', 'left', 'top', 'right'],
            control: { type: 'radio' },
        },
        layout: {
            options: ['fixed', 'absolute'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    position: 'right',
    layout: 'fixed',
};
//# sourceMappingURL=atui-tooltip.stories.js.map
