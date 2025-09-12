import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

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
const AtuiMenuitemComponent = /*@__PURE__*/ proxyCustomElement(class AtuiMenuitemComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Will change the styling of the menuitem when set
         */
        this.is_active = false;
        /**
         * Disables user interaction with the menu-item and updates visual style to appear inactive
         */
        this.disabled = false;
    }
    render() {
        const getClassname = classlist('text-body focus-visible:ring-active-foreground/40 relative flex w-full cursor-pointer items-center gap-8 truncate overflow-hidden rounded-md p-8 text-left font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (h(Host, { key: '5beff427493f782245a2ce8b699b8c74b5c7b98d', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, this.icon && (h("span", { key: '9dc54f9996e25f78a84fea751ab8886a7637e2c8', "data-name": "menu-item-icon", class: "material-icons text-icon-lg flex items-center justify-center" }, this.icon)), this.label && (h("span", { key: 'fd5e8636bb4b757340c614bdb70db5f432e18c8b', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: '4a462c049c55e85aba4ac37a05895e4cb7daeb3f' })));
    }
}, [260, "atui-menu-item", {
        "label": [1],
        "icon": [1],
        "is_active": [4],
        "disabled": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-menu-item"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-menu-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiMenuitemComponent);
            }
            break;
    } });
}

export { AtuiMenuitemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-w6M_F7mA.js.map

//# sourceMappingURL=p-w6M_F7mA.js.map