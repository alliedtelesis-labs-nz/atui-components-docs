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
        return (h(Host, { key: '06b2591d8b6696cdbed401f4b506ca8608d37300', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'cf0b53dfd38d78184354ad8c5b9532cd7d907c38', role: "group", "aria-labelledby": this.label }, h("li", { key: '5eaba6281b79dec5b6f0a73ff691b249d10b5f4c', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '65cb39204e1b93dd3a31a11f65d662a6bf25d42e' }))));
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
