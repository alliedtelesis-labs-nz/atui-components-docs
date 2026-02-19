import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A breadcrumb item component for the breadcrumb.
 */
export class AtBreadcrumbItem {
    /**
     * Applies different styling and makes the element non-clickable when set
     */
    is_active;
    /**
     * Label for the breadcrumb item
     */
    label;
    el;
    render() {
        return (h(Host, { key: '58ad0765eceffd23eb750d3d516d953b022215df', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (h("a", { class: "text-light hover:text-dark cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
    static get is() { return "at-breadcrumb-item"; }
    static get properties() {
        return {
            "is_active": {
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
                    "text": "Applies different styling and makes the element non-clickable when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is_active"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label for the breadcrumb item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            }
        };
    }
    static get elementRef() { return "el"; }
}
