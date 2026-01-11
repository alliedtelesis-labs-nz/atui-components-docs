const Template = (args) => `
<at-side-panel 
    panel_id="${args.panel_id ?? ''}"
    panel_subtitle="${args.panel_subtitle ?? ''}"
    panel_title="${args.panel_title ?? ''}"
    origin="${args.origin ?? ''}"
    size="${args.size ?? ''}"
    show_close_button=${args.show_close_button ? true : false}
    ${args.click_out_to_close ? 'click_out_to_close' : ''}
    ${args.hide_scrollbar ? 'hide_scrollbar' : ''}
>
    <at-message message_title="Sidepanel content" icon="preview" slot="content"></at-message>
</at-side-panel>
<at-button label="Open Sidepanel" onclick={document.querySelector("#${args.panel_id ?? ''}").showModal()} />
`;
const ExternalTriggerTemplate = (args) => `
<at-button id="${args.trigger_id}" label="${args.trigger_label || 'Open Side Panel'}" type="primary"></at-button>
<at-side-panel 
    panel_id="${args.panel_id}" 
    trigger_id="${args.trigger_id}"
    panel_title="${args.panel_title}"
    panel_subtitle="${args.panel_subtitle}"
    origin="${args.origin}"
    size="${args.size}"
>
    <div slot="content" style="padding: 2rem;">
        <h3>External Trigger Panel</h3>
        <p>This side panel was opened using an external trigger element!</p>
        <at-message message_title="Panel Content" icon="info" />
    </div>
</at-side-panel>
`;
const TableRowExampleTemplate = () => `
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">Service</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Status</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Database Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Running</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button id="service-config-1" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></at-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Web Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Stopped</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button id="service-config-2" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></at-button>
            </td>
        </tr>
    </tbody>
</table>

<at-side-panel panel_id="panel-1" trigger_id="service-config-1" panel_title="Database Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Database Configuration</h3>
        <p>Service ID: db-service-1</p>
        <p>Port: 5432</p>
        <p>Status: Running</p>
        <at-message message_title="Configuration saved successfully" icon="check" />
    </div>
</at-side-panel>

<at-side-panel panel_id="panel-2" trigger_id="service-config-2" panel_title="Web Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Web Service Configuration</h3>
        <p>Service ID: web-service-1</p>
        <p>Port: 8080</p>
        <p>Status: Stopped</p>
        <at-message message_title="Service configuration panel" icon="settings" />
    </div>
</at-side-panel>
`;
export default {
    title: 'Components/Side Panel',
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'radio' },
        },
        origin: {
            options: ['left', 'right'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    panel_id: 'panel',
    panel_title: 'Panel title',
    panel_subtitle: 'Panel subtitle',
    origin: 'right',
    size: 'xs',
    hide_scrollbar: false,
    click_out_to_close: false,
    show_close_button: true,
};
export const ExternalTrigger = ExternalTriggerTemplate.bind({});
ExternalTrigger.args = {
    panel_id: 'external-panel',
    trigger_id: 'external-panel-trigger',
    trigger_label: 'Open Side Panel',
    panel_title: 'External Trigger Panel',
    panel_subtitle: 'Opened via external trigger',
    origin: 'right',
    size: 'md',
};
export const TableRowExample = TableRowExampleTemplate.bind({});
TableRowExample.storyName = 'Table Row Example';
TableRowExample.parameters = {
    docs: {
        description: {
            story: 'Example showing how to use external triggers in table rows with unique IDs to avoid collisions.',
        },
    },
};
//# sourceMappingURL=at-side-panel.stories.js.map
