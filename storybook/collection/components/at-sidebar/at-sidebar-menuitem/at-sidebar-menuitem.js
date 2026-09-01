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
        return (h(Host, { key: '75550cefd7cf31f76f00d80c36e9776dc52e53b5', role: this.is_trigger ? 'presentation' : 'menuitem', "data-state": this.is_active ? 'active' : 'inactive', tabIndex: this.is_trigger ? undefined : 0, onKeyDown: this.is_trigger
                ? undefined
                : (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event), "aria-current": this.is_active ? 'page' : undefined }, h("div", { key: '1b50a973e3f3461a1ad55fdd1757c161f52bfea1', class: "content", "data-name": "content" }, h("slot", { key: '6c064ebe4a3397f2398a7118ccb5f00e8ff0480e', name: "icon", "data-name": "icon" }), this.icon && this.renderIcon(), h("slot", { key: '81d99db98b557d832741f3a2f2b2e84298177f43', name: "label", "data-name": "label" }), this.label && (h("span", { key: 'd2bff9c204679d61a454beaa47cdeae39b3e3f3d', "data-name": "sidebar-menu-item-label", class: "label" }, this.label)), this.badge && (h("at-badge", { key: '83909530188445ae6f8b94b4e46ed2db6d9acd05', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge }))), h("slot", { key: 'bff862a781076694f573db46fa91a93732e2fdb2', name: "sidebar-menu-item-actions" })));
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
