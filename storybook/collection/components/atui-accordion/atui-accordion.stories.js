const Template = (args) => `
<atui-accordion default_open=${args.default_open} />
<script>
document.querySelector('atui-accordion').items = ${JSON.stringify(args.items, null, 4)}
</script>
`;
const TemplateSlot = (args) => `
<atui-accordion default_open=${args.default_open}>
${args.items
    .map((item) => `
    <atui-accordion-item item_id="${item.item_id}">
        <atui-accordion-trigger slot="trigger" label="${item.label}"></atui-accordion-trigger>
        <div slot="content">${item.content}</div>
    </atui-accordion-item>`)
    .join('\n')}
</atui-accordion>
`;
export default {
    title: 'Components/Accordion',
};
export const Default = {
    args: {
        default_open: false,
        items: [
            { item_id: 'one', label: 'one-label', content: 'one-content' },
            { item_id: 'two', label: 'two-label', content: 'two-content' },
        ],
    },
    render: Template,
};
export const Slot = {
    args: {
        default_open: false,
        items: [
            {
                item_id: 'one',
                label: 'one',
                content: '<div style="margin: 8px 24px">Accordion content 1</div>',
            },
            {
                item_id: 'two',
                label: 'two',
                content: '<div style="margin: 8px 24px">Accordion content 2</div>',
            },
        ],
    },
    render: TemplateSlot,
};
//# sourceMappingURL=atui-accordion.stories.js.map
