'use strict';

var index = require('./index--r5sCsiV.js');

const atSidebarMenuitemCss = () => `.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border-radius:var(--token-border-radius-md);padding:6px 8px;text-align:left;cursor:pointer;font-size:var(--token-font-size-button);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:8px}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;pointer-events:none;padding:2px 2px;font-size:10px}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .icon.sc-at-sidebar-menuitem{font-family:"Material Icons";font-style:normal;display:flex;align-items:center;justify-content:center;line-height:1;font-size:22px;z-index:10;min-width:24px}.sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);border-radius:var(--token-border-radius-md);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h:hover [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.1}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 60%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:var(--token-state-active-foreground)}.sc-at-sidebar-menuitem-h.sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h .sc-at-sidebar-menuitem-s>[slot=icon]{height:24px;width:24px;cursor:pointer}`;

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
     * Icon or svg to be displayed with the label
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
    renderIcon() {
        if (this.icon.endsWith('.svg')) {
            return (index.h("img", { src: this.icon, alt: this.label || '', class: "h-[24px] w-[24px] cursor-pointer" }));
        }
        else {
            return index.h("i", { class: "icon" }, this.icon);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'fd841fb869a8c813e39c9958ac513e83676762b4', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: 'f39cc4aab4a1fc79ad9870934b1a5e6d72494b98', class: "content", "data-name": "content" }, index.h("slot", { key: '7e6c945851cc18bc006ddf908587941f8a494a63', name: "icon", "data-name": "icon" }), index.h("slot", { key: '63f14d698da0766a3c1086d96175c1251ad8c8a0', name: "label", "data-name": "label" }), this.badge && (index.h("at-badge", { key: '8c219f78b47182db4ddab9925b444918eb057769', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && this.renderIcon(), this.label && (index.h("span", { key: '42a1c3428bb6dbb2820c69b9c8922dcd6967c31b', "data-name": "sidebar-menu-item-label", class: "label" }, this.label))), index.h("slot", { key: '53726d76298055f229bb6633d85ac7199dedf9a6', name: "sidebar-menu-item-actions" }), index.h("div", { key: '93a000347c94c2f07353af5e811d2ac696d1fec0', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

exports.at_sidebar_menuitem = AtSidebarMenuitemComponent;
