const Template = (args) => {
    var _a;
    return `
<atui-breadcrumb 
    prefix_delimiter="${(_a = args.prefix_delimiter) !== null && _a !== void 0 ? _a : ''}"
/>
<script>
document.querySelector('atui-breadcrumb').values = ${JSON.stringify(args.values, null, 4)};
${args.get_prefix ? `document.querySelector('atui-breadcrumb').get_prefix = ${'' + args.get_prefix};` : ''}
</script>
`;
};
export default {
    title: 'Components/Breadcrumb',
};
export const Default = Template.bind({});
Default.args = { values: ['one', 'two', 'three', 'four'] };
export const Prefix = Template.bind({});
Prefix.args = {
    values: ['one', 'two', 'three', 'four'],
    get_prefix: (idx) => `id: ${idx + 1}`,
    prefix_delimiter: ' - ',
};
//# sourceMappingURL=atui-breadcrumb.stories.js.map
