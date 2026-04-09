const Template = (args) => `
<at-message
    message_title="${args.message_title ?? ''}"
    icon="${args.icon ?? ''}"
    content="${args.content ?? ''}"
    theme="${args.theme ?? ''}"
    type="${args.type ?? ''}"
/>
`;
export default {
    title: 'Components/Message',
    argTypes: {
        type: {
            options: ['default', 'error', 'info', 'success', 'warning'],
            control: { type: 'select' },
        },
        theme: {
            options: ['default', 'light'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    message_title: 'Message title',
    content: 'Message content',
    icon: 'home',
    type: 'default',
    theme: 'default',
};
