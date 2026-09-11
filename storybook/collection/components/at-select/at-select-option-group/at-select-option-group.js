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
        return (h(Host, { key: '7c05abd0f500d94abe84ef1cdd5ae51cff5fd387', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'e690fe8430fcddf92f63cbb310ed0edff8fc18b3', role: "group", "aria-labelledby": this.label }, h("li", { key: 'a721db4893b96f3d240189916b46a9feef5047b1', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '519ed3f5e38ffbc146fbf83e22a2cbc2aba01c03' }))));
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
