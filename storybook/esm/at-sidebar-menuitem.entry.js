import { r as registerInstance, a as getElement, h, H as Host } from './index-Cod2-jIY.js';

const atSidebarMenuitemCss = "at-sidebar-menuitem .at-sidebar-menuitem__content,at-sidebar-menuitem .at-sidebar-menuitem__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}at-sidebar-menuitem{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}at-sidebar-menuitem .at-sidebar-menuitem__content{display:flex;align-items:center;gap:8px}at-sidebar-menuitem .at-sidebar-menuitem__badge{position:absolute;top:-8px;left:22px;z-index:20;padding:4px 3px;pointer-events:none}at-sidebar-menuitem .at-sidebar-menuitem__label{z-index:10;font-weight:var(--token-font-weight-med)}at-sidebar-menuitem i.material-icons{font-style:normal;display:flex;align-items:center;justify-content:center;font-size:var(--token-font-size-icon-xl);z-index:10}at-sidebar-menuitem div[data-name=focus-indicator]{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}at-sidebar-menuitem:hover div[data-name=focus-indicator]{opacity:0.1}at-sidebar-menuitem:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}at-sidebar-menuitem[data-state=active]{background-color:var(--token-state-active-foreground)}at-sidebar-menuitem[data-state=active] div[data-name=focus-indicator]{opacity:0.1}at-sidebar-menuitem.depth-0{font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-1{padding-left:36px;font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-2{padding-left:50px;font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-3{padding-left:64px;font-weight:var(--token-font-weight-light)}[data-name=accordion-item-content] at-sidebar-menuitem span[data-name=sidebar-menu-item-label],at-menu at-sidebar-menuitem span[data-name=sidebar-menu-item-label]{font-weight:400}";

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
        return (h(Host, { key: 'c19b383e10dfc520e0dccdac283a41489820a350', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, class: this.depth ? `depth-${this.depth}` : '', onKeyDown: this.handleKeyDown }, h("div", { key: '4190dad43a75e01467a210f36f27c58fce4d7e73', class: "at-sidebar-menuitem__content" }, h("slot", { key: 'e195c5bd4e43544ef5610bbb2a440898c184311c', name: "menu-item-label" }), this.badge && (h("at-badge", { key: 'e8e07dcd24b355b19a1d01bd4bd34f2d0427ddec', "data-name": "menu-badge", role: "presentation", class: "at-sidebar-menuitem__badge", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '5f6575395d88251d49f078736449a72f919b0fa0', class: "material-icons" }, this.icon)), this.label && (h("span", { key: '2dd5ab73ce39d94c2d51aa2bf5af3b6cf4063c03', part: "label", "data-name": "sidebar-menu-item-label", class: "at-sidebar-menuitem__label" }, this.label))), h("slot", { key: '58b823af32a890592d6db2c541101ced7b722416', name: "menu-item-actions" }), h("div", { key: 'c86c8fdb8e65a700a380b0aba49832d7615c9b3f', "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss;

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
//# sourceMappingURL=at-sidebar-menuitem.entry.js.map
