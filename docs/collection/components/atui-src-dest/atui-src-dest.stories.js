const Template = (args) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return `
<atui-src-dest
    src_title="${(_a = args.src_title) !== null && _a !== void 0 ? _a : ''}"
    src_subtitle="${(_b = args.src_subtitle) !== null && _b !== void 0 ? _b : ''}"
    src_text="${(_c = args.src_text) !== null && _c !== void 0 ? _c : ''}"
    dest_title="${(_d = args.dest_title) !== null && _d !== void 0 ? _d : ''}"
    dest_subtitle="${(_e = args.dest_subtitle) !== null && _e !== void 0 ? _e : ''}"
    dest_text="${(_f = args.dest_text) !== null && _f !== void 0 ? _f : ''}"
    align="${(_g = args.align) !== null && _g !== void 0 ? _g : 'left'}"
/>
`;
};
export default {
    title: 'Components/Src Dest',
    argTypes: {
        align: {
            options: ['center', 'left'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    src_title: 'Source Title',
    src_subtitle: 'Source Subtitle',
    src_text: 'Source Text',
    dest_title: 'Destination Title',
    dest_subtitle: 'Destination Title',
    dest_text: 'Destination Title',
    align: 'left',
};
//# sourceMappingURL=atui-src-dest.stories.js.map
