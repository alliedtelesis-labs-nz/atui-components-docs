const Template = (args) => `
<at-accordion default_open=${args.default_open} />
<script>
document.querySelector('at-accordion').items = ${JSON.stringify(args.items, null, 4)}
</script>
`;
const TemplateSlot = (args) => `
<at-accordion default_open=${args.default_open}>
${args.items
    .map((item) => `
    <at-accordion-item item_id="${item.item_id}">
        <at-accordion-trigger slot="accordion-trigger" label="${item.label}"></at-accordion-trigger>
        <div>${item.content}</div>
    </at-accordion-item>`)
    .join('\n')}
</at-accordion>
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
