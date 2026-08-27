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
        return (h(Host, { key: '5d38e42118368dc356f8fb28b7748328d0e98bb4', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'f44579c2d2ad3ca3ef0ff1369abaa09c26ba5aef', role: "group", "aria-labelledby": this.label }, h("li", { key: '29cc954ce230fe8022ffb9f00c871d63b443c828', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '74e611c40215e6873d3dc7c1277d7070bf383f7c' }))));
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
