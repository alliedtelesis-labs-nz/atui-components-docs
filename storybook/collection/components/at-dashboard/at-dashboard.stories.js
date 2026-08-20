const WIDGETS = [
    { id: 'usage', x: 0, y: 0, w: 6, h: 3 },
    { id: 'clients', x: 6, y: 0, w: 6, h: 3 },
    { id: 'alerts', x: 0, y: 3, w: 12, h: 3 },
];
const widgetBody = (title, body) => `
    <div slot="${title.toLowerCase()}" style="height: 100%;">
        <at-card card_title="${title}">
            <p class="text-secondary">${body}</p>
        </at-card>
    </div>`;
const Template = (args) => `
<at-dashboard ${args.read_only ? 'read_only' : ''}>
    ${widgetBody('Usage', 'Bandwidth over the last 24 hours.')}
    ${widgetBody('Clients', '128 connected clients.')}
    ${widgetBody('Alerts', 'No alerts in the selected period.')}
</at-dashboard>
<script>
document.querySelector('at-dashboard').widget_items = ${JSON.stringify(WIDGETS, null, 4)};
</script>
`;
const DragHandleTemplate = () => `
<at-dashboard drag_handle=".widget-handle">
    <div slot="usage" style="height: 100%;">
        <at-card card_title="Usage">
            <at-button slot="card-header-actions" class="widget-handle" type="secondaryText" size="sm" label="Move"></at-button>
            <p class="text-secondary">Only the Move button starts a drag.</p>
        </at-card>
    </div>
    <div slot="clients" style="height: 100%;">
        <at-card card_title="Clients">
            <at-button slot="card-header-actions" class="widget-handle" type="secondaryText" size="sm" label="Move"></at-button>
            <p class="text-secondary">Dragging the card body does nothing.</p>
        </at-card>
    </div>
</at-dashboard>
<script>
document.querySelector('at-dashboard').widget_items = [
    { id: 'usage', x: 0, y: 0, w: 6, h: 3 },
    { id: 'clients', x: 6, y: 0, w: 6, h: 3 }
];
</script>
`;
export default {
    title: 'Components/Dashboard',
};
export const Default = Template.bind({});
Default.args = {
    read_only: false,
};
Default.parameters = {
    docs: {
        description: {
            story: "Widgets are positioned by `widget_items`; each entry's `id` names the slot its content goes in. Widgets can be dragged and resized, and every change emits `changedItem`.",
        },
    },
};
export const ReadOnly = Template.bind({});
ReadOnly.storyName = 'Read Only';
ReadOnly.args = {
    read_only: true,
};
ReadOnly.parameters = {
    docs: {
        description: {
            story: 'With `read_only` the layout is fixed: no dragging, no resizing, and no per-widget options menu, so a dashboard can be shown to someone who may not rearrange it.',
        },
    },
};
export const CustomDragHandle = DragHandleTemplate.bind({});
CustomDragHandle.storyName = 'Custom Drag Handle';
CustomDragHandle.parameters = {
    docs: {
        description: {
            story: '`drag_handle` takes a selector, so only that element starts a drag. Use it when a widget contains controls of its own that a drag would otherwise swallow.',
        },
    },
};
