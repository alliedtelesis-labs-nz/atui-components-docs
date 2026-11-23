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
        return (h(Host, { key: 'b1161ce522ecac835d2466708387405fdad81bd2', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'be237d9bc406bd8bc8ebd0933fe89e535d95d434', role: "group", "aria-labelledby": this.label }, h("li", { key: 'bbb4a8903a5d835e18a4b02875001bbf52ac2309', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '55d01de08fcd407079a1537bab3b0f0f9e954a7b' }))));
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
