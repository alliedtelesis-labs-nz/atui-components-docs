import { r as registerInstance, c as createEvent, h, H as Host } from './index-DTCxn2cp.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variantsConfig = {
    variants: {
        disabled: {
            true: 'pointer-events-none opacity-30 grayscale-[1]',
            false: null,
        },
        active: {
            true: 'text-active-accent bg-active-accent/10',
            false: 'hover:bg-surface-1',
        },
    },
};
const AtMenuitemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active = false;
    /**
     * Disables user interaction with the menu-item and updates visual style to appear inactive
     */
    disabled = false;
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    render() {
        // at-menu moves focus onto the first item when it opens, so the focus
        // background must only paint for keyboard focus or a mouse-opened menu
        // looks like its first item is hovered.
        const getClassname = classlist('hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 has-[:focus-visible]:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item py-4 px-8 text-left transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (h(Host, { key: '3427582b35b0aad58f02328d7f41e07f2ff15717', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, h("div", { key: '116f19f06a003eb939d1607840f56a83d339df01', class: "flex min-w-0 flex-1" }, h("slot", { key: 'af38d7f76639862d575635a0e4c35bf16fb729b0', name: "icon", "data-name": "menu-item-icon" }), this.label && (h("span", { key: '5e43adb67896dda4c23947431db859d06f62e3bf', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: '181f2ecd5c1b7e0e3e44ee0c97906cc1be4ef8c8' })), h("slot", { key: '1cd4647e21288619b0e5f29580ed25a1ae28b0b7', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

export { AtMenuitemComponent as at_menu_item };
