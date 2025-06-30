import { Fragment, h, } from "@stencil/core";
/**
 * A navigation breadcrumb component showing the user's current location in a hierarchical structure.
 * Provides clickable path navigation with customizable separators and accessibility features.
 *
 * @category Navigation
 * @slot - Can be used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) when `values` prop is not set
 */
export class AtuiBreadcrumbComponent {
    constructor() {
        /**
         * Function to get the prefix for breadcrumbs.
         */
        this.get_prefix = () => '';
        /**
         * Delimiter between the prefix and the prefix.
         */
        this.prefix_delimiter = '';
    }
    handleClick(event) {
        const idOfEventTarget = Array.prototype.indexOf.call(this.el.querySelectorAll('atui-breadcrumb-item > a'), event.target);
        if (idOfEventTarget >= 0)
            this.atuiClick.emit(idOfEventTarget);
    }
    render() {
        return (h("nav", { key: '69075bf67b7930c23cd3d5920e176175c14ccafe', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index) => (h(Fragment, null, h("atui-breadcrumb-item", { label: `${this.get_prefix(index)}${this.prefix_delimiter}${value}`, is_active: index === this.values.length - 1 }), index < this.values.length - 1 && (h("i", { class: "material-icons text-icon-md text-light", "aria-hidden": "true", role: "presentation" }, "chevron_right"))))), h("slot", { key: 'c3c48e9d7fc505413be3250b5a4e6204a03ebb1d' })));
    }
    static get is() { return "atui-breadcrumb"; }
    static get properties() {
        return {
            "get_prefix": {
                "type": "unknown",
                "attribute": "get_prefix",
                "mutable": false,
                "complexType": {
                    "original": "(idx: number) => string",
                    "resolved": "(idx: number) => string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Function to get the prefix for breadcrumbs."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "() => ''"
            },
            "prefix_delimiter": {
                "type": "string",
                "attribute": "prefix_delimiter",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Delimiter between the prefix and the prefix."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "values": {
                "type": "unknown",
                "attribute": "values",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) automatically with the string values given"
                },
                "getter": false,
                "setter": false
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
                    "text": "Emits when one of the breadcrumb-items is clicked, `event.detail` is the 0-based index of the breadcrumb-item"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-breadcrumb.js.map
