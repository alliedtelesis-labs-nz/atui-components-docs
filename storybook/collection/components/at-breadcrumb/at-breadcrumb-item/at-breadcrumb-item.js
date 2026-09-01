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
     * Label for the breadcrumb item. Rendered verbatim — no casing transform is applied, so identifiers such as `AT-x550-hq-01` keep their exact casing.
     */
    label;
    el;
    render() {
        return (h(Host, { key: '4075b23c63ac79d1711bd8153f22ec75302e3621', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-current": "page", class: "text-active-accent cursor-default rounded-lg px-8 py-2" }, this.label)) : (h("a", { role: "link", tabIndex: 0, onKeyDown: (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    event.target.click();
                }
            }, class: "text-muted hover:text-foreground focus-visible:ring-active-glow cursor-pointer rounded-lg px-8 py-2 transition-colors outline-none hover:underline focus-visible:ring" }, this.label))));
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
                    "text": "Label for the breadcrumb item. Rendered verbatim \u2014 no casing transform is applied, so identifiers such as `AT-x550-hq-01` keep their exact casing."
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
