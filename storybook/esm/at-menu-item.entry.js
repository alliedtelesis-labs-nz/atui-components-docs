import { r as registerInstance, c as createEvent, h, H as Host } from './index-DgqokAJi.js';
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
        return (h(Host, { key: '5c673ea14ee309be3afb22bbd86153ec0f0a0ad5', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, h("div", { key: '3a1ab92c499b85370c4790858dda506dc9475da6', class: "flex min-w-0 flex-1" }, h("slot", { key: 'a66ddf7529cb0e8d50c5f4871ebcda82029b0368', name: "icon", "data-name": "menu-item-icon" }), this.label && (h("span", { key: 'b5fef139aa0049e516a7b68eaf936f52d9af5a11', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'cf0d24fda6ae62f8f45bdc92357d067a5ecc2251' })), h("slot", { key: 'be688dda65a0684b9f86352de9a7f0bbd37b029a', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

export { AtMenuitemComponent as at_menu_item };
