import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-BEGRcYEc.js';

const atSidebarMenuitemCss = () => `.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;cursor:pointer;text-align:left;padding:8px;border-radius:var(--token-menu-item-radius);font-size:var(--token-font-size-button);color:var(--token-sidebar-foreground);will-change:color, box-shadow;transition:color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:10px;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;padding:2px 2px;font-size:10px;pointer-events:none}.sc-at-sidebar-menuitem-h.sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h .sc-at-sidebar-menuitem-s>[slot=icon]{cursor:pointer;z-index:10}.sc-at-sidebar-menuitem-h:hover:not([data-state=active]){background-color:color-mix(in srgb, var(--token-surface-overlay) 7%, transparent)}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:inset 0 0 0 2px color-mix(in srgb, var(--token-state-active-accent) 30%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:var(--token-sidebar-active-background);color:var(--token-sidebar-active-foreground);transition-duration:0ms}.sc-at-sidebar-menuitem-h[data-state=active].sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h[data-state=active] .sc-at-sidebar-menuitem-s>[slot=icon]{color:var(--token-sidebar-active-foreground);fill:var(--token-sidebar-active-foreground)}`;

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
     * Set when the menu item is used purely as the trigger content of an
     * atui-sidebar-submenu accordion. The enclosing accordion summary is the
     * interactive control, so the item renders as presentational: it is not a
     * separate tab stop and does not handle its own keyboard activation.
     */
    is_trigger = false;
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
        return (h(Host, { key: '73df39a3974aea2677ec056f707226b0c853cb62', role: this.is_trigger ? 'presentation' : 'menuitem', "data-state": this.is_active ? 'active' : 'inactive', tabIndex: this.is_trigger ? undefined : 0, onKeyDown: this.is_trigger
                ? undefined
                : (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, h("div", { key: 'c03d7011da2998ad21c5af1c5023e9d70b56a04d', class: "content", "data-name": "content" }, h("slot", { key: '217756565499c335fdb2b14dc405e8351dd71a4b', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), h("slot", { key: '783004d02a0764fb8a5b9f68bead6cb561929cd4', name: "label", "data-name": "label" }), this.label && (h("span", { key: 'f13edda85f2e9d8ae837d4b2daf8be59b62f8aab', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (h("at-badge", { key: '353c221b18114d84039f9b5ad2643a45d0853876', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), h("slot", { key: '06a18302dd94af156a63be5bc90ea7311b84fa8b', name: "sidebar-menu-item-actions" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
