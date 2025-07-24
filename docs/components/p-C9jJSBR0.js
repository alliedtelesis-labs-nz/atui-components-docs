import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$1 } from './p-BNyf5aaw.js';

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
        return (h(Host, { key: 'dc87ecf21981d27adac26dabc4b3992e947bd788', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, h("div", { key: '949719cce7b18bd193de4754aff323875605a9d6', class: "flex items-center gap-8 truncate" }, h("slot", { key: 'cce7910563e328a7651855cd0dac29d93e850ed5', name: "menu-item-label" }), this.badge && (h("atui-badge", { key: '7ea81da181e64620db185e49bbc4bcb1496c5ee0', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute left-[22px] top-[-8px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !font-medium !leading-[10px]", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '93a5b0a38cbc36727ffa8ecd851eb89bd3601b72', class: "material-icons z-10 flex items-center justify-center text-icon-xl" }, this.icon)), this.label && (h("span", { key: '621803611958d66b5cfb91a50edaaec240f91d96', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: 'f13a5fcc1c3009bf9b5d012323fa31a296236e96', name: "menu-item-actions" }), h("div", { key: 'b878a51bb9eb716b1f01a0555c25550d7601b002', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
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
//# sourceMappingURL=p-C9jJSBR0.js.map

//# sourceMappingURL=p-C9jJSBR0.js.map