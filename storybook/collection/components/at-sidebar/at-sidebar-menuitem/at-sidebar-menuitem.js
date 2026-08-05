import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 *
 * @slot icon - Carbon icon displayed at the left of the menu item.
 * @slot label - Content displayed at the left of the menu item.
 * @slot sidebar-menu-item-actions - Content displayed at the right of the menu item.
 */
export class AtSidebarMenuitemComponent {
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
    el;
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
        return (h(Host, { key: 'fd537e23039a613d8be0e97398f3ae9624bd4ae7', role: this.is_trigger ? 'presentation' : 'menuitem', "data-state": this.is_active ? 'active' : 'inactive', tabIndex: this.is_trigger ? undefined : 0, onKeyDown: this.is_trigger
                ? undefined
                : (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, h("div", { key: 'd1f20a4100b029e344aa9d988d2f62acc34be62a', class: "content", "data-name": "content" }, h("slot", { key: '99ac7a78de89305142d3034af7a20c6cbb1ebd15', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), h("slot", { key: 'ec02a8fcae7f7640529fa21ecbc918b296454710', name: "label", "data-name": "label" }), this.label && (h("span", { key: '7e4d3d9a53d147d711cf615157fd1ee807b2cb34', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (h("at-badge", { key: 'fbb7b7d29a4c44b24c7cee2037f77e606c0800c1', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), h("slot", { key: '133f9245e2b9f5b6d6e29a9bdf1ec98fdf3a6789', name: "sidebar-menu-item-actions" })));
    }
    static get is() { return "at-sidebar-menuitem"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-sidebar-menuitem.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar-menuitem.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label to be displayed for the menu item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Carbon icon or svg to be displayed with the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "badge": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Alert badge for the menu item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge"
            },
            "is_active": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Will change style to indicate menuitem is active when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_active"
            },
            "is_trigger": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set when the menu item is used purely as the trigger content of an\natui-sidebar-submenu accordion. The enclosing accordion summary is the\ninteractive control, so the item renders as presentational: it is not a\nseparate tab stop and does not handle its own keyboard activation."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_trigger",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiClick",
                "name": "atuiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the menu item is clicked"
                },
                "complexType": {
                    "original": "AtEvent",
                    "resolved": "AtEvent",
                    "references": {
                        "AtEvent": {
                            "location": "import",
                            "path": "../../../types/events",
                            "id": "src/types/events.ts::AtEvent",
                            "referenceLocation": "AtEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
