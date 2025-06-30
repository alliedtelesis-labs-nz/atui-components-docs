const Template = (args) => {
    var _a, _b, _c, _d, _e;
    return `
<atui-message
    message_title="${(_a = args.message_title) !== null && _a !== void 0 ? _a : ''}"
    icon="${(_b = args.icon) !== null && _b !== void 0 ? _b : ''}"
    content="${(_c = args.content) !== null && _c !== void 0 ? _c : ''}"
    theme="${(_d = args.theme) !== null && _d !== void 0 ? _d : ''}"
    type="${(_e = args.type) !== null && _e !== void 0 ? _e : ''}"
/>
`;
};
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
//# sourceMappingURL=atui-message.stories.js.map
