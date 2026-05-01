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
        return (h(Host, { key: 'b48f9cc3fb0840d75b22b4b702eda41498fbad22', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'bc080459d5ece3e7092183eb35ad40e74b4d6a0c', role: "group", "aria-labelledby": this.label }, h("li", { key: '2eabd7490e4dab8ba2c6a9f2e024aaff4ae9b3d7', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '6fb53a374be115b19421cd3fc329e31b0131042c' }))));
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
