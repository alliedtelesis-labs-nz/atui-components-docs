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
        return (h(Host, { key: '655bac43b7c5f8c5849d3beed8582fad51d5cc27', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, this.icon && (h("span", { key: 'ace1ad278ddc487150a286691ce7b3a6369a3b4f', "data-name": "menu-item-icon", class: "material-icons text-icon-lg flex items-center justify-center" }, this.icon)), this.label && (h("span", { key: '8001104961f5e2e835b79cd51b10d86b637a128e', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'df41844667fb0782c4534c52f16cc467b1055121' })));
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
//# sourceMappingURL=p-BunMLKfG.js.map

//# sourceMappingURL=p-BunMLKfG.js.map