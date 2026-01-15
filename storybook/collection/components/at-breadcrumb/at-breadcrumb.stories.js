const Template = (args) => `
<at-breadcrumb 
    prefix_delimiter="${args.prefix_delimiter ?? ''}"
/>
<script>
document.querySelector('at-breadcrumb').values = ${JSON.stringify(args.values, null, 4)};
${args.get_prefix ? `document.querySelector('at-breadcrumb').get_prefix = ${'' + args.get_prefix};` : ''}
</script>
`;
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
