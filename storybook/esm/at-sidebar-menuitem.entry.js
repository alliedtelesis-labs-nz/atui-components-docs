import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DiMbulBS.js';

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
        return (h(Host, { key: '465def8ea487d40ad23b1a940c3812553bf65907', role: this.is_trigger ? 'presentation' : 'menuitem', "data-state": this.is_active ? 'active' : 'inactive', tabIndex: this.is_trigger ? undefined : 0, onKeyDown: this.is_trigger
                ? undefined
                : (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, h("div", { key: 'e73a6969d2e4f7cc8e7149037d3494053deb2c89', class: "content", "data-name": "content" }, h("slot", { key: '17f68bcb5bc0867034deb2a40f0d642ad839e2d4', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), h("slot", { key: '75aded97de1fd20d8bcc7d10ec5a4e6c341c54fd', name: "label", "data-name": "label" }), this.label && (h("span", { key: '49924c23bcd522fbedce2c005ac0e5525b601326', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (h("at-badge", { key: '72112014553294c246d6e69be4350c8554fe936d', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), h("slot", { key: '7dc85697792b810cdfee66eea6a07b9e16d6f957', name: "sidebar-menu-item-actions" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

export { AtSidebarMenuitemComponent as at_sidebar_menuitem };
