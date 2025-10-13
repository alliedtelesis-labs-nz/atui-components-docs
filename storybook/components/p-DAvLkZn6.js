import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-BRoK1DxF.js';

const atSidebarMenuitemCss = ".sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:8px}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;pointer-events:none;padding:2px 2px;font-size:10px}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .icon.sc-at-sidebar-menuitem{font-family:\"Material Icons\";font-style:normal;display:flex;align-items:center;justify-content:center;line-height:1;font-size:22px;z-index:10;min-width:24px}.sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);border-radius:var(--token-border-radius-md);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h:hover [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.1}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:var(--token-state-active-foreground)}";

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
        return (h(Host, { key: '2c093d841f54af2d1dead8bb4c9aaa7283341e31', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: this.handleKeyDown }, h("div", { key: '0a9ae877c784e0b7d009718d2bca81c9798ff3df', class: "content", "data-name": "content" }, h("slot", { key: 'ce28dac5e06cc5c1ebdcb3748567ce7d5dc079b2', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: 'c16edce48139bc8b31310d094e86cb43e50f1a7b', class: "badge", "data-name": "badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && h("i", { key: 'af24b33fa4eed02b668e4bb5a27487c1493cce63', class: "icon" }, this.icon), this.label && (h("span", { key: 'a7bec70d45404917a01a2271e44e1c9d15b547c1', "data-name": "label", class: "label" }, this.label))), h("slot", { key: '0c80b90adacadc48ed984537fe419f35d86b6c21', name: "actions" }), h("div", { key: 'c3e5f50d5839713737a51d8a523947f591031d0b', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
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
//# sourceMappingURL=p-DAvLkZn6.js.map

//# sourceMappingURL=p-DAvLkZn6.js.map