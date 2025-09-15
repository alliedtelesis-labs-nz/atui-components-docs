const Template = (args) => {
    var _a, _b, _c, _d;
    return `
<at-placeholder
    placeholder_title="${(_a = args.message_title) !== null && _a !== void 0 ? _a : ''}"
    icon="${(_b = args.icon) !== null && _b !== void 0 ? _b : ''}"
    content="${(_c = args.content) !== null && _c !== void 0 ? _c : ''}"
    size="${(_d = args.size) !== null && _d !== void 0 ? _d : ''}"
    ${args.show_loading_spinner ? 'show_loading_spinner' : ''}
/>
`;
};
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
//# sourceMappingURL=at-placeholder.stories.js.map
