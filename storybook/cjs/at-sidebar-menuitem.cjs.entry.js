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
        return (index.h(index.Host, { key: '9b741f39c9ec7d441d28048fd23c342965f2b9d4', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, index.h("div", { key: '64740bc8a5a43895e942c159b676d808648f3be4', class: "content", "data-name": "content" }, index.h("slot", { key: '3f78dab730a8908acf47d9dd9f051ac4569e39f3', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), index.h("slot", { key: 'd2a2bb87b8f2ec33432615a0c58aeef85c11db59', name: "label", "data-name": "label" }), this.label && (index.h("span", { key: '959155dd0df8028ee48443ef9b7e0ede2271148a', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (index.h("at-badge", { key: '450800ca7e3cb773e8003c34ca2268c85bda0860', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), index.h("slot", { key: '3a623d4a633f87d7e3874af0836d1499cccffadd', name: "sidebar-menu-item-actions" }), index.h("div", { key: 'ce9a469fb97e579e9142ae88767ebd6409f28f13', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

exports.at_sidebar_menuitem = AtSidebarMenuitemComponent;
