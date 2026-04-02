const Template = (args) => {
    var _a, _b, _c, _d, _e;
    return `
<at-search
    label="${(_a = args.label) !== null && _a !== void 0 ? _a : ''}"
    model="${(_b = args.model) !== null && _b !== void 0 ? _b : ''}"
    hint_text="${(_c = args.hint_text) !== null && _c !== void 0 ? _c : ''}"
    info_text="${(_d = args.info_text) !== null && _d !== void 0 ? _d : ''}"
    placeholder="${(_e = args.placeholder) !== null && _e !== void 0 ? _e : ''}"
/>
`;
};
export default {
    title: 'Components/Search',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Search label',
    model: '',
    hint_text: 'Hint text',
    info_text: 'Info text',
    placeholder: 'Placeholder',
};
//# sourceMappingURL=at-search.stories.js.map
