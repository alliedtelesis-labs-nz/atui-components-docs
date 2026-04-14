import { h, Host } from "@stencil/core";
/**
 * @category Form Controls
 * @description A wrapper component for grouping select options with proper ARIA semantics.
 * @slot - Use this slot to manually add <at-select-option> elements for the group.
 */
export class AtSelectGroupComponent {
    /**
     * Label for the group displayed as the group title
     */
    label;
    render() {
        return (h(Host, { key: 'e3ccce8d0d66d8476f9605486a76beb5fee33389', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '7610e2d114f87221f9dda623c8b3426f9e8a3ab2', role: "group", "aria-labelledby": this.label }, h("li", { key: 'c70cac8d074000a455bde0800c23054f9adf616a', id: this.label, class: "text-light border-light border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: 'c14d20a9a9fc56ba4c3e700bae5f90e340473bc0' }))));
    }
    static get is() { return "at-select-group"; }
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label for the group displayed as the group title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            }
        };
    }
}
