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
        return (h(Host, { key: 'eff524e996fa0c6f503e9414cb0721719aac0319', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '3e9110cb31e6f54ad16dd3ad5741506dc900fee3', role: "group", "aria-labelledby": this.label }, h("li", { key: '931b84f04731e49ba8774b8a8c8933158636e9df', id: this.label, class: "text-light border-light border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: 'cc3f8b13429957e167607bed3ca5796f263d1ffa' }))));
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
