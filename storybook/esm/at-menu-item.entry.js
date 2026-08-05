import { r as registerInstance, c as createEvent, h, H as Host } from './index-DNWYfDmW.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variantsConfig = {
    variants: {
        disabled: {
            true: 'pointer-events-none opacity-30 grayscale-[1]',
            false: null,
        },
        active: {
            true: 'text-button-primary-foreground fill-button-primary-foreground bg-button-primary-background/10',
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
        const getClassname = classlist('hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item py-4 px-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'c74a9bf0d3f91790e4234fa5e267bbb86491138d', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, h("div", { key: '3fe205c8bdac68f9c77b2afabba0cf8e00b2f8a2', class: "flex min-w-0 flex-1" }, h("slot", { key: '945f1b16ecbd2c8fbce7fd56147aadb0e392f54e', name: "icon", "data-name": "menu-item-icon" }), this.label && (h("span", { key: '8933007f16e4bc1b8514e17c1ec4d8d57b587cb5', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: '0eb03c29382ffdacb7f023e05f475a65da51f9b3' })), h("slot", { key: '0dee3657391356b9caa326d508abb226a5137f04', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

export { AtMenuitemComponent as at_menu_item };
