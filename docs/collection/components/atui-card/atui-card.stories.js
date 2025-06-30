const Template = (args) => {
    var _a, _b, _c, _d, _e;
    return `
<atui-card
    card_title="${(_a = args.card_title) !== null && _a !== void 0 ? _a : ''}"
    subtitle="${(_b = args.subtitle) !== null && _b !== void 0 ? _b : ''}"
    icon="${(_c = args.icon) !== null && _c !== void 0 ? _c : ''}"
    content="${(_d = args.content) !== null && _d !== void 0 ? _d : ''}"
    shadow="${(_e = args.shadow) !== null && _e !== void 0 ? _e : 'sm'}"
    padding=${args.padding ? 'true' : 'false'}
    overflow=${args.overflow ? 'true' : 'false'}
    ${args.border ? 'border' : ''}
>
    <div
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Card Child</h1>
    </div>
</atui-card>
`;
};
export default {
    title: 'Components/Card',
    argTypes: {
        shadow: {
            options: ['none', 'sm', 'lg'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    card_title: 'Title',
    icon: 'home',
    subtitle: 'Subtitle',
    content: 'Content',
    shadow: 'lg',
    overflow: true,
    padding: true,
    border: false,
};
//# sourceMappingURL=atui-card.stories.js.map
