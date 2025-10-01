'use strict';

var index = require('./index-d67_TXqR.js');

const atSidebarMenuitemCss = "at-sidebar-menuitem .at-sidebar-menuitem__content,at-sidebar-menuitem .at-sidebar-menuitem__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}at-sidebar-menuitem{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}at-sidebar-menuitem .at-sidebar-menuitem__content{display:flex;align-items:center;gap:8px}at-sidebar-menuitem .at-sidebar-menuitem__badge{position:absolute;top:-8px;left:22px;z-index:20;padding:4px 3px;pointer-events:none}at-sidebar-menuitem .at-sidebar-menuitem__label{z-index:10;font-weight:var(--token-font-weight-med)}at-sidebar-menuitem i.material-icons{font-style:normal;display:flex;align-items:center;justify-content:center;font-size:var(--token-font-size-icon-xl);z-index:10}at-sidebar-menuitem div[data-name=focus-indicator]{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}at-sidebar-menuitem:hover div[data-name=focus-indicator]{opacity:0.1}at-sidebar-menuitem:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}at-sidebar-menuitem[data-state=active]{background-color:var(--token-state-active-foreground)}at-sidebar-menuitem[data-state=active] div[data-name=focus-indicator]{opacity:0.1}at-sidebar-menuitem.depth-0{font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-1{padding-left:36px;font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-2{padding-left:50px;font-weight:var(--token-font-weight-light)}at-sidebar-menuitem.depth-3{padding-left:64px;font-weight:var(--token-font-weight-light)}[data-name=accordion-item-content] at-sidebar-menuitem span[data-name=sidebar-menu-item-label],at-menu at-sidebar-menuitem span[data-name=sidebar-menu-item-label]{font-weight:400}";

const AtSidebarMenuitemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    get el() { return index.getElement(this); }
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    render() {
        return (index.h(index.Host, { key: '09ee9ff5f6c4255224d78ba0a72c1ef6201ce4cb', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, class: this.depth ? `depth-${this.depth}` : '', onKeyDown: this.handleKeyDown }, index.h("div", { key: '02a67551554722151bffab8721505f46c2d0d67d', class: "at-sidebar-menuitem__content" }, index.h("slot", { key: '8209d09119e5fdbae1b63655bdabe598200f5be8', name: "menu-item-label" }), this.badge && (index.h("at-badge", { key: '6a278e5bac4d1a278193a837be136ebc06218903', "data-name": "menu-badge", role: "presentation", class: "at-sidebar-menuitem__badge", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (index.h("span", { key: 'fff0d8e91473941a473495edff4002a806385dbf', class: "material-icons" }, this.icon)), this.label && (index.h("span", { key: 'f8f08f2e8e818fd1103f42e2098fbd223a8a3cc0', part: "label", "data-name": "sidebar-menu-item-label", class: "at-sidebar-menuitem__label" }, this.label))), index.h("slot", { key: '2e6da4ce658243bb9b18ecfd9df921bb5e8c5159', name: "menu-item-actions" }), index.h("div", { key: '6929abc4861c3ae37abacbfb3ed20431f9e9b593', "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss;

exports.at_sidebar_menuitem = AtSidebarMenuitemComponent;
//# sourceMappingURL=at-sidebar-menuitem.entry.cjs.js.map
