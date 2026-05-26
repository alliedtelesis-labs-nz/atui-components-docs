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
        return (h(Host, { key: 'af65eb294fe163cc5010d4f8873dcdd1e91d795b', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '00333dcbf236019ae725a3e2e5472b420bc26c0e', role: "group", "aria-labelledby": this.label }, h("li", { key: 'b3f4bfa4a6f613761ada30ad753acc7694d1f6de', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '2c0d12be74c2679d49b59ae9e0b52b1cd1e7b8ae' }))));
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
