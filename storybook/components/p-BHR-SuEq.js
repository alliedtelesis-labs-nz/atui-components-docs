import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-BRoK1DxF.js';

const atSidebarMenuitemCss = ".sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:8px}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;pointer-events:none;padding:2px 2px;font-size:10px}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .icon.sc-at-sidebar-menuitem{font-family:\"Material Icons\";font-style:normal;display:flex;align-items:center;justify-content:center;line-height:1;font-size:22px;z-index:10;min-width:24px}.sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);border-radius:var(--token-border-radius-md);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h:hover [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.1}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:var(--token-state-active-foreground)}";

const AtSidebarMenuitemComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarMenuitemComponent extends H {
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
     * Alert badge for the menu item
     */
    badge;
    /**
     * Will change style to indicate menuitem is active when set
     */
    is_active;
    /**
     * Emits when the menu item is clicked
     */
    atuiClick;
    get el() { return this; }
    handleClick(event) {
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'at-sidebar-menu-item',
        });
    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.atuiClick.emit({
                originalEvent: event,
                componentType: 'at-sidebar-menu-item',
            });
        }
    };
    render() {
        return (h(Host, { key: '02754bdc3a71dfa766a1ab0943731ba5a8e301df', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '2459cd899fe2751f05aa2a425463e3ef25d065e6', class: "content", "data-name": "content" }, h("slot", { key: '2bad9bf9a8d625c320942872ffcc1e4b6c03fc15', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: 'c6ec31823015899a39cc2815c23b4bb4b2899dff', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && h("i", { key: 'e556529857a50e3283e3f5faeafb03cc096a9712', class: "icon" }, this.icon), this.label && (h("span", { key: '70aadcfdc91dab66d85ec8dd2e5fbd5a9adb1e3a', "data-name": "sidebar-menu-item-label", class: "label" }, this.label))), h("slot", { key: '59b0461b7c43080c2f286e7f1e3b6e4e2391bab8', name: "sidebar-menu-item-actions" }), h("div", { key: 'e0d01b60948bd3931388f8d4888ba3afff4c6bb6', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
    static get style() { return atSidebarMenuitemCss; }
}, [262, "at-sidebar-menuitem", {
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
//# sourceMappingURL=p-BHR-SuEq.js.map

//# sourceMappingURL=p-BHR-SuEq.js.map