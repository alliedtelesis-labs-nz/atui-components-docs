const Template = (args) => `
<at-dialog dialog_id="${args.dialog_id ?? ''}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <at-header header_title="Dialog Title" icon="preview"></at-header>
        <at-button label="Close dialog" onclick={document.querySelector("#${args.dialog_id ?? ''}").close()} />
    </div>
</at-dialog>
<at-button label="Open Dialog" onclick={document.querySelector("#${args.dialog_id ?? ''}").showModal()} />
`;
const ExternalTriggerTemplate = (args) => `
<at-button data-id="${args.trigger_id}" label="${args.trigger_label || 'Open Dialog'}" type="primary"></at-button>
<at-dialog dialog_id="${args.dialog_id}" trigger_id="${args.trigger_id}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <at-header header_title="External Trigger Dialog" icon="preview"></at-header>
        <p>This dialog was opened using an external trigger element!</p>
    </div>
</at-dialog>
`;
const TableRowExampleTemplate = () => `
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">User</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button data-id="user-action-1" label="View Details" type="primary" size="sm"></at-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button data-id="user-action-2" label="View Details" type="primary" size="sm"></at-button>
            </td>
        </tr>
    </tbody>
</table>

<at-dialog dialog_id="dialog-1" trigger_id="user-action-1">
    <div style="padding: 2rem;">
        <h3>John Doe Details</h3>
        <p>User ID: user-1</p>
        <p>Email: john.doe@example.com</p>
    </div>
</at-dialog>

<at-dialog dialog_id="dialog-2" trigger_id="user-action-2">
    <div style="padding: 2rem;">
        <h3>Jane Smith Details</h3>
        <p>User ID: user-2</p>
        <p>Email: jane.smith@example.com</p>
    </div>
</at-dialog>
`;
export default {
    title: 'Components/Dialog',
};
export const Default = Template.bind({});
Default.args = {
    dialog_id: 'dialog',
};
export const ExternalTrigger = ExternalTriggerTemplate.bind({});
ExternalTrigger.args = {
    dialog_id: 'external-dialog',
    trigger_id: 'external-trigger',
    trigger_label: 'Open Dialog',
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
