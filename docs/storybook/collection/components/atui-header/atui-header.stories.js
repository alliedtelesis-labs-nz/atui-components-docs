const Template = (args) => `
<atui-header  
    size="${args.size}"
    icon="${args.icon}"
    header_title="${args.header_title}"
    subtitle="${args.subtitle}"
    padding=${args.padding}
    ${args.border ? 'border' : ''}
/>
`;
export default {
    title: 'Components/Header',
    argTypes: {
        size: {
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            control: { type: 'select' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    header_title: 'Title',
    subtitle: 'Subtitle',
    icon: 'home',
    size: 'h1',
    border: true,
    padding: true,
};
//# sourceMappingURL=atui-header.stories.js.map
