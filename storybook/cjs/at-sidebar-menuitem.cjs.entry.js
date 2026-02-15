'use strict';

var index = require('./index-CzDB71Wy.js');

const atSidebarMenuitemCss = () => `.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:8px}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;pointer-events:none;padding:2px 2px;font-size:10px}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .icon.sc-at-sidebar-menuitem{font-family:"Material Icons";font-style:normal;display:flex;align-items:center;justify-content:center;line-height:1;font-size:22px;z-index:10;min-width:24px}.sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);border-radius:var(--token-border-radius-md);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h:hover [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.1}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:var(--token-state-active-foreground)}`;

const AtSidebarMenuitemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
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
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: 'd967dcac9a650042d2826d70b9e8eb3b03b54b57', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: '242c544656e00140721cbb7bd88a658fa39123df', class: "content", "data-name": "content" }, index.h("slot", { key: '17f5e005b5ad03b578a2b5fe71d8636efff65fb4', name: "label", "data-name": "label" }), this.badge && (index.h("at-badge", { key: 'f0aa4c0044b8c2881792ca744e35eac2adc6ccf8', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && index.h("i", { key: '15173fddbd988a5dfb4a692805978729271ce4f7', class: "icon" }, this.icon), this.label && (index.h("span", { key: '8d5d6c297dbd811441224097fbafe0a14b919cbf', "data-name": "sidebar-menu-item-label", class: "label" }, this.label))), index.h("slot", { key: '50ee629e5f62b58a6e3f7ff55c8219f1368a2dfe', name: "sidebar-menu-item-actions" }), index.h("div", { key: 'e874e1a92cb137de29c4440abd053a87e7381724', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

exports.at_sidebar_menuitem = AtSidebarMenuitemComponent;
