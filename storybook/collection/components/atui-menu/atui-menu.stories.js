const Template = (args) => `
<atui-auto-open-menu
    offset_x=${args.offset_x}
    offset_y=${args.offset_y}
    origin_x="${args.origin_x}"
    origin_y="${args.origin_y}"
    width="${args.width}"
>
    <div slot="menu-title">
        <div
            style="height:90px; width:100%; background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Bar</h1>
        </div>
    </div>
    <div>
        <div
            style="height:200px;width:100%;background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Dropdown</h1>
        </div>
    </div>
</atui-auto-open-menu>`;
const SlotTriggerTemplate = (args) => `
<atui-menu
    position="${args.position}"
    width="${args.width}"
>
    <atui-button slot="menu-trigger" label="${args.triggerLabel}" type="secondary"></atui-button>
    <div>
        <atui-menu-item label="View Details"></atui-menu-item>
        <atui-menu-item label="Edit Item"></atui-menu-item>
        <atui-menu-item label="Archive"></atui-menu-item>
        <atui-menu-item label="Delete" disabled></atui-menu-item>
    </div>
</atui-menu>`;
const ExternalTriggerTemplate = (args) => `
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
    <div style="display: flex; gap: 16px; align-items: center;">
        <atui-button data-id="${args.triggerId}" label="${args.triggerLabel}" type="secondary"></atui-button>
        <atui-button data-id="${args.triggerId}" label="${args.triggerLabel} (Duplicate)" type="secondary"></atui-button>
        <i class="material-icons" data-id="${args.triggerId}">more_vert</i>
    </div>
    <atui-menu
        trigger_id="${args.triggerId}"
        position="${args.position}"
        width="${args.width}"
    >
        <div>
            <atui-menu-item label="View Details"></atui-menu-item>
            <atui-menu-item label="Edit Item"></atui-menu-item>
            <atui-menu-item label="Archive"></atui-menu-item>
            <atui-menu-item label="Delete" disabled></atui-menu-item>
        </div>
    </atui-menu>
</div>`;
const TableExampleTemplate = () => `
<div style="padding: 16px;">
    <h3 style="margin-bottom: 16px;">Table Row Example - Use data-id for multiple triggers</h3>
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Status</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 1</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Active</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <atui-button data-id="action-menu" icon="more_vert" type="secondary" size="sm"></atui-button>
                    <atui-menu trigger_id="action-menu" position="bottom" width="140px">
                        <div>
                            <atui-menu-item label="View Item 1"></atui-menu-item>
                            <atui-menu-item label="Edit Item 1"></atui-menu-item>
                            <atui-menu-item label="Delete Item 1"></atui-menu-item>
                        </div>
                    </atui-menu>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 2</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Pending</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <atui-button data-id="action-menu" icon="more_vert" type="secondary" size="sm"></atui-button>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 3</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Inactive</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <i class="material-icons" data-id="action-menu">more_vert</i>
                </td>
            </tr>
        </tbody>
    </table>
</div>`;
export default {
    title: 'Components/Menu',
    argTypes: {
        position: {
            options: ['bottom', 'left', 'top', 'right'],
            control: { type: 'radio' },
        },
        width: {
            control: { type: 'text' },
        },
        triggerLabel: {
            control: { type: 'text' },
        },
        triggerId: {
            control: { type: 'text' },
        },
    },
};
export const AutoOpenMenu = Template.bind({});
AutoOpenMenu.args = {
    offset_x: 0,
    offset_y: 0,
    origin_x: 'start',
    origin_y: 'top',
    width: '280px',
};
export const SlotTrigger = SlotTriggerTemplate.bind({});
SlotTrigger.args = {
    position: 'bottom',
    width: 'fit-content',
    triggerLabel: 'Open Menu',
};
export const ExternalTrigger = ExternalTriggerTemplate.bind({});
ExternalTrigger.args = {
    position: 'bottom',
    width: 'fit-content',
    triggerLabel: 'External Trigger',
    triggerId: 'external-menu-trigger',
};
export const TableRowExample = TableExampleTemplate.bind({});
TableRowExample.args = {};
//# sourceMappingURL=atui-menu.stories.js.map
