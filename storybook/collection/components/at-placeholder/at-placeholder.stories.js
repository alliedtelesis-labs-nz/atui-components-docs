const Template = (args) => `
<at-placeholder
    placeholder_title="${args.message_title ?? ''}"
    icon="${args.icon ?? ''}"
    content="${args.content ?? ''}"
    size="${args.size ?? ''}"
    ${args.show_loading_spinner ? 'show_loading_spinner' : ''}
/>
`;
export default {
    title: 'Components/Placeholder',
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    message_title: 'Placeholder title',
    content: 'Placeholder content',
    icon: 'home',
    size: 'md',
    show_loading_spinner: false,
};
