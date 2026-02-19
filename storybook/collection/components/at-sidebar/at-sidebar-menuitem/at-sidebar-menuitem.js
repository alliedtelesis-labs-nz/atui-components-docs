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
        return (h(Host, { key: 'ff7e9305cf8e61a4b2d853e82635cc8748355a0b', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: 'b488920d35d0ca61e2dded9df145a70e1db7cc58', class: "content", "data-name": "content" }, h("slot", { key: '82cde885917788d695a0f95f931eb6ded9eef46e', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: '40aafb7ceb901ae15c17a160ca3d11d5f6db59d2', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && h("i", { key: 'e22188d99e6c67c47651afe49aaadae25561549c', class: "icon" }, this.icon), this.label && (h("span", { key: '70d0db184ecf56e64d2847662393c36d92116073', "data-name": "sidebar-menu-item-label", class: "label" }, this.label))), h("slot", { key: '3436db5531588f925f7160544d449f727957a782', name: "sidebar-menu-item-actions" }), h("div", { key: '355135658c7a43ac41db1bc1083b70f5e7632ece', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
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
