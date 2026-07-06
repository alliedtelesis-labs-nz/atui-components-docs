'use strict';

var index = require('./index-BVOcg3sk.js');

const atSidebarMenuitemCss = () => `.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem,.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-at-sidebar-menuitem-h{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;cursor:pointer;text-align:left;padding:8px;border-radius:var(--token-menu-item-radius);font-size:var(--token-font-size-button);color:var(--token-sidebar-foreground);will-change:color, box-shadow;transition:color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-menuitem-h .content.sc-at-sidebar-menuitem{display:flex;align-items:center;flex-grow:1;gap:10px;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sc-at-sidebar-menuitem-h .label.sc-at-sidebar-menuitem{z-index:10;font-weight:var(--token-font-weight-med)}.sc-at-sidebar-menuitem-h .badge.sc-at-sidebar-menuitem{position:absolute;top:-8px;left:22px;z-index:20;padding:2px 2px;font-size:10px;pointer-events:none}.sc-at-sidebar-menuitem-h.sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h .sc-at-sidebar-menuitem-s>[slot=icon]{cursor:pointer;z-index:10}.sc-at-sidebar-menuitem-h:hover:not([data-state=active]){background-color:color-mix(in srgb, var(--token-surface-overlay) 7%, transparent)}.sc-at-sidebar-menuitem-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-accent) 30%, transparent)}[data-state=active].sc-at-sidebar-menuitem-h{background-color:var(--token-sidebar-active-background);color:var(--token-sidebar-active-foreground);transition-duration:0ms}.sc-at-sidebar-menuitem-h[data-state=active].sc-at-sidebar-menuitem-s>[slot=icon],.sc-at-sidebar-menuitem-h[data-state=active] .sc-at-sidebar-menuitem-s>[slot=icon]{color:var(--token-sidebar-active-foreground);fill:var(--token-sidebar-active-foreground)}`;

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
        return (index.h(index.Host, { key: 'd2b6881dd4cded6eede6206ce0e3049edd93c9d1', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, index.h("div", { key: '9bb8791ff01e5c79135a0ebdf772d5d3f6c5a74d', class: "content", "data-name": "content" }, index.h("slot", { key: 'ed808916ef360ea361da14c177077dc2805bd569', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), index.h("slot", { key: '829058a3f83698d87e743fc3b33098db91a60f7e', name: "label", "data-name": "label" }), this.label && (index.h("span", { key: '2ba7dbd45c4bd7335761fce8c9d23f6a486dc232', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (index.h("at-badge", { key: 'e1d62ca9c34242b94187a788283d4ac03bd5bad2', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), index.h("slot", { key: '0c68466c4fa3af7cf726ff269df462dfaf1ac751', name: "sidebar-menu-item-actions" })));
    }
};
AtSidebarMenuitemComponent.style = atSidebarMenuitemCss();

exports.at_sidebar_menuitem = AtSidebarMenuitemComponent;
