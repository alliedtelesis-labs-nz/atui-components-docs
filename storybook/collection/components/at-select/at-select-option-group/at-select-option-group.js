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
        return (h(Host, { key: '8fbbeb4f19a5ff74cb0889a5e9b1691a45eb54b3', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '719c27154df92e8d1de4bcf2bc6a864b6971d21a', role: "group", "aria-labelledby": this.label }, h("li", { key: 'a6a67d17e64db51e6567c0d6cc890ba476d74a1e', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '4cbb99d6ae5d828381bc8bd5363d4d085d3b89ff' }))));
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
