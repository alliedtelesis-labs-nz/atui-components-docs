const Template = (args) => `
<at-search
    label="${args.label ?? ''}"
    model="${args.model ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    placeholder="${args.placeholder ?? ''}"
/>
`;
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
