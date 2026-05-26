export default {
    title: 'Components/Control Group',
    argTypes: {
        direction: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' },
        },
    },
};
// ─── Buttons ────────────────────────────────────────────────────────────────
export const ButtonsHorizontal = {
    render: () => `
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">
        <at-icon name="dashboard"></at-icon>
    </at-button>
    <at-button type="secondaryOutline">Text</at-button>
    <at-button type="secondaryOutline">Right</at-button>
</at-control-group>`,
};
export const ButtonsVertical = {
    render: () => `
<at-control-group direction="vertical">
    <at-button type="secondaryOutline">
        <at-icon name="dashboard"></at-icon>
    </at-button>
    <at-button type="secondaryOutline">Text</at-button>
    <at-button type="secondaryOutline">Bottom</at-button>
</at-control-group>`,
};
// ─── Input + Button ─────────────────────────────────────────────────────────
export const InputLeading = {
    render: () => `
<at-control-group direction="horizontal">
    <at-input placeholder="Search..."></at-input>
    <at-button type="secondaryOutline">Search</at-button>
</at-control-group>`,
};
export const InputTrailing = {
    render: () => `
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-input placeholder="Search..."></at-input>
</at-control-group>`,
};
export const ButtonInputButton = {
    render: () => `
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-input placeholder="Search..."></at-input>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>`,
};
// ─── Select ─────────────────────────────────────────────────────────────────
export const SelectWithButton = {
    render: () => `
<at-control-group direction="horizontal">
    <at-select placeholder="Choose..."></at-select>
    <at-button type="secondaryOutline">Go</at-button>
</at-control-group>`,
};
export const MultiSelectWithButton = {
    render: () => `
<at-control-group direction="horizontal">
    <at-multi-select placeholder="Choose..."></at-multi-select>
    <at-button type="secondaryOutline">Go</at-button>
</at-control-group>`,
};
// ─── Search ─────────────────────────────────────────────────────────────────
export const SearchWithButton = {
    render: () => `
<at-control-group direction="horizontal">
    <at-search placeholder="Search..."></at-search>
    <at-button type="secondaryOutline">Filter</at-button>
</at-control-group>`,
};
// ─── Date / Time ─────────────────────────────────────────────────────────────
export const DateWithButton = {
    render: () => `
<at-control-group direction="horizontal">
    <at-input-date></at-input-date>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>`,
};
export const TimeWithButton = {
    render: () => `
<at-control-group direction="horizontal">
    <at-input-time></at-input-time>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>`,
};
export const DateAndTime = {
    render: () => `
<at-control-group direction="horizontal">
    <at-input-date></at-input-date>
    <at-input-time></at-input-time>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>`,
};
// ─── Menu ────────────────────────────────────────────────────────────────────
export const MenuTrailing = {
    render: () => `
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
</at-control-group>`,
};
export const MenuLeading = {
    render: () => `
<at-control-group direction="horizontal">
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>`,
};
export const ButtonMenuButton = {
    render: () => `
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>`,
};
export const VerticalWithMenu = {
    render: () => `
<div style="display: flex; gap: 24px;">
    <at-control-group direction="vertical">
        <at-button type="secondaryOutline">Text</at-button>
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
    </at-control-group>

    <at-control-group direction="vertical">
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
        <at-button type="secondaryOutline">Text</at-button>
    </at-control-group>

    <at-control-group direction="vertical">
        <at-button type="secondaryOutline">Text</at-button>
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
        <at-button type="secondaryOutline">Text</at-button>
    </at-control-group>
</div>`,
};
