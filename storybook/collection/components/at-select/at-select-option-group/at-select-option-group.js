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
        return (h(Host, { key: '98e1c563ab7f77406ff989a669661fccb832ce3c', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'e6c4c1cdf05e7661b02f4769a6b5f5b1e2960f8c', role: "group", "aria-labelledby": this.label }, h("li", { key: '27d56bded1bef8e29cb5ae1e0a2874a6827ae7a4', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: 'ea9b5e35b80a1f783a43a2404b8db9bdcf84bac8' }))));
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
