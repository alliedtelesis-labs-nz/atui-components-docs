import { p as proxyCustomElement, H, h, c as Host } from './p-CIJrXZgf.js';
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
        return (h(Host, { key: '8c308b9f9dc0eb3d5c008ecf2628abf90baa7e64', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, this.icon && (h("span", { key: '6c6fbc12b73970ca7de1ab2e88f49371429348bd', "data-name": "menu-item-icon", class: "material-icons flex items-center justify-center text-icon-lg" }, this.icon)), this.label && (h("span", { key: '008e6a268f32cc845cd86a274447804a0d8f73a5', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: '99d921d8b05d4ce55e10155e341ddaee8110375c' })));
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
//# sourceMappingURL=p-CPFfD5ls.js.map

//# sourceMappingURL=p-CPFfD5ls.js.map