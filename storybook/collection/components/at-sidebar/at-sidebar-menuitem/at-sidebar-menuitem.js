import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 *
 * @slot sidebar-menu-item-label: Content displayed at the left of the menu item.
 * @slot sidebar-menu-item-actions: Content displayed at the right of the menu item.
 */
export class AtSidebarMenuitemComponent {
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
            this.atuiClick.emit({
                originalEvent: event,
                componentType: 'at-sidebar-menu-item',
            });
        }
    };
    render() {
        return (h(Host, { key: 'd967dcac9a650042d2826d70b9e8eb3b03b54b57', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '242c544656e00140721cbb7bd88a658fa39123df', class: "content", "data-name": "content" }, h("slot", { key: '17f5e005b5ad03b578a2b5fe71d8636efff65fb4', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: 'f0aa4c0044b8c2881792ca744e35eac2adc6ccf8', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && h("i", { key: '15173fddbd988a5dfb4a692805978729271ce4f7', class: "icon" }, this.icon), this.label && (h("span", { key: '8d5d6c297dbd811441224097fbafe0a14b919cbf', "data-name": "sidebar-menu-item-label", class: "label" }, this.label))), h("slot", { key: '50ee629e5f62b58a6e3f7ff55c8219f1368a2dfe', name: "sidebar-menu-item-actions" }), h("div", { key: 'e874e1a92cb137de29c4440abd053a87e7381724', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
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
                    "text": "Icon to be displayed with the label"
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
