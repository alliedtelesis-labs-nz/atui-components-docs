import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('relative flex w-full cursor-pointer items-center gap-8 overflow-hidden truncate rounded-md p-8 text-left text-body font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-active-foreground/40', {
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
});
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
        const classname = variants({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'b938e48f97366d29b7e18439a7cb5322b3168011', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, this.icon && (h("span", { key: '11439ae124dcb2c37877eb4214587146a413fd47', "data-name": "menu-item-icon", class: "material-icons flex items-center justify-center text-icon-lg" }, this.icon)), this.label && (h("span", { key: 'f451b278e543cbb442a5117b4955ee8a89d2e9c1', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'b79ff42b4f4f856957224396c99a4245d8bfbcdd' })));
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
//# sourceMappingURL=p-CJ-aC1Eo.js.map

//# sourceMappingURL=p-CJ-aC1Eo.js.map