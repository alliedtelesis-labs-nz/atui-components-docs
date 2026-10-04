import { r as registerInstance, c as createEvent, h, H as Host } from './index-C56p-u4D.js';
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
        return (h(Host, { key: 'befc8a1cb4b7216358c43fd4399f53c3d5c3a324', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, h("div", { key: '42d30b49ee69fcd6bcdfb80a4349a82d985e5651', class: "flex min-w-0 flex-1" }, h("slot", { key: '87ef88fdd21b0375c2f31655e4ce0b7602051cdb', name: "icon", "data-name": "menu-item-icon" }), this.label && (h("span", { key: 'f69d606fb6df7e637df3a34a1c5a590a22843c6f', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'bcfc74f3205770660d6af3d360a14b4cceafe7ae' })), h("slot", { key: 'b2cba70fc784c37f1aeca76f382ecd24a9ddfefd', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

export { AtMenuitemComponent as at_menu_item };
