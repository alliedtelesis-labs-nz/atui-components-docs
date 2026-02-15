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
        return (h(Host, { key: '306758dba4f8966853ec7527c8bb8ab2584ea5ee', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'ef34db7e8f1d13681397574f6dc7fe9c0e6a7593', role: "group", "aria-labelledby": this.label }, h("li", { key: 'a7b5b869ac2ebfd0f31c1543a5d7dd995afc64b4', id: this.label, class: "text-light border-light border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '1634e871d0e12937b7db9e1648d7dbc02d4e7731' }))));
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
