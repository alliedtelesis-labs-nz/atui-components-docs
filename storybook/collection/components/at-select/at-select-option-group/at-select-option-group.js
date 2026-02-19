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
        return (h(Host, { key: '4c540ed32cde48632323a44f9b7c395ba60c54d3', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '3691130e605e9e10f0b2ff9785a7c0c4dd254ae9', role: "group", "aria-labelledby": this.label }, h("li", { key: '6ca3dfa0e6cbef0676f41b6fc2df242caa9a8ad1', id: this.label, class: "text-light border-light border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '123d32d1c43588725c08b0bcf9a2174607c90797' }))));
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
