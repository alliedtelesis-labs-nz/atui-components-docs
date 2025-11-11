import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 *
 * @slot label: Content displayed at the left of the menu item.
 * @slot actions: Content displayed at the right of the menu item.
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
    el;
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    render() {
        return (h(Host, { key: '2c093d841f54af2d1dead8bb4c9aaa7283341e31', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', tabIndex: 0, onKeyDown: this.handleKeyDown }, h("div", { key: '0a9ae877c784e0b7d009718d2bca81c9798ff3df', class: "content", "data-name": "content" }, h("slot", { key: 'ce28dac5e06cc5c1ebdcb3748567ce7d5dc079b2', name: "label", "data-name": "label" }), this.badge && (h("at-badge", { key: '20317572772e24f6a714e64400f125d7530fe32e', class: "badge", "data-name": "sidebar-menu-item-badge", role: "presentation", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && h("i", { key: 'ab1a4b000510a779f452f16a08d792dc06df8f2f', class: "icon" }, this.icon), this.label && (h("span", { key: 'dad95bd820ce4f157a5f5f63693c70ccedbf44c4', "data-name": "sidebar-menu-item-label", class: "label" }, this.label))), h("slot", { key: '5e64548c5655cdd07933f502d06830b20504ce65', name: "actions" }), h("div", { key: '11abd2ed95da2513c94cfdb62158f3b5b8009c05', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-sidebar-menuitem.js.map
