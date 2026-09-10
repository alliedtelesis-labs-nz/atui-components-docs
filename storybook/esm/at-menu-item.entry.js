import { r as registerInstance, c as createEvent, h, H as Host } from './index-46ti_ijN.js';
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
        return (h(Host, { key: 'c868bfeaef2c6a36f47da9f805603f04b673f3f2', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, h("div", { key: '2745aad0c59adcc5a6b38868dbe8db938db90509', class: "flex min-w-0 flex-1" }, h("slot", { key: '090ed9d1b4f6e9fe2013ea7a32d82ac72ea1d2e4', name: "icon", "data-name": "menu-item-icon" }), this.label && (h("span", { key: '5ae536968e7556d3ae384b92ebe0c2c73c1fa27d', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: '8bc4a61b50ad18dfc9d19a5c96465563067dcaf1' })), h("slot", { key: 'ae0c69f1ccb0fddfadaebdc13e0ff0acb2589ced', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

export { AtMenuitemComponent as at_menu_item };
