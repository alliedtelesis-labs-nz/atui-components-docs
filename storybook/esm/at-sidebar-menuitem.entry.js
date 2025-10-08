import { r as registerInstance, g as getElement, h, H as Host } from './index-CVZ0O9-b.js';

const atSidebarMenuitemCss = "at-sidebar-menuitem .content,at-sidebar-menuitem .label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}at-sidebar-menuitem{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}at-sidebar-menuitem .content{display:flex;align-items:center;flex-grow:1;gap:8px}at-sidebar-menuitem .badge{position:absolute;top:-8px;left:22px;z-index:20;pointer-events:none;padding:2px 2px;font-size:10px}at-sidebar-menuitem .label{z-index:10;font-weight:var(--token-font-weight-med)}at-sidebar-menuitem i.material-icons{font-family:\"Material Icons\";font-style:normal;display:flex;align-items:center;justify-content:center;font-size:var(--token-font-size-icon-xl);z-index:10}at-sidebar-menuitem .focus-indicator{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}at-sidebar-menuitem:hover .focus-indicator{opacity:0.1}at-sidebar-menuitem:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}at-sidebar-menuitem[data-state=active]{background-color:var(--token-state-active-foreground)}at-sidebar-menuitem[data-state=active] div[data-name=focus-indicator]{opacity:0.1}at-sidebar-menuitem.depth-0{font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-1{padding-left:36px;font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-2{padding-left:50px;font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-3{padding-left:64px;font-weight:var(--token-font-weight-light)}[data-name=accordion-item-content] at-sidebar-menuitem .label,at-menu at-sidebar-menuitem .label{font-weight:400}";

const AtSidebarMenuitemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    render() {
        return (h(Host, { key: '7a9a61fcc213598023ab55ecdac4ee1b14bb004e', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, class: this.depth ? `depth-${this.depth}` : '', onKeyDown: this.handleKeyDown }, h("div", { key: '902808cad59ab673434c5f07d86ab2bf97b2518e', class: "content", "data-name": "content" }, h("slot", { key: 'eb1d711faeb6f8b72760fff1a7bd905e1a23db64', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: 'ace8ff3863d8d3bad89c79d670f98074edc8ac67', class: "badge", "data-name": "badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: 'e86769a3de2ee4c1b863836e8133939df38f6dea', class: "material-icons" }, this.icon)), this.label && (h("span", { key: '0ec77ad211130b42c59e41ce83b32b7b8a55606f', "data-name": "label", class: "label" }, this.label))), h("slot", { key: 'd1a8cae22312a119a1c4158c58ee5500fe1d50c4', name: "actions" }), h("div", { key: '9ad8214ff9e9461e3683f5f91a65765439e334df', class: "focus-visible:", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss;

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
//# sourceMappingURL=at-sidebar-menuitem.entry.js.map
