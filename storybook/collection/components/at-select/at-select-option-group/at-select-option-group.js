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
        return (h(Host, { key: '5396b212eb1f10222b35a31377e6a7f3eaa61c63', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'db29ed6d9c2632554d2f0098d66ccbcb6bbf62ad', role: "group", "aria-labelledby": this.label }, h("li", { key: 'd7935a82fb1f4f95a49de26a8ab23a78196a72c4', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '0a9ea8f09848f976e376db142bb2340a7760acad' }))));
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
