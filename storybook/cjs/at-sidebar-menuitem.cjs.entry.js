'use strict';

var index = require('./index--r5sCsiV.js');

const atSidebarMenuitemCss = () => `.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;cursor:pointer;text-align:left;padding:8px;border-radius:var(--token-menu-item-radius);font-size:var(--token-font-size-button);color:var(--token-sidebar-foreground);will-change:background-color, color, box-shadow;transition:background-color var(--token-surface-foreground), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:10px;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;padding:2px 2px;font-size:10px;pointer-events:none}.sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;border-radius:var(--token-border-radius-md);background-color:var(--token-surface-overlay);opacity:0;pointer-events:none;transition:background-color 150ms ease-in-out, opacity 150ms ease-in-out}.sc-at-sidebar-menuitem-h.sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h .sc-at-sidebar-menuitem-s>[slot=icon]{cursor:pointer}.sc-at-sidebar-menuitem-h:hover [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.07}.sc-at-sidebar-menuitem-h:focus [data-name=focus-indicator].sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h:focus-visible [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.15}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-accent) 50%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:color-mix(in srgb, var(--token-sidebar-active-accent) 20%, transparent);color:var(--token-sidebar-active-accent)}[data-state=active].sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{background-color:var(--token-state-active-accent)}.sc-at-sidebar-menuitem-h[data-state=active].sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h[data-state=active] .sc-at-sidebar-menuitem-s>[slot=icon]{color:var(--token-sidebar-active-accent);fill:var(--token-sidebar-active-accent)}`;

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
     * Carbon icon or svg to be displayed with the label
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
            this.el.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
        }
    };
    renderIcon() {
        if (this.icon.endsWith('.svg')) {
            return (index.h("img", { src: this.icon, alt: this.label || '', class: "h-[22px] w-[22px] cursor-pointer" }));
        }
        else {
            return (index.h("at-icon", { name: this.icon, size: "22" }));
        }
    }
    render() {
        return (index.h(index.Host, { key: 'a0f2b77ff8d1ef7b64c1362cb45a63d33873758f', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, index.h("div", { key: '1a57976a1ff0d0bf69f752c9cc12eb00527197aa', class: "content", "data-name": "content" }, index.h("slot", { key: '2b7bca559e043f9bc719a4539c1e18bad93c7f3a', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), index.h("slot", { key: '33d817c8b2c05069438a49194cfe5549c9c6bf84', name: "label", "data-name": "label" }), this.label && (index.h("span", { key: '45fa50b7cc5e0944d87f7c34e7128f43dfd430b3', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (index.h("at-badge", { key: '402bc031ee84b8e72ce0f4087385a2437c2a788c', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), index.h("slot", { key: 'a19266ae0ca599485ef9218db8005e74005cf02c', name: "sidebar-menu-item-actions" }), index.h("div", { key: '988a21b0f0bebbae811cdd6c5108468be18bf32f', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

exports.at_sidebar_menuitem = AtSidebarMenuitemComponent;
