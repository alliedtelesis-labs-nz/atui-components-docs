import { p as proxyCustomElement, H, h, c as Host } from './p-B9UDFE-Z.js';
import { d as defineCustomElement$1 } from './p-BmhjLSrf.js';

const atSidebarMenuitemCss = ".sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:8px}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;pointer-events:none;padding:2px 2px;font-size:10px}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .icon.sc-at-sidebar-menuitem{font-family:\"Material Icons\";font-style:normal;display:flex;align-items:center;justify-content:center;line-height:1;font-size:var(--token-font-size-icon-lg) !important;z-index:10}.sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);border-radius:var(--token-border-radius-md);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h:hover [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.1}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:var(--token-state-active-foreground)}.depth-0.sc-at-sidebar-menuitem-h{font-weight:var(--token-font-weight-light)}.depth-1.sc-at-sidebar-menuitem-h{padding-left:36px;font-weight:var(--token-font-weight-light)}.depth-2.sc-at-sidebar-menuitem-h{padding-left:50px;font-weight:var(--token-font-weight-light)}.depth-3.sc-at-sidebar-menuitem-h{padding-left:64px;font-weight:var(--token-font-weight-light)}.submenu-hover-content.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem.sc-at-sidebar-menuitem{color:var(--token-sidebar-foreground);font-weight:var(--token-font-weight-normal)}";

const AtSidebarMenuitemComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarMenuitemComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
     * Defines menuitem styling for font weight and indent 0-3  Default 0
     */
    depth;
    /**
     * Will change style to indicate menuitem is active when set
     */
    is_active;
    get el() { return this; }
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    render() {
        return (h(Host, { key: '7dac43336ec92609066b9f6c40c2e5dc94a62f08', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, class: this.depth ? `depth-${this.depth}` : '', onKeyDown: this.handleKeyDown }, h("div", { key: '9aa8599e918ad44a286ef4ced7ca8d628f47c306', class: "content", "data-name": "content" }, h("slot", { key: '3b5ee34f5a789069a1f1b614029699f0071e2a57', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: 'c6c4382f0348e98b8c79e35cdf517d7364b13137', class: "badge", "data-name": "badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && h("i", { key: 'f7e8826b99a3c9fc826ba5903a4125d918a80e2a', class: "icon" }, this.icon), this.label && (h("span", { key: '29caf7781ebb7599485085e39c864325da2e5ac5', "data-name": "label", class: "label" }, this.label))), h("slot", { key: 'c72b6cef60da8bd184a0c010e0270a0df387e0d8', name: "actions" }), h("div", { key: 'af25ae5e0402bfecf72d0b34755e6a56323e2c14', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
    static get style() { return atSidebarMenuitemCss; }
}, [262, "at-sidebar-menuitem", {
        "label": [1],
        "icon": [1],
        "badge": [1],
        "depth": [2],
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
//# sourceMappingURL=p-DczwoWg8.js.map

//# sourceMappingURL=p-DczwoWg8.js.map