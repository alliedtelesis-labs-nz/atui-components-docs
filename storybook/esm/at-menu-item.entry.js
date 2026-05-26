import { r as registerInstance, c as createEvent, h, H as Host } from './index-BAAX2Der.js';
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
        const getClassname = classlist('text-body hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item pl-8 py-4 px-4 text-left font-normal leading-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'b49af1465cfbb3295b6b6566b6948feed50b541b', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, h("div", { key: '8da868cdd3a035d89d1e83696aaa7ab51ad937fc', class: "flex flex-grow" }, h("slot", { key: 'a51c06d03e864be26ce5fec11a03e41ac02e8f2b', name: "icon", "data-name": "menu-item-icon" }), this.label && (h("span", { key: 'ca5bc40df32ac590ac3433b8e44fb28ced87070f', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'ce5048ec30618644225fba30ddcbb0a68f04bc47' })), h("slot", { key: '3b539804ec535885a8bd76aa5031621cccf5cc04', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

export { AtMenuitemComponent as at_menu_item };
