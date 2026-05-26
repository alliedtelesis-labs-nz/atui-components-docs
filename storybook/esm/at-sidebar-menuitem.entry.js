import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';

const atSidebarMenuitemCss = () => `.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;cursor:pointer;text-align:left;padding:8px;border-radius:var(--token-menu-item-radius);font-size:var(--token-font-size-button);color:var(--token-sidebar-foreground);will-change:background-color, color, box-shadow;transition:background-color var(--token-surface-foreground), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:10px;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;padding:2px 2px;font-size:10px;pointer-events:none}.sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;border-radius:var(--token-border-radius-md);background-color:var(--token-surface-overlay);opacity:0;pointer-events:none;transition:background-color 150ms ease-in-out, opacity 150ms ease-in-out}.sc-at-sidebar-menuitem-h.sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h .sc-at-sidebar-menuitem-s>[slot=icon]{cursor:pointer}.sc-at-sidebar-menuitem-h:hover [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.07}.sc-at-sidebar-menuitem-h:focus [data-name=focus-indicator].sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h:focus-visible [data-name=focus-indicator].sc-at-sidebar-menuitem{opacity:0.15}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-accent) 50%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:color-mix(in srgb, var(--token-sidebar-active-accent) 20%, transparent);color:var(--token-sidebar-active-accent)}[data-state=active].sc-at-sidebar-menuitem-h .focus-indicator.sc-at-sidebar-menuitem{background-color:var(--token-state-active-accent)}.sc-at-sidebar-menuitem-h[data-state=active].sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h[data-state=active] .sc-at-sidebar-menuitem-s>[slot=icon]{color:var(--token-sidebar-active-accent);fill:var(--token-sidebar-active-accent)}`;

const AtSidebarMenuitemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
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
    get el() { return getElement(this); }
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
            return (h("img", { src: this.icon, alt: this.label || '', class: "h-[22px] w-[22px] cursor-pointer" }));
        }
        else {
            return (h("at-icon", { name: this.icon, size: "22" }));
        }
    }
    render() {
        return (h(Host, { key: '827d11a547422d87268030c708ef6e1b7600ca6c', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, h("div", { key: 'd8ba4dc17260ac8746380fa255518b3aca4e8eb2', class: "content", "data-name": "content" }, h("slot", { key: '43d6d50e95c6e065553d5927398da73e14c68454', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), h("slot", { key: '49f7458d1e83eb782b0de619b9b936b45a0432d3', name: "label", "data-name": "label" }), this.label && (h("span", { key: '00113dda3d5dfbde1ee40df812051f19e5c41dd6', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (h("at-badge", { key: '67fc29cbbe368a0ee61d15807bc97932b9f7feb2', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), h("slot", { key: '9402322cf05b4143931763272157376234cf2c88', name: "sidebar-menu-item-actions" }), h("div", { key: '7d616431f4dd028a88740c403156199069c4406f', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
