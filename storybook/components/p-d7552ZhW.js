import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';
import { c as classlist } from './p-DowIpD9s.js';
import { d as defineCustomElement$1 } from './p-B7BACRtj.js';

const atSidebarMenuitemCss = "[data-name=accordion-item-content] at-sidebar-menuitem span[data-name=sidebar-menu-item-label],at-menu at-sidebar-menuitem span[data-name=sidebar-menu-item-label]{font-weight:400}";

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'text-sidebar-foreground',
        },
    },
};
const focusIndicatorVariantsConfig = {
    variants: {
        active: {
            true: 'group-hover:bg-blue-900/30 ',
            false: 'group-hover:bg-slate-400/10',
        },
    },
};
const AtSidebarMenuitemComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarMenuitemComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.handleKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.el.click();
            }
        };
    }
    render() {
        const getClassname = classlist('group text-button focus-visible:ring-active-foreground/30 font-medium relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
        });
        const getFocusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig);
        const focusIndicatorClassname = getFocusIndicatorClassname({
            active: this.is_active,
        });
        return (h(Host, { key: 'f946086d344120c2526f44263888f021dab365dd', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname, tabIndex: 0, onKeyDown: this.handleKeyDown }, h("div", { key: '1673a9ea9845d576f0a8b63685ec3f0b7fcb4101', class: "flex items-center gap-8 truncate" }, h("slot", { key: '956ae9e43e9aa8e278b421db61c6982c5c6ba6d5', name: "menu-item-label" }), this.badge && (h("at-badge", { key: '61fe4b6f4ca7ecb0f856222929cd489cb5350c31', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute top-[-8px] left-[22px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !leading-[10px] !font-medium", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '3382992610ef134c22361b99d0cf9878a759fac5', class: "material-icons !text-icon-xl z-10 flex items-center justify-center p-2" }, this.icon)), this.label && (h("span", { key: 'a972a3ddbf37b7ebd0c943fb7d7b7db1062436d2', "data-name": "sidebar-menu-item-label", class: "label z-10 truncate whitespace-nowrap" }, this.label))), h("slot", { key: '6428e8d6d48008398e90e27076172561e55c3f4b', name: "menu-item-actions" }), h("div", { key: '2557231f601a5325de5d58e6c13d16bb76d1df5a', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    get el() { return this; }
    static get style() { return atSidebarMenuitemCss; }
}, [260, "at-sidebar-menuitem", {
        "label": [1],
        "icon": [1],
        "badge": [1],
        "is_active": [1028]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar-menuitem", "at-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar-menuitem":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarMenuitemComponent);
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtSidebarMenuitemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-d7552ZhW.js.map

//# sourceMappingURL=p-d7552ZhW.js.map