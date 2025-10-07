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
        return (h(Host, { key: '09ee9ff5f6c4255224d78ba0a72c1ef6201ce4cb', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, class: this.depth ? `depth-${this.depth}` : '', onKeyDown: this.handleKeyDown }, h("div", { key: '02a67551554722151bffab8721505f46c2d0d67d', class: "at-sidebar-menuitem__content" }, h("slot", { key: '8209d09119e5fdbae1b63655bdabe598200f5be8', name: "menu-item-label" }), this.badge && (h("at-badge", { key: '6a278e5bac4d1a278193a837be136ebc06218903', "data-name": "menu-badge", role: "presentation", class: "at-sidebar-menuitem__badge", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (h("span", { key: 'fff0d8e91473941a473495edff4002a806385dbf', class: "material-icons" }, this.icon)), this.label && (h("span", { key: 'f8f08f2e8e818fd1103f42e2098fbd223a8a3cc0', part: "label", "data-name": "sidebar-menu-item-label", class: "at-sidebar-menuitem__label" }, this.label))), h("slot", { key: '2e6da4ce658243bb9b18ecfd9df921bb5e8c5159', name: "menu-item-actions" }), h("div", { key: '6929abc4861c3ae37abacbfb3ed20431f9e9b593', "data-name": "focus-indicator", role: "presentation" })));
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
