import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
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
     * Defines menuitem styling for font weight and indent 0-3  Default 0
     */
    depth;
    /**
     * Will change style to indicate menuitem is active when set
     */
    is_active;
    el;
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    render() {
        return (h(Host, { key: 'c19b383e10dfc520e0dccdac283a41489820a350', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, class: this.depth ? `depth-${this.depth}` : '', onKeyDown: this.handleKeyDown }, h("div", { key: '4190dad43a75e01467a210f36f27c58fce4d7e73', class: "at-sidebar-menuitem__content" }, h("slot", { key: 'e195c5bd4e43544ef5610bbb2a440898c184311c', name: "menu-item-label" }), this.badge && (h("at-badge", { key: 'e8e07dcd24b355b19a1d01bd4bd34f2d0427ddec', "data-name": "menu-badge", role: "presentation", class: "at-sidebar-menuitem__badge", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: '5f6575395d88251d49f078736449a72f919b0fa0', class: "material-icons" }, this.icon)), this.label && (h("span", { key: '2dd5ab73ce39d94c2d51aa2bf5af3b6cf4063c03', part: "label", "data-name": "sidebar-menu-item-label", class: "at-sidebar-menuitem__label" }, this.label))), h("slot", { key: '58b823af32a890592d6db2c541101ced7b722416', name: "menu-item-actions" }), h("div", { key: 'c86c8fdb8e65a700a380b0aba49832d7615c9b3f', "data-name": "focus-indicator", role: "presentation" })));
    }
    static get is() { return "at-sidebar-menuitem"; }
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
                "attribute": "label",
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
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "reflect": false
            },
            "badge": {
                "type": "string",
                "attribute": "badge",
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
                "reflect": false
            },
            "depth": {
                "type": "number",
                "attribute": "depth",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines menuitem styling for font weight and indent 0-3  Default 0"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "is_active": {
                "type": "boolean",
                "attribute": "is_active",
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-sidebar-menuitem.js.map
