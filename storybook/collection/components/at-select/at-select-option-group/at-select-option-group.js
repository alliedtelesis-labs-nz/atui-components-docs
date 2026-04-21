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
        return (h(Host, { key: '0b298a1fdfdba8f6bc859b9e99ea76aedb34c18e', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '9bc4091b9f250c892a520ca9317727bdf6172414', role: "group", "aria-labelledby": this.label }, h("li", { key: '8ac23d048510b01995994371ad21864a16560f22', id: this.label, class: "text-muted border-subtle border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: 'cb62424bf5a41f9a20cf60c414fadfa68499a643' }))));
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
