import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$1 } from './p-CGN7bmSd.js';

const variants = cva('group relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left text-button transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'text-sidebar-foreground',
        },
    },
});
const focusIndicatorVariants = cva('pointer-events-none absolute left-0 top-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', {
    variants: {
        active: {
            true: 'group-hover:bg-blue-900/30 group-active:bg-blue-900/70',
            false: 'group-active:bg-surface-4/20 group-hover:bg-surface-4/10',
        },
    },
});
const AtuiSidebarMenuitemComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarMenuitemComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        const classname = variants({
            active: this.is_active,
        });
        const focusIndicatorClassname = focusIndicatorVariants({
            active: this.is_active,
        });
        return (h(Host, { key: '3ee6a7b6060ac812b71bc35f1179af5f8f836e07', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, h("div", { key: 'fcba050b6f57b26af6e27321369168fa50000801', class: "flex items-center gap-8 truncate" }, h("slot", { key: 'fe71963752ac0f48f1a5b820fc41ce5e135fe47d', name: "menu-item-label" }), this.badge && (h("atui-badge", { key: 'be89ba6268b8e5211dc13c92c8a8e635b5bb0d02', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute left-[22px] top-[-8px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '1a1e3fe67bab172498ea190032f6f13ba886726e', class: "material-icons z-10 flex items-center justify-center p-2 text-icon-xl" }, this.icon)), this.label && (h("span", { key: '4cdb62b000410645f473ff5aa7277566c556a74d', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: 'd7e5a87f8fc6717482a1120418643d5a061d2124', name: "menu-item-actions" }), h("div", { key: '66f0e9929bea92a370d40c5b47fd52de75e0f733', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
}, [260, "atui-sidebar-menuitem", {
        "label": [1],
        "icon": [1],
        "badge": [1],
        "is_active": [1028]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-sidebar-menuitem", "atui-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-sidebar-menuitem":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidebarMenuitemComponent);
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiSidebarMenuitemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-OoTO0X8T.js.map

//# sourceMappingURL=p-OoTO0X8T.js.map