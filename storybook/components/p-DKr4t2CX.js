import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

const variantsConfig = {
    variants: {
        disabled: {
            true: 'pointer-events-none opacity-30 grayscale-[1]',
            false: null,
        },
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'hover:bg-surface-1',
        },
    },
};
const AtMenuitemComponent = /*@__PURE__*/ proxyCustomElement(class AtMenuitemComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Icon to be displayed with the label
     */
    icon;
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
        const getClassname = classlist('text-body focus-visible:ring-active-foreground/40 relative flex w-full cursor-pointer items-center gap-8 truncate overflow-hidden rounded-md p-8 text-left font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (h(Host, { key: '4dabd92d91ec810ca6a68bd7e168632fb62bc498', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, this.icon && (h("span", { key: '883ba299835d3e26889fafa86a80df150737c834', "data-name": "menu-item-icon", class: "material-icons text-icon-lg flex items-center justify-center" }, this.icon)), this.label && (h("span", { key: '3fd56c332e24b79f74f17040d47c04461dc1c3f6', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: '4085b06429cef56fee2904d57273456b5951ed66' })));
    }
}, [260, "at-menu-item", {
        "label": [1],
        "icon": [1],
        "is_active": [4],
        "disabled": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-menu-item"];
    components.forEach(tagName => { switch (tagName) {
        case "at-menu-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtMenuitemComponent);
            }
            break;
    } });
}

export { AtMenuitemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-DKr4t2CX.js.map

//# sourceMappingURL=p-DKr4t2CX.js.map