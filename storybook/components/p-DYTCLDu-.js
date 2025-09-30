import { p as proxyCustomElement, H, h, c as Host } from './p-BRRmBK9P.js';
import { c as classlist } from './p-DowIpD9s.js';

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
        return (h(Host, { key: '6498a11dfb918dae21cf7829d5ce2587c51a4b67', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, this.icon && (h("span", { key: '30a102dd2fe594d2d1deae1bac0733ca2983cab5', "data-name": "menu-item-icon", class: "material-icons text-icon-lg flex items-center justify-center" }, this.icon)), this.label && (h("span", { key: '81a6e678c2dbd36664cd76343e85fcd2ead1ecd1', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: '6ac0e54cef6927492f5decf6110f0de90e099d6d' })));
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
//# sourceMappingURL=p-DYTCLDu-.js.map

//# sourceMappingURL=p-DYTCLDu-.js.map