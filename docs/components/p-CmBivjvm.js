import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$1 } from './p-DuzY8Lpl.js';

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
            false: 'group-hover:bg-surface-4/10 group-active:bg-surface-4/20',
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
        return (h(Host, { key: 'dc87ecf21981d27adac26dabc4b3992e947bd788', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, h("div", { key: '949719cce7b18bd193de4754aff323875605a9d6', class: "flex items-center gap-8 truncate" }, h("slot", { key: 'cce7910563e328a7651855cd0dac29d93e850ed5', name: "menu-item-label" }), this.badge && (h("atui-badge", { key: 'd23f9b040f5c75b53366bf60d4be4031cd427be5', "data-name": "menu-badge", role: "presentation", class: "absolute left-[22px] top-[-8px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '0dae43873d34ed2e95540d0fa3e34c40aa70310a', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (h("span", { key: '1393ca53a35dac8aa6ab38545d93395bbda9a4ba', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: 'faf6d54c00a3997c4cab6eeb32c1270ad89d6a3d', name: "menu-item-actions" }), h("div", { key: '87ea20a8e99c182b02ad6b6c6b8217c6095df82b', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
}, [4, "atui-sidebar-menuitem", {
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
//# sourceMappingURL=p-CmBivjvm.js.map

//# sourceMappingURL=p-CmBivjvm.js.map