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
        return (h(Host, { key: 'ce37f56d5093e1225b9e8b1efe829ce5bee6bc4c', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: 'd1b74da53df84dd60fa4c12d970532c20f7c07bf', class: "content", "data-name": "content" }, h("slot", { key: '9715253cba0e733bee43e4816a293af0509a3912', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: 'f2802ab5bb13d0f1f5bd47a19ae1a2cd95876646', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && h("i", { key: '82fb523d004deeef0d8907e13c5d5316d59803a2', class: "icon" }, this.icon), this.label && (h("span", { key: 'b9ef616e6b1e69e614c4b9c6b8c54cc3e1bea722', "data-name": "sidebar-menu-item-label", class: "label" }, this.label))), h("slot", { key: 'c2d192d7158bcc3585783950873fa581538d2e76', name: "sidebar-menu-item-actions" }), h("div", { key: 'c26658bc08821ac28d953c684d7c0c58683814f0', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
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
                            "id": "src/types/events.ts::AtEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-sidebar-menuitem.js.map
