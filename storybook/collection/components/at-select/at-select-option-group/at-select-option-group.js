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
        return (h(Host, { key: 'c5c4fb1cf77b6ca5c128fa02582ffedd40fe3c54', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'aafa54846c5f866d60091e974c3179a32531b07e', role: "group", "aria-labelledby": this.label }, h("li", { key: 'b64587d94fef7f1b6cfdf35b2b4973942aaffa6b', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: 'b5a3a63e044d8a6aca37f284fe9d8db10b40a909' }))));
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
